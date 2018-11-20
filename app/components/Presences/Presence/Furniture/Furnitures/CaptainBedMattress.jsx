import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const CaptainBedMattress = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                'CaptainBedMattress',
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
                    'CaptainBedMattress'
                )}
            </text>
        </Svg>
    )
}

CaptainBedMattress.propTypes = propTypes;

export default CaptainBedMattress
