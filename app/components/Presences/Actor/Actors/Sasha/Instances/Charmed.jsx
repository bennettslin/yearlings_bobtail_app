import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'components/Svg/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const Charmed = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                className,
                'Charmed'
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
                    'Charmed'
                )}
            </text>
        </Svg>
    )
}

Charmed.propTypes = propTypes;

export default Charmed
