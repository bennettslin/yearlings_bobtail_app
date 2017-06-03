import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import classnames from 'classnames'
import { getSongVerseTimes,
         getSongStanzaTimes,
         getSongTotalTime } from '../../helpers/data-helper'
import { getFormattedTime } from '../../helpers/format-helper'
import { getComponentShouldUpdate } from '../../helpers/general-helper'
import { getVerseBeginAndEndTimes } from '../../helpers/logic-helper'

/*************
 * CONTAINER *
 *************/

class AudioSlider extends Component {
    constructor(props) {
        super(props)
        this.handleTouchDown = this.handleTouchDown.bind(this)
    }

    shouldComponentUpdate(nextProps) {
        const { props } = this,
            componentShouldUpdate = getComponentShouldUpdate({
                props,
                nextProps,
                updatingPropsArray: [
                    'isSliderTouched',
                    'selectedSongIndex',
                    'selectedVerseIndex',
                    'interactivatedVerseIndex',
                    'sliderVerseIndex',
                    'selectedTimePlayed',
                    'sliderRatio'
                ]
            })

        return componentShouldUpdate
    }

    handleTouchDown(e) {
        this.props.handleAudioSliderTouchBegin(e)
    }

    render() {
        const { isSliderTouched,
                selectedSongIndex,
                selectedVerseIndex,
                interactivatedVerseIndex,
                sliderVerseIndex,
                sliderRatio,
                selectedTimePlayed } = this.props,

            verseTimes = getSongVerseTimes(selectedSongIndex),
            stanzaTimes = getSongStanzaTimes(selectedSongIndex),
            totalTime = getSongTotalTime(selectedSongIndex),

            workingRatio = isSliderTouched ? sliderRatio : (selectedTimePlayed / totalTime),

            spentWidth = workingRatio * 100,
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
                endTime } = getVerseBeginAndEndTimes(selectedSongIndex, cursorVerseIndex),

            cursorPosition = beginTime / totalTime * 100,
            cursorWidth = (endTime - beginTime) / totalTime * 100,
            cursorStyle = {
                left: `${cursorPosition}%`,
                width: `${cursorWidth}%`
            }

        return (
            <AudioSliderView
                cursorVerseIndex={cursorVerseIndex}
                cursorClassName={cursorClassName}
                cursorStyle={cursorStyle}
                spentStyle={spentStyle}
                remainStyle={remainStyle}
                displayedSpentTime={displayedSpentTime}
                displayedRemainTime={displayedRemainTime}
                verseTimes={verseTimes}
                stanzaTimes={stanzaTimes}
                totalTime={totalTime}
                handleMouseDown={this.handleTouchDown}
            />
        )
    }
}

AudioSlider.propTypes = {
    isSliderTouched: PropTypes.bool.isRequired,
    selectedVerseIndex: PropTypes.number.isRequired,
    interactivatedVerseIndex: PropTypes.number.isRequired,
    sliderVerseIndex: PropTypes.number.isRequired,
    selectedTimePlayed: PropTypes.number.isRequired,
    sliderRatio: PropTypes.number
}

/****************
 * PRESENTATION *
 ****************/

const AudioSliderView = ({
    cursorVerseIndex,
    cursorClassName,
    cursorStyle,
    spentStyle,
    remainStyle,
    displayedSpentTime,
    displayedRemainTime,
    verseTimes,
    stanzaTimes,
    totalTime,
    handleMouseDown
}) => (
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
                    className={classnames(
                        'time-bar',
                        'verse-time-bar',
                        cursorPlacementClassName
                    )}
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
            onMouseDown={handleMouseDown}
            // onTouchStart={e => this.handleTouchDown(e)}
        >
        </div>
    </div>
)

AudioSliderView.propTypes = {
    cursorVerseIndex: PropTypes.number.isRequired,
    cursorClassName: PropTypes.string.isRequired,
    cursorStyle: PropTypes.object.isRequired,
    spentStyle: PropTypes.object.isRequired,
    remainStyle: PropTypes.object.isRequired,
    displayedSpentTime: PropTypes.string.isRequired,
    displayedRemainTime: PropTypes.string.isRequired,
    verseTimes: PropTypes.array.isRequired,
    stanzaTimes: PropTypes.array.isRequired,
    totalTime: PropTypes.number.isRequired,
    handleMouseDown: PropTypes.func.isRequired
}

export default connect(({
    interactivatedVerseIndex,
    sliderRatio,
    sliderVerseIndex
}) => ({
    interactivatedVerseIndex,
    sliderRatio,
    sliderVerseIndex
}))(AudioSlider)
