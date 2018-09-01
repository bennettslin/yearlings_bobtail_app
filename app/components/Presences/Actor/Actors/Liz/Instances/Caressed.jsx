import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'components/Svg/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const Caressed = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                className,
                'Caressed'
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
                    'Caressed'
                )}
            </text>
        </Svg>
    )
}

Caressed.propTypes = propTypes;

export default Caressed
