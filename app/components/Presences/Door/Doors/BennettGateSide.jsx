import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const BennettGateSide = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                'BennettGateSide',
                className
            )}
        >
            <rect
                className={cx(
                    'Door__temporaryRect'
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
                    'BennettGateSide'
                )}
            </text>
        </Svg>
    )
}

BennettGateSide.propTypes = propTypes;

export default BennettGateSide
