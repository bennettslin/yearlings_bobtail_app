import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const CommercialMiddleLeft = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                'CommercialMiddleLeft',
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
                    'CommercialMiddleLeft'
                )}
            </text>
        </Svg>
    )
}

CommercialMiddleLeft.propTypes = propTypes;

export default CommercialMiddleLeft
