import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const BennettMattress = ({

    className,

    ...other }) => {

    return (
        <Svg
            className={cx(
                'BennettMattress',
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
                    'BennettMattress'
                )}
            </text>
        </Svg>
    )
}

BennettMattress.propTypes = propTypes

export default BennettMattress
