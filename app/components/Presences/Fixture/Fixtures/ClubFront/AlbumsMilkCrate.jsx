import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'components/Svg/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const AlbumsMilkCrate = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                'AlbumsMilkCrate',
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
                    'AlbumsMilkCrate'
                )}
            </text>
        </Svg>
    )
}

AlbumsMilkCrate.propTypes = propTypes;

export default AlbumsMilkCrate
