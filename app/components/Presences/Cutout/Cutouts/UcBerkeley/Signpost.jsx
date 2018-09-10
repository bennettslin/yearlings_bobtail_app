import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'components/Svg/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const Signpost = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                'Signpost',
                className
            )}
        >
            <rect
                className={cx(
                    'Cutout__temporaryRect'
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
                    'Signpost'
                )}
            </text>
        </Svg>
    )
}

Signpost.propTypes = propTypes;

export default Signpost
