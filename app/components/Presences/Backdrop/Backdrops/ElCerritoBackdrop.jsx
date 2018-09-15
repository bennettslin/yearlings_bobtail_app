import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'components/Svg/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const ElCerritoBackdrop = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                'ElCerritoBackdrop',
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
                    'ElCerritoBackdrop'
                )}
            </text>
        </Svg>
    )
}

ElCerritoBackdrop.propTypes = propTypes;

export default ElCerritoBackdrop
