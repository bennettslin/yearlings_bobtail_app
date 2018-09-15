import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'components/Svg/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const UclaBackdrop = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                'UclaBackdrop',
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
                    'UclaBackdrop'
                )}
            </text>
        </Svg>
    )
}

UclaBackdrop.propTypes = propTypes;

export default UclaBackdrop
