// Section for lyric toggle buttons.

import React, { memo, Fragment as ___ } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import LyricToggleEar from './Ear'
import LyricToggleExpand from './Expand'
import LyricToggleScroll from './Scroll'
import LyricToggleGlobalAnnotations from './GlobalAnnotations'

const LyricToggles = memo(({ isOnRight }) => (
    <div className={cx(
        'LyricToggles',
        isOnRight ?
            'LyricToggles__right' :
            'LyricToggles__left'
    )}>
        {isOnRight ? (
            <___>
                <LyricToggleScroll />
                <LyricToggleGlobalAnnotations />
            </___>
        ) : (
            <___>
                <LyricToggleExpand />
                <LyricToggleEar />
            </___>
        )}
    </div>
))

LyricToggles.propTypes = {
    // From parent.
    isOnRight: PropTypes.bool
}

export default LyricToggles
