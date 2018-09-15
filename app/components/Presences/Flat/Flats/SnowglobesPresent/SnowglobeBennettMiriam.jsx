import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'components/Svg/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const SnowglobeBennettMiriam = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                'SnowglobeBennettMiriam',
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
                    'SnowglobeBennettMiriam'
                )}
            </text>
        </Svg>
    )
}

SnowglobeBennettMiriam.propTypes = propTypes;

export default SnowglobeBennettMiriam
