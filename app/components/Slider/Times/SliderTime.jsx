import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

const sliderTimePropTypes = {
    isSpent: PropTypes.bool.isRequired,
    isAboveCursor: PropTypes.bool.isRequired,
    time: PropTypes.number.isRequired
},

SliderTime = ({

    isSpent,
    isAboveCursor,
    time

}) => (
    <div className={cx(
        'SliderTime',
        'textShadow__text',
        isSpent ?
            'SliderTime__spent' : 'SliderTime__remain',
        isAboveCursor ?
            'SliderTime__above' : 'SliderTime__below'
    )}>
        {time}
    </div>
)

SliderTime.propTypes = sliderTimePropTypes

export default SliderTime
