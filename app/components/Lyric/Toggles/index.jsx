import React, { memo } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import getDidMountHoc from '../../DidMountHoc'
import LyricToggleEar from './Ear'
import LyricToggleExpand from './Expand'
import LyricToggleScroll from './Scroll'
import './style'

const LyricToggles = ({
    didMount,
    isBottomRight,

}) => didMount && (
    <div className={cx(
        'LyricToggles',

        isBottomRight ?
            'LyricToggles__bottomRight' :
            [
                'LyricToggles__leftOrTop',
                'top__lyricChild',
            ]
    )}>
        {isBottomRight ? (
            <LyricToggleScroll />
        ) : (
            <>
                <LyricToggleEar />
                <LyricToggleExpand />
            </>
        )}
    </div>
)

LyricToggles.propTypes = {
    didMount: PropTypes.bool.isRequired,
    isBottomRight: PropTypes.bool,
}

export default memo(getDidMountHoc(LyricToggles))
