// Component to show the played audio time.
import React, { useContext, memo } from 'react'
import { useSelector } from 'react-redux'
import cx from 'classnames'
import AudioPlayerContext from '../../../../contexts/AudioPlayer'
import { getFormattedTime } from '../../../../helpers/format'
import { getMapSongCursorTime } from '../../../../redux/cursor/selector'
import { mapIsSelectedLogue } from '../../../../redux/selected/selector'
import './style'

const SongBannerTimer = () => {
    const
        { audioTime } = useContext(AudioPlayerContext),
        isSelectedLogue = useSelector(mapIsSelectedLogue),
        bannerCursorTime = useSelector(getMapSongCursorTime(audioTime))

    return !isSelectedLogue && (
        <div className={cx(
            'SongBannerTimer',
            'fCC',
            'abF',
        )}>
            {getFormattedTime(bannerCursorTime)}
        </div>
    )
}

export default memo(SongBannerTimer)
