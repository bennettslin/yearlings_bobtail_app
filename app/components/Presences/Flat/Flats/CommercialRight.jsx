import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'components/Svg/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const CommercialRight = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                'CommercialRight',
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
                    'CommercialRight'
                )}
            </text>
        </Svg>
    )
}

CommercialRight.propTypes = propTypes;

export default CommercialRight
