import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const OverpassSignBack = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                'OverpassSignBack',
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
                    'OverpassSignBack'
                )}
            </text>
        </Svg>
    )
}

OverpassSignBack.propTypes = propTypes;

export default OverpassSignBack
