import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'components/Svg/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const SnowglobeBennettAlone = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                'SnowglobeBennettAlone',
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
                    'SnowglobeBennettAlone'
                )}
            </text>
        </Svg>
    )
}

SnowglobeBennettAlone.propTypes = propTypes;

export default SnowglobeBennettAlone
