import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'components/Svg/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const CommercialLeft = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                'CommercialLeft',
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
                    'CommercialLeft'
                )}
            </text>
        </Svg>
    )
}

CommercialLeft.propTypes = propTypes;

export default CommercialLeft
