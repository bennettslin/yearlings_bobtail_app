import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { getFormattedTime } from '../../helpers/format-helper'
import { getVerseBeginAndEndTimes } from '../../helpers/logic-helper'

/*************
 * CONTAINER *
 *************/

const AudioSlider = (props) => (
    <AudioSliderView {...props} />
)

AudioSlider.propTypes = {
    isLogue: PropTypes.bool.isRequired,
    isMousedOrTouched: PropTypes.bool.isRequired,
    selectedVerseIndex: PropTypes.number.isRequired,
    interactivatedVerseIndex: PropTypes.number.isRequired,
    sliderVerseIndex: PropTypes.number.isRequired,
    selectedTimePlayed: PropTypes.number.isRequired,
    sliderRatio: PropTypes.number,
    totalTime: PropTypes.number,
    stanzaTimes: PropTypes.array.isRequired,
    verseTimes: PropTypes.array
}

/****************
 * PRESENTATION *
 ****************/

class AudioSliderView extends Component {
    constructor(props) {
        super(props)

        this.handleTouchDown = this.handleTouchDown.bind(this)
    }

    handleTouchDown(e) {
        this.props.onTouch(e)
    }

    render() {
        const { isLogue,
                isMousedOrTouched,
                selectedVerseIndex,
                interactivatedVerseIndex,
                sliderVerseIndex,
                sliderRatio,
                selectedTimePlayed,
                stanzaTimes,
                verseTimes,
                totalTime } = this.props,

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
            displayedRemainTime = getFormattedTime((1 - workingRatio) * totalTime) + '-'

            let cursorVerseIndex,
                cursorClassName

            if (sliderVerseIndex > -1) {
                cursorVerseIndex = sliderVerseIndex
                cursorClassName = 'slider-selected'
            } else if (interactivatedVerseIndex > -1) {
                cursorVerseIndex = interactivatedVerseIndex
                cursorClassName = 'hovered'
            } else {
                cursorVerseIndex = selectedVerseIndex
                cursorClassName = 'selected'
            }

            const { beginTime,
                    endTime } = getVerseBeginAndEndTimes(this.props, cursorVerseIndex),

                cursorPosition = beginTime / totalTime * 100,
                cursorWidth = !isLogue ? (endTime - beginTime) / totalTime * 100 : 0,
                cursorStyle = {
                    left: `${cursorPosition}%`,
                    width: `${cursorWidth}%`
                }

        return (
            <div
                className={`audio-banner audio-slider-block is-${cursorClassName}-cursor`}
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

                {false && verseTimes.map((verseTime, index) => {

                    // Don't show title verse.
                    if (verseTime < 0) {
                        return null
                    }

                    const verseWidth = (totalTime - verseTime) / totalTime * 100,
                        verseStyle = {
                            width: `${verseWidth}%`
                        }

                    let cursorPlacementClassName

                    if (index === cursorVerseIndex) {
                        cursorPlacementClassName = 'on-cursor'
                    } else if (index < cursorVerseIndex) {
                        cursorPlacementClassName = 'before-cursor'
                    } else {
                        cursorPlacementClassName = 'after-cursor'
                    }

                    return (
                        <div
                            key={index}
                            className={`time-bar verse-time-bar ${cursorPlacementClassName}`}
                            style={verseStyle}
                        >
                        </div>
                    )
                })}

                <div
                    className="audio-cursor"
                    style={cursorStyle}
                ></div>

                <div className="below spent play-time-display">{displayedSpentTime}</div>
                <div
                    className="time-bar play-time-bar time-spent-bar"
                    style={spentStyle}
                >
                    <div className="above spent play-time-display">{displayedSpentTime}</div>
                </div>
                <div className="below remain play-time-display">{displayedRemainTime}</div>

                <div
                    className="above remain play-time-display"
                    style={remainStyle}
                >
                    {displayedRemainTime}
                </div>
                <div
                    className="time-bar audio-touch-bar"
                    onMouseDown={!isLogue ? e => this.handleTouchDown(e) : null}
                    // onTouchStart={e => this.handleTouchDown(e)}
                >
                </div>
            </div>
        )
    }
}

export default AudioSlider
