import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'components/Svg/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const CrowdSideFar = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                'CrowdSideFar',
                className
            )}
        >
            <rect
                className={cx(
                    'Flat__temporaryRect'
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
                    'CrowdSideFar'
                )}
            </text>
        </Svg>
    )
}

CrowdSideFar.propTypes = propTypes;

export default CrowdSideFar
