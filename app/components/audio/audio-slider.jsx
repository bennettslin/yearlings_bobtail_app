import React, { Component } from 'react'

/*************
 * CONTAINER *
 *************/

const AudioSlider = (props) => (
    <AudioSliderView {...props} />
)

/****************
 * PRESENTATION *
 ****************/

class AudioSliderView extends Component {
    constructor(props) {
        super(props)

        this.handleMouseOrTouchDown = this.handleMouseOrTouchDown.bind(this)
        this.handleMouseOrTouchMove = this.handleMouseOrTouchMove.bind(this)
        this.handleMouseOrTouchUp = this.handleMouseOrTouchUp.bind(this)

        this.state = {
            isMousedOrTouched: false,
            mousedOrTouchedRatio: null
        }
    }

    handleMouseOrTouchDown(e) {
        this.setState({
            isMousedOrTouched: true,
            mousedOrTouchedRatio: this.getSelectedRatio(e)
        })
    }

    handleMouseOrTouchMove(e) {
        if (this.state.isMousedOrTouched) {
            this.setState({
                mousedOrTouchedRatio: this.getSelectedRatio(e)
            })
        }
    }

    handleMouseOrTouchUp(e) {
        if (this.state.isMousedOrTouched) {
            // FIXME: Still very wonky. mouseLeave and mouseUp might need separate handlers. Does not detect mouse or touch up outside of element, so probably should have a handler on body as well.

            const selectedTime = this.state.mousedOrTouchedRatio * this.props.totalTime
            this.props.onTimeChange(e, selectedTime)

            this.setState({
                isMousedOrTouched: false,
                mousedOrTouchedRatio: null
            })
        }
    }

    getSelectedRatio(e) {
        const rect = e.target.getBoundingClientRect(),
            rectWidth = parseInt(rect.width),
            ratio = e.nativeEvent.offsetX / rectWidth

        return ratio
    }

    render() {
        const { selectedTimePlayed,
                stanzaTimes,
                totalTime } = this.props,

            { isMousedOrTouched,
              mousedOrTouchedRatio } = this.state,

            playedWidth = (mousedOrTouchedRatio === null ? (selectedTimePlayed / totalTime) : mousedOrTouchedRatio) * 100,

            playedStyle = {
                width: `${playedWidth}%`
            }

        return (
            <div
                className="audio-banner audio-slider-block"
            >
                {stanzaTimes.map((stanzaTime, index) => {
                    const stanzaWidth = (totalTime - stanzaTime.time) / totalTime * 100,
                        stanzaStyle = {
                            width: `${stanzaWidth}%`
                        }

                    return (
                        <div
                            key={index}
                            className={`time-bar stanza-time-bar stanza-type-${stanzaTime.type}`}
                            style={stanzaStyle}
                        >
                        </div>
                    )
                })}
                <div
                    className={`time-bar audio-time-bar ${isMousedOrTouched ? 'touched' : 'not-moused-or-touched'}`}
                    style={playedStyle}
                >
                </div>
                <div
                    className="time-bar audio-touch-bar"
                    onMouseDown={e => this.handleMouseOrTouchDown(e)}
                    onMouseMove={e => this.handleMouseOrTouchMove(e)}
                    onMouseLeave={e => this.handleMouseOrTouchUp(e)}
                    onMouseUp={e => this.handleMouseOrTouchUp(e)}
                    // onTouchCancel={e => this.logEvent(e, 'touchCancel')}
                    // onTouchEnd={e => this.logEvent(e, 'touchEnd')}
                    // onTouchMove={e => this.logEvent(e, 'touchMove')}
                    // onTouchStart={e => this.logEvent(e, 'touchStart')}
                >
                </div>
            </div>
        )
    }
}

export default AudioSlider
