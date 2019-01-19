import React, { memo } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { connect } from 'react-redux'

import Lyric from '../../Lyric'
import OverviewPopup from '../../Popups/Overview'

const mapStateToProps = ({
    toggleStore: { isLyricExpanded },
    mountStore: { lyricHeightRatio }
}) => ({
    lyricHeightRatio,
    isLyricExpanded
})

const LyricOverview = ({
    isLyricExpanded,
    lyricHeightRatio,
    setLyricFocusElement

}) => (
    <div
        {...{
            className: cx(
                'LyricOverview',
                'width__lyricColumn__desktop',
                'position__lyricColumn__desktop',
                'position__lyricColumn__mobile',
                'flexCentreContainer'
            )
        }}
        {...!isLyricExpanded && {
            /**
             * If lyric is expanded, height is straightforward, so we'll handle
             * it in CSS instead.
             */
            style: {
                height: `${lyricHeightRatio * 100}%`
            }
        }}
    >
        <Lyric {...{ setLyricFocusElement }} />
        <OverviewPopup />
    </div>
)

const propTypes = {
    // Through Redux.
    lyricHeightRatio: PropTypes.number.isRequired,
    isLyricExpanded: PropTypes.bool.isRequired,

    // From parent.
    setLyricFocusElement: PropTypes.func.isRequired
}

LyricOverview.propTypes = propTypes

export default connect(mapStateToProps)(memo(LyricOverview))
