import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'components/Svg/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const ApartSketchbook = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                'ApartSketchbook',
                className
            )}
        >
            <rect
                className={cx(
                    'Flat__temporaryRect'
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
                    'ApartSketchbook'
                )}
            </text>
        </Svg>
    )
}

ApartSketchbook.propTypes = propTypes;

export default ApartSketchbook
