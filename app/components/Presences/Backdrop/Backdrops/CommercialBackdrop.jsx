import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'components/Svg/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const CommercialBackdrop = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                'CommercialBackdrop',
                className
            )}
        >
            <rect
                className={cx(
                    'Backdrop__temporaryRect'
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
                    'CommercialBackdrop'
                )}
            </text>
        </Svg>
    )
}

CommercialBackdrop.propTypes = propTypes;

export default CommercialBackdrop
