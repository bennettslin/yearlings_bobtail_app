import React, { memo } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

const sliderTimePropTypes = {
        isSpent: PropTypes.bool,
        time: PropTypes.string.isRequired
    },

    SliderTime = ({

        isSpent,
        time

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

SliderTime.propTypes = sliderTimePropTypes

export default memo(SliderTime)
