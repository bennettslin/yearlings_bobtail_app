import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'components/Svg/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const Roaring = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                className,
                'Roaring'
            )}
        >
            <rect
                className={cx(
                    'Actor__temporaryRect'
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
                    'Roaring'
                )}
            </text>
        </Svg>
    )
}

Roaring.propTypes = propTypes;

export default Roaring
