// Section to show song overview.

import React from 'react'
import { useSelector } from 'react-redux'
import cx from 'classnames'
import Texts from '../Texts'
import OverviewToggle from '../Main/OverviewToggle'
import { getOverviewForSong } from '../../api/album/songs'
import { mapLyricSongIndex } from '../../redux/lyric/selectors'
import { mapIsToggleInOverview } from '../../redux/overview/selectors'
import './style'

const Overview = () => {
    const
        lyricSongIndex = useSelector(mapLyricSongIndex),
        isToggleInOverview = useSelector(mapIsToggleInOverview),
        overviewText = getOverviewForSong(lyricSongIndex)

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
                    isToggleInOverview
                    {...{
                        className: 'Overview__toggleFloatContainer'
                    }}
                />
            }
            <Texts {...{ text: overviewText }} />
        </div>
    )
}

export default Overview
