import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const CinemaDoorRight = ({

    className,

    ...other
}) => {

    return (
        <Svg
            className={cx(
                'CinemaDoorRight',
                className
            )}
        >
            <rect
                className={cx(
                    'Door__temporaryRect'
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
                    'CinemaDoorRight'
                )}
            </text>
        </Svg>
    )
}

CinemaDoorRight.propTypes = propTypes

export default CinemaDoorRight
