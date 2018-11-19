import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const LizMattress = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                'LizMattress',
                className
            )}
        >
            <rect
                className={cx(
                    'Furniture__temporaryRect'
                )}
                {...other}
            />
            <text
                className={cx(
                    'Presence__temporaryText'
                )}
                {...other}
            >
                {cx(
                    'LizMattress'
                )}
            </text>
        </Svg>
    )
}

LizMattress.propTypes = propTypes;

export default LizMattress
