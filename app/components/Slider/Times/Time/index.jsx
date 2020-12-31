import React, { memo } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import './style'

const SliderTime = ({
    isSpent,
    time,

}) => (
    <div className={cx(
        'SliderTime',
        isSpent ?
            'SliderTime__spent' :
            'SliderTime__remain',
        'textShadow__dark'
    )}>
        {time}
    </div>
)

SliderTime.propTypes = {
    isSpent: PropTypes.bool,
    time: PropTypes.string.isRequired,
}

export default memo(SliderTime)
