import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'components/Svg/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const JohnnyHortonAlbum = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                'JohnnyHortonAlbum',
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
                    'JohnnyHortonAlbum'
                )}
            </text>
        </Svg>
    )
}

JohnnyHortonAlbum.propTypes = propTypes;

export default JohnnyHortonAlbum
