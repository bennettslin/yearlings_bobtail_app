import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const OverpassSignFront = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                'OverpassSignFront',
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
                    'OverpassSignFront'
                )}
            </text>
        </Svg>
    )
}

OverpassSignFront.propTypes = propTypes;

export default OverpassSignFront
