import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'components/Svg/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const SirenBackdrop = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                'SirenBackdrop',
                className
            )}
        >
            <rect
                className={cx(
                    'Flat__temporaryRect'
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
                    'SirenBackdrop'
                )}
            </text>
        </Svg>
    )
}

SirenBackdrop.propTypes = propTypes;

export default SirenBackdrop
