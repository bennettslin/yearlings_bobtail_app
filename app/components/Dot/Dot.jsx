import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../Svg'

import DotField from './DotField'
import DotIcon from './DotIcon'

const propTypes = {
    // From parent.
    showFieldOnly: PropTypes.bool,
    className: PropTypes.any
},

Dot = ({

    showFieldOnly,
    className,

...other }) => {

    return (
        <Svg
            className={cx(
                'Dot',
                className
            )}
        >
            <DotField {...other} />

            {!showFieldOnly && (
                <DotIcon {...other} />
            )}
        </Svg>
    )
}

Dot.propTypes = propTypes

export default Dot
