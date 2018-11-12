import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'components/Svg/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const Pampas = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                className,
                'Pampas'
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
                    'Pampas'
                )}
            </text>
        </Svg>
    )
}

Pampas.propTypes = propTypes;

export default Pampas
