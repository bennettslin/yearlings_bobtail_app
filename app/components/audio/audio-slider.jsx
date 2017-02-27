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

        this.state = {
            mousedOrTouchedRatio: null
        }
    }

    componentWillUpdate(nextProps) {
        if (nextProps.isMousedOrTouched === false &&
            this.props.isMousedOrTouched === true) {

            const selectedTime = this.state.mousedOrTouchedRatio * this.props.totalTime
            this.props.onTimeChange(true, selectedTime)

            this.setState({
                mousedOrTouchedRatio: null
            })
        }
    }

    handleMouseOrTouchDown(e) {
        this.props.onMouseOrTouch()

        this.setState({
            mousedOrTouchedRatio: this.getSelectedRatio(e)
        })
    }

    handleMouseOrTouchMove(e) {
        if (this.props.isMousedOrTouched) {
            this.setState({
                mousedOrTouchedRatio: this.getSelectedRatio(e)
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
        const { isMousedOrTouched,
                selectedTimePlayed,
                stanzaTimes,
                totalTime } = this.props,

            { mousedOrTouchedRatio } = this.state,

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
