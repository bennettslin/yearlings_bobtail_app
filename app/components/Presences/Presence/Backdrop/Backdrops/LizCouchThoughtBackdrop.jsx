import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const LizCouchThoughtBackdrop = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                'LizCouchThoughtBackdrop',
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
                    'LizCouchThoughtBackdrop'
                )}
            </text>
        </Svg>
    )
}

LizCouchThoughtBackdrop.propTypes = propTypes;

export default LizCouchThoughtBackdrop
