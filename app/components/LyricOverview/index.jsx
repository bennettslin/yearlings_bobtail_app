import React, { cloneElement, forwardRef, memo, useContext } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { useSelector } from 'react-redux'
import PageElementContext from '../../contexts/PageElement'
import getDidMountHoc from '../DidMountHoc'
import { mapLyricOverviewHeightStyle } from '../../redux/lyricHeight/selector'
import Lyric from '../Lyric'
import OverviewPopup from '../Popups/Overview'
import { getIsServerSide } from '../../utils/server'
import './style'

const LyricOverview = forwardRef(({ didMount }, ref) => {
    const
        lyricOverviewHeightStyle = useSelector(mapLyricOverviewHeightStyle),
        pageElement = useContext(PageElementContext)

    return (
        <div
            {...{
                ...didMount && {
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

LyricOverview.propTypes = {
    didMount: PropTypes.bool.isRequired
}

export default memo(getDidMountHoc(LyricOverview))
