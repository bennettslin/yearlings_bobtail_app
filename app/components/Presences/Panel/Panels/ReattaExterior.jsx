import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'components/Svg/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const ReattaExterior = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                'ReattaExterior',
                className
            )}
        >
            <rect
                className={cx(
                    'Panel__temporaryRect'
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
                    'ReattaExterior'
                )}
            </text>
        </Svg>
    )
}

ReattaExterior.propTypes = propTypes;

export default ReattaExterior
