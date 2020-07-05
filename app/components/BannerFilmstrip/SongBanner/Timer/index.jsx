// Component to show the played audio time.
import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import cx from 'classnames'
import PlayerTimeContext from '../../../../contexts/PlayerTime'
import { getFormattedTime } from '../../../../helpers/format'
import { getMapSongCursorTime } from '../../../../redux/cursor/selector'
import { mapIsSelectedLogue } from '../../../../redux/selected/selector'
import './style'

const SongBannerTimer = memo(({ playerTime }) => {
    const
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
})

SongBannerTimer.propTypes = {
    playerTime: PropTypes.number.isRequired
}

const SongBannerTimerContainer = () => (
    <PlayerTimeContext.Consumer>
        {playerTime => (
            <SongBannerTimer {...{ playerTime }} />
        )}
    </PlayerTimeContext.Consumer>
)

export default memo(SongBannerTimerContainer)
