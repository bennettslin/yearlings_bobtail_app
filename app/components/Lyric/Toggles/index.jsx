// Section for lyric toggle buttons.

import React, { memo, Fragment as ___ } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import LyricToggleEar from './Ear'
import LyricToggleExpand from './Expand'
import LyricToggleScroll from './Scroll'

const LyricToggles = ({ isBottomRight }) => (
    <div className={cx(
        'LyricToggles',

        isBottomRight ?
            'LyricToggles__bottomRight' :
            [
                'LyricToggles__leftOrTop',
                'top__lyricChild'
            ]
    )}>
        {isBottomRight ? (
            <LyricToggleScroll />
        ) : (
            <___>
                <LyricToggleEar />
                <LyricToggleExpand />
            </___>
        )}
    </div>
)

LyricToggles.propTypes = {
    // From parent.
    isBottomRight: PropTypes.bool
}

export default memo(LyricToggles)
