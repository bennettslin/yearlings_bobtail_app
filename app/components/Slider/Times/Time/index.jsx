import React, { memo } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

const sliderTimePropTypes = {
        isSpent: PropTypes.bool,
        time: PropTypes.string.isRequired
    },

    SliderTime = memo(({

        isSpent,
        time

    }) => (
        <div className={cx(
            'SliderTime',
            'textShadow__text',
            isSpent ?
                'SliderTime__spent' : 'SliderTime__remain'
        )}>
            {time}
        </div>
    ))

SliderTime.propTypes = sliderTimePropTypes

export default SliderTime
