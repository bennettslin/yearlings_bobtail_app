import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const NasAlbum = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                'NasAlbum',
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
                    'NasAlbum'
                )}
            </text>
        </Svg>
    )
}

NasAlbum.propTypes = propTypes;

export default NasAlbum
