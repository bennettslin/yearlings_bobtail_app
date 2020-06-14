// Text displays to indicate time spent and remaining.

import React from 'react'
import { useSelector } from 'react-redux'
import cx from 'classnames'
import SliderTime from './Time'
import { getDurationForSong } from '../../../api/album/time'
import { getFormattedTime } from '../../../helpers/format'
import { mapCursorTime } from '../../../redux/cursor/selector'
import { mapLyricSongIndex } from '../../../redux/lyric/selector'
import './style'

const SliderTimes = () => {
    const
        lyricSongIndex = useSelector(mapLyricSongIndex),
        cursorTime = useSelector(mapCursorTime)

    const remainTime = getDurationForSong(lyricSongIndex) - cursorTime

    return (
        <div className={cx(
            'SliderTimes',
            'abF'
        )}>

            <SliderTime
                isSpent
                time={getFormattedTime(cursorTime)}
            />

            <SliderTime
                time={`\u2013${getFormattedTime(remainTime)}`}
            />
        </div>
    )
}

export default SliderTimes
