import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { updateScrollOverlayStore } from '../../redux/scrollOverlay/action'

class ScrollOverlayHandler extends PureComponent {

    static propTypes = {
        // Through Redux.
        lyricScrollTop: PropTypes.number.isRequired,
        updateScrollOverlayStore: PropTypes.func.isRequired,

        // From parent.
        getRefs: PropTypes.func.isRequired,
        getLyricElement: PropTypes.func.isRequired
    }

    state = {
        scrollTimeoutId: ''
    }

    componentDidMount() {
        // Allow wheels to dispatch directly.
        this.props.getRefs({
            dispatchScrollTimeout: this.dispatchScrollTimeout
        })
    }

    dispatchScrollTimeout = (timeoutDuration = 50) => {

        this.props.updateScrollOverlayStore({
            isScrolling: true,
            lyricScrollTop: this.props.getLyricElement().scrollTop
        })

        clearTimeout(this.state.scrollTimeoutId)

        const scrollTimeoutId = setTimeout(
            this._dispatchScroll,
            timeoutDuration
        )

        this.setState({
            scrollTimeoutId
        })
    }

    _dispatchScroll = () => {
        const
            { lyricScrollTop } = this.props,
            nextScrollTop = this.props.getLyricElement().scrollTop

        this.props.updateScrollOverlayStore({
            isScrolling: lyricScrollTop !== nextScrollTop,
            lyricScrollTop: nextScrollTop
        })
    }

    render() {
        return null
    }
}

const mapStateToProps = ({
    scrollOverlayStore: { lyricScrollTop }
}) => ({
    lyricScrollTop
})

export default connect(
    mapStateToProps,
    { updateScrollOverlayStore }
)(ScrollOverlayHandler)
