// Child that knows rules to handle lyric wheel.

import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { updateToggleStore } from 'flux/toggle/action'

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
            dispatchLyricScroll: this.dispatchLyricScroll,
            dispatchVerseBarWheel: this.dispatchVerseBarWheel
        })
    }

    dispatchLyricScroll = (e, lyricElement) => {
        let hasRoomToScroll = false

        // Determine whether there is room to scroll.
        if (e) {
            const {
                    deltaY = 0,
                    type
                } = e,
                isScrollEvent = type === 'scroll',
                { scrollTop } = lyricElement

            // Only wheel event has deltaY.
            if (deltaY > 0 || isScrollEvent) {
                const {
                    scrollHeight,
                    clientHeight
                } = lyricElement

                if (scrollTop < scrollHeight - clientHeight) {
                    hasRoomToScroll = true
                }

            } else if (deltaY < 0) {
                if (scrollTop) {
                    hasRoomToScroll = true
                }
            }

            if (hasRoomToScroll) {
                if (
                    // To improve performance, only set in Redux if needed.
                    this.props.isAutoScroll &&

                    /**
                     * Select manual scroll only if wheel moved far enough, or
                     * if it's a scroll event.
                     */
                    (deltaY > 1 || deltaY < -1 || isScrollEvent)
                ) {
                    this.props.updateToggleStore({ isAutoScroll: false })
                }

                this.props.determineVerseBars()

            } else {

                // If no room to scroll, don't bother to send event.
                e.preventDefault()
            }
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
}) => ({
    isAutoScroll
})

export default connect(
    mapStateToProps,
    { updateToggleStore }
)(LyricWheelDispatcher)
