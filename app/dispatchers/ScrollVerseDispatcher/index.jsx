// Child that knows rules to toggle admin.

import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { updateScrollLyricStore } from '../../redux/scrollLyric/action'
import { updateToggleStore } from '../../redux/toggle/action'

class ScrollVerseDispatcher extends PureComponent {

    static propTypes = {
        // Through Redux.
        updateScrollLyricStore: PropTypes.func.isRequired,
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
            queuedScrollLyricLog:
                'VerseBar click or autoScroll toggle back to selected verse.',
            queuedScrollLyricByVerse: true,
            queuedScrollLyricAlways: true
        })

        this.props.updateToggleStore({
            ...isAutoScroll && { isAutoScroll }
        })
    }

    render() {
        return null
    }
}

const mapStateToProps = null

export default connect(
    mapStateToProps,
    {
        updateScrollLyricStore,
        updateToggleStore
    }
)(ScrollVerseDispatcher)
