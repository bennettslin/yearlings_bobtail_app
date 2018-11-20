import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const Eating = ({

    className,

    ...other }) => {

    return (
        <Svg
            className={cx(
                className,
                'Eating'
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
                    'Eating'
                )}
            </text>
        </Svg>
    )
}

Eating.propTypes = propTypes

export default Eating
