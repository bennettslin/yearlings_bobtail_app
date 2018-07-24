import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../Svg/Svg'

import { getDotIcon } from './dotHelper'

const propTypes = {
    // From parent.
    className: PropTypes.any,
    // dotName: PropTypes.string.isRequired
},

Dot = ({

    className,
    dotName,

...other }) => {

    const IconComponent = getDotIcon(dotName)

    return (
        <Svg {...other}
            className={cx(
                'Dot',
                className
            )}
        >
            <IconComponent />
        </Svg>
    )
}

Dot.propTypes = propTypes

export default Dot
