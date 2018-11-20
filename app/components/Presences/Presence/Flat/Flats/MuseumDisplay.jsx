import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const MuseumDisplay = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                'MuseumDisplay',
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
                    'MuseumDisplay'
                )}
            </text>
        </Svg>
    )
}

MuseumDisplay.propTypes = propTypes;

export default MuseumDisplay
