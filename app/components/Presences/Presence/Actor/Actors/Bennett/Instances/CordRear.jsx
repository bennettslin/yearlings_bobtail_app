import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const CordRear = ({

    className,

    ...other }) => {

    return (
        <Svg
            className={cx(
                className,
                'CordRear'
            )}
        >
            <rect
                className={cx(
                    'Actor__temporaryRect'
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
                    'CordRear'
                )}
            </text>
        </Svg>
    )
}

CordRear.propTypes = propTypes

export default CordRear
