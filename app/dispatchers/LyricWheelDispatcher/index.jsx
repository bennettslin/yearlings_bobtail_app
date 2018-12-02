// Child that knows rules to handle lyric wheel.

import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { updateToggleStore } from 'flux/toggle/action'

class LyricWheelDispatcher extends PureComponent {

    static propTypes = {
        // Through Redux.
        isAutoScroll: PropTypes.bool.isRequired,
        updateToggleStore: PropTypes.func.isRequired,

        // From parent.
        parentThis: PropTypes.object.isRequired,
        dispatchVerseBarsTimeout: PropTypes.func
    }

    componentDidMount() {
        this.props.parentThis.dispatchLyricWheel = this.dispatchLyricWheel
        this.props.parentThis.dispatchVerseBarWheel = this.dispatchVerseBarWheel
    }

    dispatchLyricWheel = (e, lyricElement) => {
        let hasRoomToScroll = false

        // Determine whether there is room to scroll.
        if (e) {
            const { deltaY = 0 } = e,
                { scrollTop } = lyricElement

            if (deltaY > 0) {
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

                    // Select manual scroll only if wheel moved far enough.
                    (deltaY > 1 || deltaY < -1)
                ) {
                    this.props.updateToggleStore({ isAutoScroll: false })
                }

                this.props.dispatchVerseBarsTimeout()

            } else {

                // If no room to scroll, don't bother to send event.
                e.preventDefault()
            }
        }
    }

    dispatchVerseBarWheel = (e, lyricElement) => {
        const { deltaY } = e.nativeEvent
        lyricElement.scrollTop += deltaY

        this.props.dispatchVerseBarsTimeout()
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

const bindDispatchToProps = (dispatch) => (
    bindActionCreators({
        updateToggleStore
    }, dispatch)
)

export default connect(mapStateToProps, bindDispatchToProps)(LyricWheelDispatcher)
