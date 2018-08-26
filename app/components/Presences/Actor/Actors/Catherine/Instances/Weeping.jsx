import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'components/Svg/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const Weeping = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                className,
                'Weeping'
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
                    'Weeping'
                )}
            </text>
        </Svg>
    )
}

Weeping.propTypes = propTypes;

export default Weeping
