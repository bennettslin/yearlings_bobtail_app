import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'components/Svg/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const AtticCushions = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                'AtticCushions',
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
                    'AtticCushions'
                )}
            </text>
        </Svg>
    )
}

AtticCushions.propTypes = propTypes;

export default AtticCushions
