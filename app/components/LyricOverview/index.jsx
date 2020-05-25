import React, { memo } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { connect } from 'react-redux'

import Lyric from '../Lyric'
import OverviewPopup from '../Popups/Overview'

import { getLyricOverviewHeight } from './helper'

const mapStateToProps = ({
    responsiveStore: {
        isHeightlessLyric,
        menuHeight
    },
    toggleStore: { isLyricExpanded },
    mountStore: { lyricDynamicHeight },
    lyricStore: { isLyricLogue }
}) => ({
    isHeightlessLyric,
    menuHeight,
    lyricDynamicHeight,
    isLyricExpanded,
    isLyricLogue
})

const LyricOverview = ({
    isLyricExpanded,
    lyricDynamicHeight,
    isLyricLogue,
    isHeightlessLyric,
    menuHeight,
    setLyricFocusElement

}) => {
    // TODO: Make this a selector.
    const lyricOverviewHeight = getLyricOverviewHeight({
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
    // Through Redux.
    lyricDynamicHeight: PropTypes.number.isRequired,
    isHeightlessLyric: PropTypes.bool.isRequired,
    menuHeight: PropTypes.number.isRequired,
    isLyricExpanded: PropTypes.bool.isRequired,
    isLyricLogue: PropTypes.bool.isRequired,

    // From parent.
    setLyricFocusElement: PropTypes.func.isRequired
}

LyricOverview.propTypes = propTypes

export default connect(mapStateToProps)(memo(LyricOverview))
