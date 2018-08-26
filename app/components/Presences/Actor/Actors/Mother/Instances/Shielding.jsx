import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'components/Svg/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const Shielding = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                className,
                'Shielding'
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
                    'Shielding'
                )}
            </text>
        </Svg>
    )
}

Shielding.propTypes = propTypes;

export default Shielding
