// Child that knows rules to toggle admin.

import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { updateScrollLyricStore } from 'flux/scrollLyric/action'
import { updateToggleStore } from 'flux/toggle/action'
import { resetVerseBars } from 'flux/verseBars/action'

class ScrollVerseDispatcher extends PureComponent {

    static propTypes = {
        // Through Redux.
        selectedVerseIndex: PropTypes.number.isRequired,
        updateScrollLyricStore: PropTypes.func.isRequired,
        resetVerseBars: PropTypes.func.isRequired,
        updateToggleStore: PropTypes.func.isRequired,

        // From parent.
        parentThis: PropTypes.object.isRequired
    }

    componentDidMount() {
        this.props.parentThis.dispatchScrollVerse = this.dispatchScrollVerse
    }

    dispatchScrollVerse = (isAutoScroll) => {
        const { selectedVerseIndex } = this.props

        this.props.updateScrollLyricStore({
            queuedScrollLyricLog: 'Scroll back to selected verse.',
            queuedScrollLyricByVerse: true,
            queuedScrollLyricIndex: selectedVerseIndex
        })

        this.props.resetVerseBars()
        this.props.updateToggleStore({
            ...isAutoScroll && { isAutoScroll }
        })
    }

    render() {
        return null
    }
}

const mapStateToProps = ({
    songStore: { selectedVerseIndex }
}) => ({
    selectedVerseIndex
})

const bindDispatchToProps = (dispatch) => (
    bindActionCreators({
        updateScrollLyricStore,
        updateToggleStore,
        resetVerseBars
    }, dispatch)
)

export default connect(mapStateToProps, bindDispatchToProps)(ScrollVerseDispatcher)
