import { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { updateAccessStore } from 'flux/access/action'

import { setShownBookColumnIndex } from 'flux/session/action'
import { getBookColumnIndex } from 'helpers/dataHelper'
import { getPropsAreShallowEqual } from 'helpers/generalHelper'

class NavManager extends Component {

    static propTypes = {
        // Through Redux.
        showSingleBookColumn: PropTypes.bool.isRequired,
        shownBookColumnIndex: PropTypes.number.isRequired,
        isCarouselShown: PropTypes.bool.isRequired,
        selectedSongIndex: PropTypes.number.isRequired,

        updateAccessStore: PropTypes.func.isRequired,
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
        isCarouselShown = this.props.isCarouselShown,
        selectedSongIndex = this.props.selectedSongIndex
    } = {}) {
        // Either toggle or reset. Book column index is 1-based.

        /**
         * We shouldn't be able to select book column if it's not a single
         * column, or if nav is collapsed, unless we are resetting to default.
         */
        if (!resetToDefault && !(this.props.showSingleBookColumn && !isCarouselShown)) {
            return false
        }

        // Reset to default upon song change or nav expand.
        if (resetToDefault) {
            shownBookColumnIndex = getBookColumnIndex(selectedSongIndex)
        }

        this.props.setShownBookColumnIndex(shownBookColumnIndex)
    }

    accessNavSong(accessedNavSongIndex) {
        this.props.updateAccessStore({ accessedNavSongIndex })
    }

    render() {
        return null
    }
}

const mapStateToProps = ({
    responsiveStore: { showSingleBookColumn },
    songStore: { selectedSongIndex },
    shownBookColumnIndex,
    toggleStore: { isCarouselShown }
}) => ({
    showSingleBookColumn,
    selectedSongIndex,
    shownBookColumnIndex,
    isCarouselShown
})

const bindDispatchToProps = (dispatch) => (
    bindActionCreators({
        updateAccessStore,
        setShownBookColumnIndex
    }, dispatch)
)

export default connect(mapStateToProps, bindDispatchToProps)(NavManager)
