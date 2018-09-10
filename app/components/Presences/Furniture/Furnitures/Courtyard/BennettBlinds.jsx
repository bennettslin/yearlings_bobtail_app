import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'components/Svg/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const BennettBlinds = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                'BennettBlinds',
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
                    'BennettBlinds'
                )}
            </text>
        </Svg>
    )
}

BennettBlinds.propTypes = propTypes;

export default BennettBlinds
