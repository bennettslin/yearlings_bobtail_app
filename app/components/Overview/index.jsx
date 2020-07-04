// Section to show song overview.

import React, { memo } from 'react'
import { useSelector } from 'react-redux'
import cx from 'classnames'
import Texts from '../Texts'
import OverviewToggle from '../Main/OverviewToggle'
import { getOverviewForSong } from '../../api/album/songs'
import { mapLyricSongIndex } from '../../redux/lyric/selector'
import { mapIsToggleInOverview } from '../../redux/overview/selector'
import './style'

const Overview = () => {
    const
        lyricSongIndex = useSelector(mapLyricSongIndex),
        isToggleInOverview = useSelector(mapIsToggleInOverview)

    return (
        <div
            {...{
                className: cx(
                    'Overview',
                    'fontSize__verse',
                    isToggleInOverview && 'Overview__toggleInOverview'
                )
            }}
        >
            {isToggleInOverview &&
                <OverviewToggle
                    {...{
                        className: 'Overview__toggleFloatContainer'
                    }}
                />
            }
            <Texts {...{ text: getOverviewForSong(lyricSongIndex) }} />
        </div>
    )
}

export default memo(Overview)
