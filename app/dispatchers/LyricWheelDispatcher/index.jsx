// Child that knows rules to handle lyric wheel.

import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { updateToggleStore } from '../../redux/toggle/action'

class LyricWheelDispatcher extends PureComponent {

    static propTypes = {
        // Through Redux.
        isAutoScroll: PropTypes.bool.isRequired,
        updateToggleStore: PropTypes.func.isRequired,

        // From parent.
        getRefs: PropTypes.func.isRequired,
        determineVerseBars: PropTypes.func.isRequired
    }

    componentDidMount() {
        this.props.getRefs({
            dispatchLyricTouchMoveOrWheel: this.dispatchLyricTouchMoveOrWheel,
            dispatchVerseBarWheel: this.dispatchVerseBarWheel
        })
    }

    dispatchLyricTouchMoveOrWheel = (e, lyricElement) => {

        // If autoScroll is already off, don't bother.
        if (!this.props.isAutoScroll) {
            return
        }

        let hasRoomToScroll = false

        const {
                deltaY = 0,
                type
            } = e,
            isTouchMoveEvent = type !== 'wheel',
            { scrollTop } = lyricElement

        // Only wheel event has deltaY.
        if (deltaY > 0 || isTouchMoveEvent) {
            const {
                scrollHeight,
                clientHeight
            } = lyricElement

            if (scrollTop < scrollHeight - clientHeight) {
                hasRoomToScroll = true
            }

        /**
         * TODO: I no longer understand this code. Why should a negative deltaY
         * make any difference?
         */
        } else if (deltaY < 0) {
            if (scrollTop) {
                hasRoomToScroll = true
            }
        }

        if (
            hasRoomToScroll &&

            /**
             * Select manual scroll only if wheel moved far enough, or
             * if it's a scroll event.
             */
            (deltaY > 1 || deltaY < -1 || isTouchMoveEvent)
        ) {
            this.props.updateToggleStore({ isAutoScroll: false })
        }
    }

    dispatchVerseBarWheel = (e, lyricElement) => {
        const { deltaY } = e.nativeEvent
        lyricElement.scrollTop += deltaY

        this.props.determineVerseBars()
    }

    render() {
        return null
    }
}

const mapStateToProps = ({
    toggleStore: { isAutoScroll }
}) => {
    return {
        isAutoScroll
    }
}

export default connect(
    mapStateToProps,
    { updateToggleStore }
)(LyricWheelDispatcher)
