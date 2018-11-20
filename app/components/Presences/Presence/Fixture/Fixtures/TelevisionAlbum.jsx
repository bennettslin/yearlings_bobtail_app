import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const TelevisionAlbum = ({

    className,

    ...other
}) => {

    return (
        <Svg
            className={cx(
                'TelevisionAlbum',
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
                    'TelevisionAlbum'
                )}
            </text>
        </Svg>
    )
}

TelevisionAlbum.propTypes = propTypes

export default TelevisionAlbum
