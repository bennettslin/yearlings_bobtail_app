import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const BennettDoorInside = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                'BennettDoorInside',
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
                    'BennettDoorInside'
                )}
            </text>
        </Svg>
    )
}

BennettDoorInside.propTypes = propTypes;

export default BennettDoorInside
