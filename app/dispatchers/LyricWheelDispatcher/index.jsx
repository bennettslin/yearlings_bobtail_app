// Child that knows rules to handle lyric wheel.

import { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { updateToggleStore } from 'flux/toggle/action'
import { updateVerseBarsStore } from 'flux/verseBars/action'

class LyricWheelDispatcher extends PureComponent {

    static propTypes = {
        // Through Redux.
        updateToggleStore: PropTypes.func.isRequired,
        updateVerseBarsStore: PropTypes.func.isRequired,

        // From parent.
        getDispatch: PropTypes.object.isRequired
    }

    componentDidMount() {
        this.props.getDispatch.dispatchLyricWheel = this.dispatchLyricWheel
        this.props.getDispatch.dispatchVerseBarWheel = this.dispatchVerseBarWheel
    }

    dispatchLyricWheel = (
        e, lyricElement, { timeoutDuration } = {}
    ) => {
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

                // Select manual scroll only if wheel moved far enough.
                if (deltaY > 1 || deltaY < -1) {
                    this.props.updateToggleStore({ isAutoScroll: false })
                }

            } else {

                // If no room to scroll, don't bother to send event.
                e.preventDefault()
            }
        }

        // Determine verse bars if scrolled, or if triggered manually.
        if (hasRoomToScroll || !e) {
            this.props.updateVerseBarsStore({
                doDetermineVerseBars: true,
                verseBarsTimeout: timeoutDuration
            })
        }
    }

    dispatchVerseBarWheel = (e, lyricElement) => {
        const { deltaY } = e.nativeEvent
        lyricElement.scrollTop += deltaY

        this.props.updateVerseBarsStore({ doDetermineVerseBars: true })
    }

    render() {
        return null
    }
}

const mapStateToProps = null

const bindDispatchToProps = (dispatch) => (
    bindActionCreators({
        updateToggleStore,
        updateVerseBarsStore
    }, dispatch)
)

export default connect(mapStateToProps, bindDispatchToProps)(LyricWheelDispatcher)
