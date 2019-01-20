import React, { memo } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { connect } from 'react-redux'

import Lyric from '../../Lyric'
import OverviewPopup from '../../Popups/Overview'

import { getLyricOverviewHeight } from './helper'

const mapStateToProps = ({
    responsiveStore: {
        isHeightlessLyric,
        isTwoRowMenu
    },
    toggleStore: { isLyricExpanded },
    mountStore: { lyricDynamicHeight },
    lyricStore: { isLyricLogue }
}) => ({
    isHeightlessLyric,
    isTwoRowMenu,
    lyricDynamicHeight,
    isLyricExpanded,
    isLyricLogue
})

const LyricOverview = ({
    isLyricExpanded,
    lyricDynamicHeight,
    isLyricLogue,
    isHeightlessLyric,
    isTwoRowMenu,
    setLyricFocusElement

}) => {
    const lyricOverviewHeight = getLyricOverviewHeight({
        isLyricExpanded,
        lyricDynamicHeight,
        isLyricLogue,
        isHeightlessLyric,
        isTwoRowMenu
    })

    return (
        <div
            {...{
                className: cx(
                    'LyricOverview',
                    'width__lyricColumn__desktop',
                    'position__lyricColumn__desktop',
                    'position__lyricColumn__mobile',
                    'flexCentreContainer'
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
    isTwoRowMenu: PropTypes.bool.isRequired,
    isLyricExpanded: PropTypes.bool.isRequired,
    isLyricLogue: PropTypes.bool.isRequired,

    // From parent.
    setLyricFocusElement: PropTypes.func.isRequired
}

LyricOverview.propTypes = propTypes

export default connect(mapStateToProps)(memo(LyricOverview))
