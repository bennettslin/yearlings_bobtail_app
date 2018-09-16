import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'components/Svg/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const SnowglobeLizKhari = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                'SnowglobeLizKhari',
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
                    'SnowglobeLizKhari'
                )}
            </text>
        </Svg>
    )
}

SnowglobeLizKhari.propTypes = propTypes;

export default SnowglobeLizKhari
