import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const CommercialMiddleRight = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                'CommercialMiddleRight',
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
                    'CommercialMiddleRight'
                )}
            </text>
        </Svg>
    )
}

CommercialMiddleRight.propTypes = propTypes;

export default CommercialMiddleRight
