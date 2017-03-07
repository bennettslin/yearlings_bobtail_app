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
    }

    handleMouseOrTouchDown(e) {
        this.props.onMouseOrTouch(e)
    }

    render() {
        const { isLogue,
                isMousedOrTouched,
                hoveredVerseTimeBegin,
                hoveredVerseTimeEnd,
                sliderRatio,
                selectedTimePlayed,
                stanzaTimes,
                totalTime } = this.props,

            workingRatio = isMousedOrTouched ? sliderRatio : (selectedTimePlayed / totalTime),

            playedWidth = !isLogue ? workingRatio * 100 : 0,
            playedStyle = {
                width: `${playedWidth}%`
            },
            remainWidth = 100 - playedWidth,
            remainStyle = {
                width: `${remainWidth}%`
            },
            displayedPlayTime = getFormattedTime(workingRatio * totalTime),
            displayedRemainTime = getFormattedTime((1 - workingRatio) * totalTime) + '-',

            showHovered = hoveredVerseTimeBegin > -1 && hoveredVerseTimeEnd > -1,
            hoveredPosition = showHovered ? (hoveredVerseTimeBegin / totalTime) * 100 : null,
            hoveredWidth = showHovered ? ((hoveredVerseTimeEnd - hoveredVerseTimeBegin) / totalTime) * 100 : null,
            hoveredStyle = showHovered ? {
                left: `${hoveredPosition}%`,
                width: `${hoveredWidth}%`
            } : null

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
                    <div className="below played time-play-display">{displayedPlayTime}</div>
                <div
                    className="time-bar audio-time-bar"
                    style={playedStyle}
                >
                    <div className="above played time-play-display">{displayedPlayTime}</div>
                </div>
                <div
                    className={`hovered-cursor ${showHovered ? 'is-shown' : ''}`}
                    style={hoveredStyle}
                ></div>
                <div className="below remain time-play-display">{displayedRemainTime}</div>
                <div
                    className="above remain time-play-display"
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
