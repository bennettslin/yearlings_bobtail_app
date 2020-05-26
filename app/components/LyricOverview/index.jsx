import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { useSelector } from 'react-redux'
import { LYRIC_DYNAMIC_HEIGHT_SELECTOR } from '../../redux/mount/selectors'

import Lyric from '../Lyric'
import OverviewPopup from '../Popups/Overview'

import { getLyricOverviewHeight } from './helper'

const mapStateToProps = ({
    responsiveStore: {
        isHeightlessLyric,
        menuHeight
    },
    toggleStore: { isLyricExpanded },
    lyricStore: { isLyricLogue }
}) => ({
    isHeightlessLyric,
    menuHeight,
    isLyricExpanded,
    isLyricLogue
})

const LyricOverview = ({ setLyricFocusElement }) => {
    const {
            // TODO: Get these from selectors.
            isLyricExpanded,
            isLyricLogue,
            isHeightlessLyric,
            menuHeight
        } = useSelector(mapStateToProps),
        lyricDynamicHeight = useSelector(LYRIC_DYNAMIC_HEIGHT_SELECTOR),

        // TODO: Make this a selector.
        lyricOverviewHeight = getLyricOverviewHeight({
            isLyricExpanded,
            lyricDynamicHeight,
            isLyricLogue,
            isHeightlessLyric,
            menuHeight
        })

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
                    height: lyricOverviewHeight
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
