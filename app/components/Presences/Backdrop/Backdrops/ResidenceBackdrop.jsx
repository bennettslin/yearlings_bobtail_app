import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'components/Svg/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const ResidenceBackdrop = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                'ResidenceBackdrop',
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
                    'ResidenceBackdrop'
                )}
            </text>
        </Svg>
    )
}

ResidenceBackdrop.propTypes = propTypes;

export default ResidenceBackdrop
