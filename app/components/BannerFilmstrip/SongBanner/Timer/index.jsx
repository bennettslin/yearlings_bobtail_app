// Component to show the played audio time.
import React from 'react'
import { useSelector } from 'react-redux'
import cx from 'classnames'
import { getFormattedTime } from '../../../../helpers/format'
import { mapCursorTime } from '../../../../redux/cursor/selectors'
import { mapIsSelectedLogue } from '../../../../redux/selected/selectors'
import './style'

const SongBannerTimer = () => {
    const
        isSelectedLogue = useSelector(mapIsSelectedLogue),
        cursorTime = useSelector(mapCursorTime)

    return !isSelectedLogue && (
        <div className={cx(
            'SongBannerTimer',
            'fCC',
            'abF'
        )}>
            {getFormattedTime(cursorTime)}
        </div>
    )
}

export default SongBannerTimer
