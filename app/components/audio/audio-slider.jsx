import React, { Component } from 'react'
import { getFormattedTime } from 'helpers/format-helper'

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

        this.state = {
            hoveredPosition: null,
            hoveredWidth: null,
            hoveredClassName: ''
        }
    }

    componentWillUpdate(nextProps) {

        /**
         * Hover should animate position and width only when going from one
         * verse to another.
         */
        const newState = {}

        // We are ending hover.
        if (nextProps.hoveredVerseIndex === -1 && this.props.hoveredVerseIndex > -1) {

            // Do not reset position or width, only hover status.
            newState.hoveredClassName = ''

        } else {

            // We are hovering.
            if (nextProps.hoveredVerseIndex > -1) {

                // Distinguish between beginning hover and continuing hover.
                if (this.props.hoveredVerseIndex === -1) {
                    newState.hoveredClassName = 'hovered'
                }
            }

            if (nextProps.hoveredVerseTimeBegin !== -1 && nextProps.hoveredVerseTimeEnd !== -1) {
                const hoveredVerseTimeBeginChanged = nextProps.hoveredVerseTimeBegin !== this.props.hoveredVerseTimeBegin,
                hoveredVerseTimeEndChanged = nextProps.hoveredVerseTimeEnd !== this.props.hoveredVerseTimeEnd

                if (hoveredVerseTimeBeginChanged || hoveredVerseTimeEndChanged) {
                    const { hoveredVerseTimeBegin,
                        hoveredVerseTimeEnd,
                        totalTime } = nextProps,

                        hoveredPosition = hoveredVerseTimeBegin / totalTime * 100,
                        hoveredWidth = (hoveredVerseTimeEnd - hoveredVerseTimeBegin) / totalTime * 100

                        newState.hoveredPosition = hoveredPosition
                        newState.hoveredWidth = hoveredWidth

                } else if (this.state.hoveredClassName !== 'hovered continue-hovered') {
                    newState.hoveredClassName = 'hovered continue-hovered'
                }
            }
        }

        if (Object.keys(newState).length > 0) {
            this.setState(newState)
        }
    }

    handleMouseOrTouchDown(e) {
        this.props.onMouseOrTouch(e)
    }

    render() {
        const { isLogue,
                isMousedOrTouched,
                hoveredVerseTimeBegin,
                hoveredVerseTimeEnd,
                hoveredVerseIndex,
                sliderRatio,
                selectedTimePlayed,
                stanzaTimes,
                verseTimes,
                totalTime } = this.props,

            { hoveredPosition,
              hoveredWidth,
              hoveredClassName } = this.state,

            workingRatio = isMousedOrTouched ? sliderRatio : (selectedTimePlayed / totalTime),

            spentWidth = !isLogue ? workingRatio * 100 : 0,
            spentStyle = {
                width: `${spentWidth}%`
            },
            remainWidth = 100 - spentWidth,
            remainStyle = {
                width: `${remainWidth}%`
            },
            displayedSpentTime = getFormattedTime(workingRatio * totalTime),
            displayedRemainTime = getFormattedTime((1 - workingRatio) * totalTime) + '-',

            // showHovered = hoveredVerseTimeBegin > -1 && hoveredVerseTimeEnd > -1,
            // hoveredPosition = showHovered ? (hoveredVerseTimeBegin / totalTime) * 100 : null,
            // hoveredWidth = showHovered ? ((hoveredVerseTimeEnd - hoveredVerseTimeBegin) / totalTime) * 100 : null,
            hoveredStyle = {
                left: `${hoveredPosition}%`,
                width: `${hoveredWidth}%`
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
                    className="time-bar play-time-bar time-remain-bar"
                >
                </div>

                <div className="below spent play-time-display">{displayedSpentTime}</div>
                <div
                    className="time-bar play-time-bar time-spent-bar"
                    style={spentStyle}
                >
                    <div className="above spent play-time-display">{displayedSpentTime}</div>
                </div>
                <div className="below remain play-time-display">{displayedRemainTime}</div>

                <div
                    className={`hovered-cursor ${hoveredClassName}`}
                    style={hoveredStyle}
                ></div>

                {false && verseTimes.map((verseTime, index) => {

                    // Don't show title verse.
                    if (verseTime < 0) {
                        return null
                    }

                    const nextVerseIndex = index + 1,
                        nextVerseTime = nextVerseIndex === (verseTimes.length) ? totalTime : verseTimes[nextVerseIndex],

                        versePosition = verseTime / totalTime * 100,
                        verseWidth = (nextVerseTime - verseTime) / totalTime * 100,
                        verseStyle = {
                            left: `${versePosition}%`,
                            width: `${verseWidth}%`
                        },
                        hoveredClassName = hoveredVerseIndex === index ? 'hovered' : ''

                    return (
                        <div
                            key={index}
                            className={`time-bar verse-time-bar ${hoveredClassName}`}
                            style={verseStyle}
                        >
                        </div>
                    )
                })}

                <div
                    className="above remain play-time-display"
                    style={remainStyle}
                >
                    {displayedRemainTime}
                </div>
                <div
                    className="time-bar audio-touch-bar"
                    onMouseDown={!isLogue ? e => this.handleMouseOrTouchDown(e) : null}
                    // onTouchStart={e => this.handleMouseOrTouchDown(e)}
                >
                </div>
            </div>
        )
    }
}

export default AudioSlider
