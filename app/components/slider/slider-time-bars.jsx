// Bars to indicate time spent and remaining.

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import classnames from 'classnames'
import { getSongTotalTime } from '../../helpers/data-helper'
import { getFormattedTime } from '../../helpers/format-helper'

const mapStateToProps = ({
    selectedSongIndex,
    selectedTimePlayed,
    isSliderTouched,
    sliderRatio
}) => ({
    selectedSongIndex,
    selectedTimePlayed,
    isSliderTouched,
    sliderRatio
})

const sliderTimeBarsPropTypes = {
    // Through Redux.
    selectedSongIndex: PropTypes.number.isRequired,
    selectedTimePlayed: PropTypes.number.isRequired,
    isSliderTouched: PropTypes.bool.isRequired,
    sliderRatio: PropTypes.number.isRequired,
},

SliderTimeBars = ({

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
                    'slider-bar',
                    'time-bar',
                    'time-remain-bar'
                )}
            />

            {/* Spent time display below spent bar. */}
            <div className={classnames(
                'below',
                'spent',
                'time-display'
            )}>
                {displayedSpentTime}
            </div>

            <div
                className={classnames(
                    'slider-bar',
                    'time-bar',
                    'time-spent-bar'
                )}
                style={spentStyle}
            >
                {/* Spent time display above spent bar. */}
                <div className={classnames(
                    'above',
                    'spent',
                    'time-display'
                )}>
                    {displayedSpentTime}
                </div>
            </div>

            {/* Remaining time display below remain bar. */}
            <div className={classnames(
                'below',
                'remain',
                'time-display'
            )}>
                {displayedRemainTime}
            </div>

            {/* Remaining time display above remain bar. */}
            <div
                className={classnames(
                    'above',
                    'remain',
                    'time-display'
                )}
                style={remainStyle}
            >
                {displayedRemainTime}
            </div>
        </div>
    )
}

SliderTimeBars.propTypes = sliderTimeBarsPropTypes

export default connect(mapStateToProps)(SliderTimeBars)
