import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const BennettOdinBuoy = ({

    className,

    ...other
}) => {

    return (
        <Svg
            className={cx(
                'BennettOdinBuoy',
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
                    'BennettOdinBuoy'
                )}
            </text>
        </Svg>
    )
}

BennettOdinBuoy.propTypes = propTypes

export default BennettOdinBuoy
