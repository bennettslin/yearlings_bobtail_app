import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'modules/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.string
}

const VanNuysLogo = ({

    className,

    ...other
}) => {

    return (
        <Svg
            className={cx(
                'VanNuysLogo',
                className
            )}
        >
            <rect
                className={cx(
                    'Cardboard__temporaryRect'
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

VanNuysLogo.propTypes = propTypes

export default VanNuysLogo
