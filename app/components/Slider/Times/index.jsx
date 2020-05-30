// Text displays to indicate time spent and remaining.

import React from 'react'
import { useSelector } from 'react-redux'
import cx from 'classnames'
import SliderTime from './Time'
import { getDurationForSong } from '../../../album/api/time'
import { getFormattedTime } from '../../../helpers/format'
import {
    IS_ACTIVATED_SELECTOR,
    ACTIVATED_TIME_SELECTOR
} from '../../../redux/activated/selectors'
import { LYRIC_SONG_INDEX_SELECTOR } from '../../../redux/lyric/selectors'
import { SELECTED_TIME_SELECTOR } from '../../../redux/selected/selectors'
import {
    IS_SLIDER_MOVING_SELECTOR,
    SLIDER_TIME_SELECTOR
} from '../../../redux/slider/selectors'
import './style'

const SliderTimes = () => {
    const
        isActivated = useSelector(IS_ACTIVATED_SELECTOR),
        activatedTime = useSelector(ACTIVATED_TIME_SELECTOR),
        lyricSongIndex = useSelector(LYRIC_SONG_INDEX_SELECTOR),
        selectedTime = useSelector(SELECTED_TIME_SELECTOR),
        isSliderMoving = useSelector(IS_SLIDER_MOVING_SELECTOR),
        sliderTime = useSelector(SLIDER_TIME_SELECTOR)

    let time = selectedTime

    if (isSliderMoving) {
        time = sliderTime
    }

    if (isActivated) {
        time = activatedTime
    }

    const remainTime = getDurationForSong(lyricSongIndex) - time

    return (
        <div className={cx(
            'SliderTimes',
            'abF'
        )}>

            <SliderTime
                isSpent
                time={getFormattedTime(time)}
            />

            <SliderTime
                time={`\u2013${getFormattedTime(remainTime)}`}
            />
        </div>
    )
}

export default SliderTimes
