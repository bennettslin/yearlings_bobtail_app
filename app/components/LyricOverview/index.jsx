import React, { cloneElement, forwardRef, memo, useContext } from 'react'
import cx from 'classnames'
import { useSelector } from 'react-redux'
import PageElementContext from '../../contexts/PageElement'
import { mapLyricOverviewHeightStyle } from '../../redux/lyricHeight/selector'
import Lyric from '../Lyric'
import OverviewPopup from '../Popups/Overview'
import { getIsServerSide } from '../../utils/server'
import './style'

const LyricOverview = forwardRef((props, ref) => {
    const
        lyricOverviewHeightStyle = useSelector(mapLyricOverviewHeightStyle),
        pageElement = useContext(PageElementContext)

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
            {getIsServerSide() ? (
                cloneElement(pageElement, { isLyric: true })
            ) : (
                <Lyric {...{ ref }} />
            )}
            <OverviewPopup />
        </div>
    )
})

export default memo(LyricOverview)
