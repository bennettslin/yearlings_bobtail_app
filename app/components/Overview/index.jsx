// Section to show song overview.

import React from 'react'
import { useSelector } from 'react-redux'
import cx from 'classnames'
import Texts from '../Texts'
import OverviewToggle from '../Main/OverviewToggle'
import { getOverviewForSong } from '../../album/api/songs'
import { getIsToggleInOverview } from './helper'
import { IS_HEIGHTLESS_LYRIC_SELECTOR } from '../../redux/responsive/selectors'
import {
    mapLyricSongIndex,
    mapIsLyricLogue
} from '../../redux/lyric/selectors'
import { IS_PHONE_WIDTH_SELECTOR } from '../../redux/viewport/selectors'
import './style'

const Overview = () => {
    const
        isHeightlessLyric = useSelector(IS_HEIGHTLESS_LYRIC_SELECTOR),
        lyricSongIndex = useSelector(mapLyricSongIndex),
        isLyricLogue = useSelector(mapIsLyricLogue),
        isPhoneWidth = useSelector(IS_PHONE_WIDTH_SELECTOR),
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
