import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'components/Svg/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const Consoling = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                className,
                'Consoling'
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
                    'Consoling'
                )}
            </text>
        </Svg>
    )
}

Consoling.propTypes = propTypes;

export default Consoling
