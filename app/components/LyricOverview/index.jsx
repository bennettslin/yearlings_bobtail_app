import React, { forwardRef } from 'react'
import cx from 'classnames'
import { useSelector } from 'react-redux'
import { mapLyricOverviewHeightStyle } from '../../redux/mount/selectors'
import Lyric from '../Lyric'
import OverviewPopup from '../Popups/Overview'
import './style'

const LyricOverview = forwardRef((props, ref) => {
    const lyricOverviewHeightStyle =
        useSelector(mapLyricOverviewHeightStyle)

    return (
        <div
            {...{
                className: cx(
                    'LyricOverview',
                    'width__lyricColumn__desktop',
                    'position__lyricColumn__desktop',
                    'position__lyricColumn__mobile',
                    'fCC'
                ),
                style: {
                    height: lyricOverviewHeightStyle
                }
            }}
        >
            <Lyric {...{ ref }} />
            <OverviewPopup />
        </div>
    )
})

export default LyricOverview
