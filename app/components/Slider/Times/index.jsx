// Text displays to indicate time spent and remaining.

import React from 'react'
import { useSelector } from 'react-redux'
import cx from 'classnames'
import SliderTime from './Time'
import { getDurationForSong } from '../../../api/album/time'
import { getFormattedTime } from '../../../helpers/format'
import {
    mapIsActivated,
    mapActivatedTime
} from '../../../redux/activated/selectors'
import { mapLyricSongIndex } from '../../../redux/lyric/selectors'
import { mapSelectedTime } from '../../../redux/selected/selectors'
import {
    mapIsSliderMoving,
    mapSliderTime
} from '../../../redux/slider/selectors'
import './style'

const SliderTimes = () => {
    const
        isActivated = useSelector(mapIsActivated),
        activatedTime = useSelector(mapActivatedTime),
        lyricSongIndex = useSelector(mapLyricSongIndex),
        selectedTime = useSelector(mapSelectedTime),
        isSliderMoving = useSelector(mapIsSliderMoving),
        sliderTime = useSelector(mapSliderTime)

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
