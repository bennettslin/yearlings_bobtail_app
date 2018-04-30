// Bars to indicate time spent and remaining.

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import cx from 'classnames'

import SliderTime from './SliderTime'
import SliderTimesMask from './SliderTimesMask'

import { getSongTotalTime } from '../../../helpers/dataHelper'
import { getFormattedTime } from '../../../helpers/formatHelper'

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
            'SliderTimes__belowCursor',
            'absoluteFullContainer'
        )}>

            <SliderTime
                isSpent
                time={spentTime}
            />

            <SliderTime
                time={remainTime}
            />

            <SliderTimesMask>

                <div className={cx(
                    'SliderTimes__aboveCursor',
                    'absoluteFullContainer'
                )}>
                    <SliderTime
                        isSpent
                        time={spentTime}
                    />

                    <SliderTime
                        time={remainTime}
                    />
                </div>

            </SliderTimesMask>
        </div>
    )
}

SliderTimes.propTypes = sliderTimeBarsPropTypes

export default connect(mapStateToProps)(SliderTimes)
