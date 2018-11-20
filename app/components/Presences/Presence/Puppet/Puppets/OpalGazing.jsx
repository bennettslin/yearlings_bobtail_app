import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const OpalGazing = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                'OpalGazing',
                className
            )}
        >
            <rect
                className={cx(
                    'Puppet__temporaryRect'
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
                    'OpalGazing'
                )}
            </text>
        </Svg>
    )
}

OpalGazing.propTypes = propTypes;

export default OpalGazing
