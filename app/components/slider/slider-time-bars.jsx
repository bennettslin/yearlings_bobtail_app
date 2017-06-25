// Bars to indicate time spent and remaining.

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import classnames from 'classnames'
import { getSongTotalTime } from '../../helpers/data-helper'
import { getFormattedTime } from '../../helpers/format-helper'

const SliderTimeBars = ({

    selectedSongIndex,
    selectedTimePlayed,
    isSliderTouched,
    sliderRatio

}) => {

    const totalTime = getSongTotalTime(selectedSongIndex),

        workingRatio = isSliderTouched ?
            sliderRatio : (selectedTimePlayed / totalTime),

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

    return (
        <div className="slider-time-bars">

            <div
                className={classnames(
                    'time-bar',
                    'play-time-bar',
                    'time-remain-bar'
                )}
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
        </div>
    )
}

SliderTimeBars.propTypes = {
    // Through Redux.
    selectedSongIndex: PropTypes.number.isRequired,
    selectedTimePlayed: PropTypes.number.isRequired,
    isSliderTouched: PropTypes.bool.isRequired,
    sliderRatio: PropTypes.number.isRequired,
}

export default connect(({
    selectedSongIndex,
    selectedTimePlayed,
    isSliderTouched,
    sliderRatio
}) => ({
    selectedSongIndex,
    selectedTimePlayed,
    isSliderTouched,
    sliderRatio
}))(SliderTimeBars)
