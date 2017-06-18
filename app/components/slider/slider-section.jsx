// Component to manually change played time and verse.

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import classnames from 'classnames'
import SliderStanzas from './slider-stanzas'
import SliderVerses from './slider-verses'
import { getSongTotalTime } from '../../helpers/data-helper'
import { getFormattedTime } from '../../helpers/format-helper'
import { getComponentShouldUpdate } from '../../helpers/general-helper'
import { getVerseBeginAndEndTimes } from '../../helpers/logic-helper'

/*************
 * CONTAINER *
 *************/

class SliderSection extends Component {
    constructor(props) {
        super(props)
        this._handleTouchDown = this._handleTouchDown.bind(this)
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

    _handleTouchDown(e) {
        this.props.handleSliderTouchBegin(e)
    }

    render() {
        const { isSliderTouched,
                selectedSongIndex,
                selectedVerseIndex,
                selectedTimePlayed,
                interactivatedVerseIndex,
                sliderVerseIndex,
                sliderRatio } = this.props,

            totalTime = getSongTotalTime(selectedSongIndex),

            workingRatio = isSliderTouched ? sliderRatio : (selectedTimePlayed / totalTime),

            spentWidth = workingRatio * 100,
            spentStyle = {
                width: `${spentWidth}%`
            },
            displayedSpentTime = getFormattedTime(workingRatio * totalTime),

            remainWidth = 100 - spentWidth,
            remainStyle = {
                width: `${remainWidth}%`
            },
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
            <SliderSectionView
                cursorVerseIndex={cursorVerseIndex}
                cursorClassName={cursorClassName}
                cursorStyle={cursorStyle}
                spentStyle={spentStyle}
                remainStyle={remainStyle}
                displayedSpentTime={displayedSpentTime}
                displayedRemainTime={displayedRemainTime}
                handleTouchDown={this._handleTouchDown}
            />
        )
    }
}

SliderSection.propTypes = {
    // Through Redux.
    selectedSongIndex: PropTypes.number.isRequired,
    selectedVerseIndex: PropTypes.number.isRequired,
    selectedTimePlayed: PropTypes.number.isRequired,
    interactivatedVerseIndex: PropTypes.number.isRequired,
    isSliderTouched: PropTypes.bool.isRequired,
    sliderVerseIndex: PropTypes.number.isRequired,
    sliderRatio: PropTypes.number.isRequired,

    // From parent.
    handleSliderTouchBegin: PropTypes.func.isRequired
}

/****************
 * PRESENTATION *
 ****************/

const SliderSectionView = ({
    cursorClassName,
    cursorStyle,
    spentStyle,
    remainStyle,
    displayedSpentTime,
    displayedRemainTime,
    cursorVerseIndex,

    handleTouchDown
}) => {

    return (
        <div
            className={classnames(
                'audio-banner',
                'audio-slider-block',
                `is-${cursorClassName}-cursor`
            )}
        >
            {/* These are static for each song. */}
            <SliderStanzas />

            <div
                className={classnames(
                    'time-bar',
                    'play-time-bar',
                    'time-remain-bar'
                )}
            />

            <SliderVerses
                cursorVerseIndex={cursorVerseIndex}
            />

            <div
                className="audio-cursor"
                style={cursorStyle}
            />

            {/* Spent time display below spent bar. */}
            <div className={classnames(
                'below',
                'spent',
                'play-time-display'
            )}>
                {displayedSpentTime}
            </div>

            <div
                className={classnames(
                    'time-bar',
                    'play-time-bar',
                    'time-spent-bar'
                )}
                style={spentStyle}
            >
                {/* Spent time display above spent bar. */}
                <div className={classnames(
                    'above',
                    'spent',
                    'play-time-display'
                )}>
                    {displayedSpentTime}
                </div>
            </div>

            {/* Remaining time display below spent bar. */}
            <div className={classnames(
                'below',
                'remain',
                'play-time-display'
            )}>
                {displayedRemainTime}
            </div>

            {/* Remaining time display above spent bar. */}
            <div
                className={classnames(
                    'above',
                    'remain',
                    'play-time-display'
                )}
                style={remainStyle}
            >
                {displayedRemainTime}
            </div>

            {/* Handle touch interactions. */}
            <div
                className={classnames(
                    'time-bar',
                    'audio-touch-bar'
                )}
                onMouseDown={handleTouchDown}
                onTouchStart={handleTouchDown}
            >
            </div>
        </div>
    )
}

SliderSectionView.propTypes = {
    // From parent.
    cursorVerseIndex: PropTypes.number.isRequired,
    cursorClassName: PropTypes.string.isRequired,
    cursorStyle: PropTypes.object.isRequired,
    spentStyle: PropTypes.object.isRequired,
    remainStyle: PropTypes.object.isRequired,
    displayedSpentTime: PropTypes.string.isRequired,
    displayedRemainTime: PropTypes.string.isRequired,
    handleTouchDown: PropTypes.func.isRequired
}

export default connect(({
    selectedSongIndex,
    selectedTimePlayed,
    selectedVerseIndex,
    interactivatedVerseIndex,
    isSliderTouched,
    sliderVerseIndex,
    sliderRatio
}) => ({
    selectedSongIndex,
    selectedTimePlayed,
    selectedVerseIndex,
    interactivatedVerseIndex,
    isSliderTouched,
    sliderVerseIndex,
    sliderRatio
}))(SliderSection)
