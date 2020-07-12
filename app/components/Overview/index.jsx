// Section to show song overview.
import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import cx from 'classnames'
import Texts from '../Texts'
import OverviewToggle from '../Main/OverviewToggle'
import { getOverviewForSong } from '../../api/album/songs'
import { mapLyricSongIndex } from '../../redux/lyric/selector'
import { mapIsToggleInOverview } from '../../redux/overview/selector'
import './style'
import {
    getFinalSideClass,
    getFinalSongIndex
} from '../../utils/server'

const Overview = ({ pageSongIndex }) => {
    const
        lyricSongIndex = useSelector(mapLyricSongIndex),
        isToggleInOverview = useSelector(mapIsToggleInOverview),
        finalSongIndex = getFinalSongIndex({
            lyricSongIndex,
            pageSongIndex
        })

    return (
        <div
            {...{
                className: cx(
                    'Overview',
                    'fontSize__verse',
                    isToggleInOverview && 'Overview__toggleInOverview',
                    getFinalSideClass()
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
            <Texts {...{ text: getOverviewForSong(finalSongIndex) }} />
        </div>
    )
}

Overview.propTypes = {
    pageSongIndex: PropTypes.number
}

export default memo(Overview)
