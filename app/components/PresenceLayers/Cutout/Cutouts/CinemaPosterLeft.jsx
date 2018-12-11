import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const CinemaPosterLeft = ({

    className,

    ...other
}) => {

    return (
        <Svg
            className={cx(
                'CinemaPosterLeft',
                className
            )}
        >
            <rect
                className={cx(
                    'Cutout__temporaryRect'
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
                    'CinemaPosterLeft'
                )}
            </text>
        </Svg>
    )
}

CinemaPosterLeft.propTypes = propTypes

export default CinemaPosterLeft
