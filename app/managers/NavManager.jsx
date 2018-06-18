import { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { accessNavSongIndex } from '../redux/actions/access'

import { setShownBookColumnIndex } from '../redux/actions/session'
import { getBookColumnIndex } from '../helpers/dataHelper'

class NavManager extends Component {

    static propTypes = {
        // Through Redux.
        showSingleBookColumn: PropTypes.bool.isRequired,
        shownBookColumnIndex: PropTypes.number.isRequired,
        selectedCarouselNavIndex: PropTypes.number.isRequired,
        selectedSongIndex: PropTypes.number.isRequired,

        accessNavSongIndex: PropTypes.func.isRequired,
        setShownBookColumnIndex: PropTypes.func.isRequired,

        // From parent.
        getRef: PropTypes.func.isRequired
    }

    componentDidMount() {
        this.props.getRef(this)
    }

    selectBookColumn({
        shownBookColumnIndex = (this.props.shownBookColumnIndex + 1) % 2,
        resetToDefault,
        selectedCarouselNavIndex = this.props.selectedCarouselNavIndex,
        selectedSongIndex = this.props.selectedSongIndex
    }) {
        // Either toggle or reset. Book column index is 1-based.

        /**
         * We shouldn't be able to select book column if it's not a single
         * column, or if nav is collapsed, unless we are resetting to default.
         */
        if (!resetToDefault && !(this.props.showSingleBookColumn && !selectedCarouselNavIndex)) {
            return false
        }

        // Reset to default upon song change or nav expand.
        if (resetToDefault) {
            shownBookColumnIndex = getBookColumnIndex(selectedSongIndex)
        }

        this.props.setShownBookColumnIndex(shownBookColumnIndex)
    }

    accessNavSong(accessedNavSongIndex) {
        this.props.accessNavSongIndex(accessedNavSongIndex)
    }

    render() {
        return null
    }
}

const mapStateToProps = ({
    showSingleBookColumn,
    shownBookColumnIndex,
    selectedCarouselNavIndex,
    selectedSongIndex
}) => ({
    showSingleBookColumn,
    shownBookColumnIndex,
    selectedCarouselNavIndex,
    selectedSongIndex
})

const bindDispatchToProps = (dispatch) => (
    bindActionCreators({
        accessNavSongIndex,
        setShownBookColumnIndex
    }, dispatch)
)

export default connect(mapStateToProps, bindDispatchToProps)(NavManager)
