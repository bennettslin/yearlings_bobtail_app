import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../Svg/Svg'

import { getDotIcon } from './dotHelper'

const propTypes = {
    // From parent.
    className: PropTypes.any,
    dotKey: PropTypes.string.isRequired
},

Dot = ({

    className,
    dotKey,

...other }) => {

    const IconComponent = getDotIcon(dotKey)

    return (
        <Svg {...other}
            className={cx(
                'Dot',
                'bgColour__dot',
                `bgColour__dot__${dotKey}`,
                className
            )}
        >
            <IconComponent />
        </Svg>
    )
}

Dot.propTypes = propTypes

export default Dot
