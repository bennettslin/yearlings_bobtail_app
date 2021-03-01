import React, { cloneElement, forwardRef, memo, useContext } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { useSelector } from 'react-redux'
import AlbumPageElementContext from '../../contexts/AlbumPageElement'
import getDidMountHoc from '../DidMountHoc'
import { mapLyricOverviewHeightStyle } from '../../redux/lyricHeight/selector'
import Lyric from '../Lyric'
import OverviewPopup from '../Popups/Overview'
import { getIsServerSide } from '../../utils/browser'
import './style'

const LyricOverview = forwardRef(({ didMount }, ref) => {
    const
        albumPageElement = useContext(AlbumPageElementContext),
        lyricOverviewHeightStyle = useSelector(mapLyricOverviewHeightStyle)

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
                        height: lyricOverviewHeightStyle,
                    },
                },
            }}
        >
            {getIsServerSide() ? (
                cloneElement(albumPageElement, { isLyric: true })
            ) : (
                <Lyric {...{ ref }} />
            )}
            <OverviewPopup />
        </div>
    )
})

LyricOverview.propTypes = {
    didMount: PropTypes.bool.isRequired,
}

export default memo(getDidMountHoc(LyricOverview))
