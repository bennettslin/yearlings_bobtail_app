// Bars to indicate time spent and remaining.

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'

import SliderCursor from './SliderCursor'

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
    sliderRatio: PropTypes.number.isRequired
},

SliderTime = ({

    isSpent,
    isAboveCursor,
    time

}) => (
    <div className={cx(
        'SliderTime',
        'textShadow__text',
        isSpent ?
            'SliderTime__spent' : 'SliderTime__remain',
        isAboveCursor ?
            'SliderTime__above' : 'SliderTime__below'
    )}>
        {time}
    </div>
),

SliderTimes = ({

    selectedSongIndex,
    selectedTimePlayed,
    isSliderTouched,
    sliderRatio

}) => {

    const totalTime = getSongTotalTime(selectedSongIndex),

        workingRatio = isSliderTouched ?
            sliderRatio : (selectedTimePlayed / totalTime),

        spentTime =
            getFormattedTime(workingRatio * totalTime),

        remainTime =
        `\u2013${getFormattedTime((1 - workingRatio) * totalTime)}`

    return (
        <div className={cx(
            'SliderTimes',
            'absoluteFullContainer'
        )}>

            <SliderTime
                isSpent
                time={spentTime}
            />

            <SliderTime
                time={remainTime}
            />

            <SliderCursor>
                <SliderTime
                    isSpent
                    isAboveCursor
                    time={spentTime}
                />

                <SliderTime
                    isAboveCursor
                    time={remainTime}
                />
            </SliderCursor>
        </div>
    )
}

SliderTimes.propTypes = sliderTimeBarsPropTypes

export default connect(mapStateToProps)(SliderTimes)
