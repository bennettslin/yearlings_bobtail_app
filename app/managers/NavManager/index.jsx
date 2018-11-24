import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { updateAccessStore } from 'flux/access/action'
import { updateSessionStore } from 'flux/session/action'

import { getBookColumnIndex } from 'helpers/dataHelper'

class NavManager extends PureComponent {

    static propTypes = {
        // Through Redux.
        showSingleBookColumn: PropTypes.bool.isRequired,
        shownBookColumnIndex: PropTypes.number.isRequired,
        isCarouselShown: PropTypes.bool.isRequired,
        selectedSongIndex: PropTypes.number.isRequired,

        updateAccessStore: PropTypes.func.isRequired,
        updateSessionStore: PropTypes.func.isRequired,

        // From parent.
        setRef: PropTypes.func.isRequired
    }

    componentDidMount() {
        this.props.setRef(this)
    }

    componentDidUpdate(prevProps) {
        const { selectedSongIndex } = this.props

        if (selectedSongIndex !== prevProps.selectedSongIndex) {

            // Nav will update book column right away.
            this.toggleNavBook({
                resetToDefault: true,
                selectedSongIndex
            })
        }
    }

    toggleNavBook({
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

        this.props.updateSessionStore({ shownBookColumnIndex })
    }

    render() {
        return null
    }
}

const mapStateToProps = ({
    responsiveStore: { showSingleBookColumn },
    songStore: { selectedSongIndex },
    sessionStore: { shownBookColumnIndex },
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
        updateSessionStore
    }, dispatch)
)

export default connect(mapStateToProps, bindDispatchToProps)(NavManager)
