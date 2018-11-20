import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const BennettOdinRickshaw = ({

    className,

    ...other }) => {

    return (
        <Svg
            className={cx(
                'BennettOdinRickshaw',
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
                    'BennettOdinRickshaw'
                )}
            </text>
        </Svg>
    )
}

BennettOdinRickshaw.propTypes = propTypes

export default BennettOdinRickshaw
