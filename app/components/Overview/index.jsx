// Section to show song overview.

import React from 'react'
import { useSelector } from 'react-redux'
import cx from 'classnames'
import Texts from '../Texts'
import OverviewToggle from '../Main/OverviewToggle'
import { getOverviewForSong } from '../../album/api/songs'
import { getIsToggleInOverview } from './helper'
import { mapIsHeightlessLyric } from '../../redux/responsive/selectors'
import {
    mapLyricSongIndex,
    mapIsLyricLogue
} from '../../redux/lyric/selectors'
import { mapIsPhoneWidth } from '../../redux/viewport/selectors'
import './style'

const Overview = () => {
    const
        isHeightlessLyric = useSelector(mapIsHeightlessLyric),
        lyricSongIndex = useSelector(mapLyricSongIndex),
        isLyricLogue = useSelector(mapIsLyricLogue),
        isPhoneWidth = useSelector(mapIsPhoneWidth),
        overviewText = getOverviewForSong(lyricSongIndex),

        // TODO: Make this a selector.
        isToggleInOverview = getIsToggleInOverview({
            isPhoneWidth,
            isHeightlessLyric,
            isLyricLogue
        })

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
