import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'components/Svg/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const VanNuysLogo = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                'VanNuysLogo',
                className
            )}
        >
            <rect
                className={cx(
                    'Cutout__temporaryRect'
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
                    'VanNuysLogo'
                )}
            </text>
        </Svg>
    )
}

VanNuysLogo.propTypes = propTypes;

export default VanNuysLogo
