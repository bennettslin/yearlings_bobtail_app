import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const ReattaInterior = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                'ReattaInterior',
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
                    'ReattaInterior'
                )}
            </text>
        </Svg>
    )
}

ReattaInterior.propTypes = propTypes;

export default ReattaInterior
