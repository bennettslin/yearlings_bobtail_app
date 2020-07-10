import React, { memo, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import LyricToggleEar from './Ear'
import LyricToggleExpand from './Expand'
import LyricToggleScroll from './Scroll'
import './style'

const LyricToggles = ({ isBottomRight }) => {
    const [didMount, setDidMount] = useState(false)

    useEffect(() => {
        setDidMount(true)
    }, [])

    return didMount && (
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
                <>
                    <LyricToggleEar />
                    <LyricToggleExpand />
                </>
            )}
        </div>
    )
}

LyricToggles.propTypes = {
    isBottomRight: PropTypes.bool
}

export default memo(LyricToggles)
