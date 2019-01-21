import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'modules/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.string
}

const MiriamCushions = ({

    className,

    ...other
}) => {

    return (
        <Svg
            className={cx(
                'MiriamCushions',
                className
            )}
        >
            <rect
                className={cx(
                    'Furniture__temporaryRect'
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
                    'MiriamCushions'
                )}
            </text>
        </Svg>
    )
}

MiriamCushions.propTypes = propTypes

export default MiriamCushions
