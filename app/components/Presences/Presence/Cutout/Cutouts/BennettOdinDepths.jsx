import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const BennettOdinDepths = ({

    className,

    ...other }) => {

    return (
        <Svg
            className={cx(
                'BennettOdinDepths',
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
                    'BennettOdinDepths'
                )}
            </text>
        </Svg>
    )
}

BennettOdinDepths.propTypes = propTypes

export default BennettOdinDepths
