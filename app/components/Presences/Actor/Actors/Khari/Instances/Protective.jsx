import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'components/Svg/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const Protective = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                className,
                'Protective'
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
                    'Protective'
                )}
            </text>
        </Svg>
    )
}

Protective.propTypes = propTypes;

export default Protective
