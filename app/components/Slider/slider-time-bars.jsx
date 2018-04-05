// Bars to indicate time spent and remaining.

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'
import { getSongTotalTime } from '../../helpers/dataHelper'
import { getFormattedTime } from '../../helpers/formatHelper'

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
                className={cx(
                    'slider-bar',
                    'time-bar',
                    'time-remain-bar'
                )}
            />

            {/* Spent time display below spent bar. */}
            <div className={cx(
                'below',
                'spent',
                'time-display'
            )}>
                {displayedSpentTime}
            </div>

            <div
                className={cx(
                    'slider-bar',
                    'time-bar',
                    'time-spent-bar'
                )}
                style={spentStyle}
            >
                {/* Spent time display above spent bar. */}
                <div className={cx(
                    'above',
                    'spent',
                    'time-display'
                )}>
                    {displayedSpentTime}
                </div>
            </div>

            {/* Remaining time display below remain bar. */}
            <div className={cx(
                'below',
                'remain',
                'time-display'
            )}>
                {displayedRemainTime}
            </div>

            {/* Remaining time display above remain bar. */}
            <div
                className={cx(
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
