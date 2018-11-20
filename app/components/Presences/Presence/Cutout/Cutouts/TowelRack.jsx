import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const TowelRack = ({

    className,

    ...other
}) => {

    return (
        <Svg
            className={cx(
                'TowelRack',
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
                    'TowelRack'
                )}
            </text>
        </Svg>
    )
}

TowelRack.propTypes = propTypes

export default TowelRack
