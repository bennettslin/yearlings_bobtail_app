import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const CrackedPicture = ({

    className,

    ...other }) => {

    return (
        <Svg
            className={cx(
                'CrackedPicture',
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
                    'CrackedPicture'
                )}
            </text>
        </Svg>
    )
}

CrackedPicture.propTypes = propTypes

export default CrackedPicture
