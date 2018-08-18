import { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { accessNavSongIndex } from 'flux/actions/access'

import { setShownBookColumnIndex } from 'flux/actions/session'
import { getBookColumnIndex } from 'helpers/dataHelper'
import { getPropsAreShallowEqual } from 'helpers/generalHelper'

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
        setRef: PropTypes.func.isRequired
    }

    componentDidMount() {
        this.props.setRef(this)
    }

    shouldComponentUpdate(nextProps) {
        return !getPropsAreShallowEqual({
            props: this.props,
            nextProps
        })
    }

    componentDidUpdate(prevProps) {
        const { selectedSongIndex } = this.props

        if (selectedSongIndex !== prevProps.selectedSongIndex) {
            this.accessNavSong(selectedSongIndex)

            // Nav will update book column right away.
            this.selectBookColumn({
                resetToDefault: true,
                selectedSongIndex
            })
        }
    }

    selectBookColumn({
        shownBookColumnIndex = (this.props.shownBookColumnIndex + 1) % 2,
        resetToDefault,
        selectedCarouselNavIndex = this.props.selectedCarouselNavIndex,
        selectedSongIndex = this.props.selectedSongIndex
    } = {}) {
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
    responsiveStore: { showSingleBookColumn },
    songStore: { selectedSongIndex },
    shownBookColumnIndex,
    selectedCarouselNavIndex
}) => ({
    showSingleBookColumn,
    selectedSongIndex,
    shownBookColumnIndex,
    selectedCarouselNavIndex
})

const bindDispatchToProps = (dispatch) => (
    bindActionCreators({
        accessNavSongIndex,
        setShownBookColumnIndex
    }, dispatch)
)

export default connect(mapStateToProps, bindDispatchToProps)(NavManager)
