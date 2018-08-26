import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'components/Svg/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const Caressing = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                className,
                'Caressing'
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
                    'Caressing'
                )}
            </text>
        </Svg>
    )
}

Caressing.propTypes = propTypes;

export default Caressing
