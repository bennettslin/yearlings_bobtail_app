import React from '../../../../../../Library/Caches/typescript/2.9/node_modules/@types/react'
import PropTypes from '../../../../../../Library/Caches/typescript/2.9/node_modules/@types/prop-types'
import cx from '../../../../../../Library/Caches/typescript/2.9/node_modules/@types/classnames'

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
        'textShadow__text',
        isSpent ?
            'SliderTime__spent' : 'SliderTime__remain'
    )}>
        {time}
    </div>
)

SliderTime.propTypes = sliderTimePropTypes

export default SliderTime
