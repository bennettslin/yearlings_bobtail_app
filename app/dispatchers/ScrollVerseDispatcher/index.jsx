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
        updateScrollLyricStore: PropTypes.func.isRequired,
        resetVerseBars: PropTypes.func.isRequired,
        updateToggleStore: PropTypes.func.isRequired,

        // From parent.
        getRefs: PropTypes.func.isRequired
    }

    componentDidMount() {
        this.props.getRefs({
            dispatchScrollVerse: this.dispatchScrollVerse
        })
    }

    dispatchScrollVerse = (isAutoScroll) => {

        this.props.updateScrollLyricStore({
            queuedScrollLyricLog: 'VerseBar click or toggle autoScroll back to selected verse.',
            queuedScrollLyricByVerse: true,
            queuedScrollLyricAlways: true
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

const mapStateToProps = null

const bindDispatchToProps = (dispatch) => (
    bindActionCreators({
        updateScrollLyricStore,
        updateToggleStore,
        resetVerseBars
    }, dispatch)
)

export default connect(mapStateToProps, bindDispatchToProps)(ScrollVerseDispatcher)
