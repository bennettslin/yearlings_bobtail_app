import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const CaptainBedDrawers = ({

    className,

    ...other }) => {

    return (
        <Svg
            className={cx(
                'CaptainBedDrawers',
                className
            )}
        >
            <rect
                className={cx(
                    'Panel__temporaryRect'
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
                    'CaptainBedDrawers'
                )}
            </text>
        </Svg>
    )
}

CaptainBedDrawers.propTypes = propTypes

export default CaptainBedDrawers
