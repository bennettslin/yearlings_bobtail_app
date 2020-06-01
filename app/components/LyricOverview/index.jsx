import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { useSelector } from 'react-redux'
import { mapLyricOverviewHeightStyle } from '../../redux/mount/selectors'
import Lyric from '../Lyric'
import OverviewPopup from '../Popups/Overview'
import './style'

const LyricOverview = ({ setLyricFocusElement }) => {
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
            <Lyric {...{ setLyricFocusElement }} />
            <OverviewPopup />
        </div>
    )
}

const propTypes = {
    setLyricFocusElement: PropTypes.func.isRequired
}

LyricOverview.propTypes = propTypes

export default LyricOverview
