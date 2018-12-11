import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const PoliceAlbum = ({

    className,

    ...other
}) => {

    return (
        <Svg
            className={cx(
                'PoliceAlbum',
                className
            )}
        >
            <rect
                className={cx(
                    'Fixture__temporaryRect'
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
                    'PoliceAlbum'
                )}
            </text>
        </Svg>
    )
}

PoliceAlbum.propTypes = propTypes

export default PoliceAlbum
