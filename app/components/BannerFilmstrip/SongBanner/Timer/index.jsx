// Component to show the played audio time.
import React, { useContext, memo } from 'react'
import { useSelector } from 'react-redux'
import cx from 'classnames'
import PlayerTimeContext from '../../../../contexts/PlayerTime'
import { getFormattedTime } from '../../../../helpers/format'
import { getMapSongCursorTime } from '../../../../redux/cursor/selector'
import { mapIsSelectedLogue } from '../../../../redux/selected/selector'
import './style'

const SongBannerTimer = () => {
    const
        playerTime = useContext(PlayerTimeContext),
        isSelectedLogue = useSelector(mapIsSelectedLogue),
        bannerCursorTime = useSelector(getMapSongCursorTime(playerTime))

    return !isSelectedLogue && (
        <div className={cx(
            'SongBannerTimer',
            'fCC',
            'abF'
        )}>
            {getFormattedTime(bannerCursorTime)}
        </div>
    )
}

export default memo(SongBannerTimer)
