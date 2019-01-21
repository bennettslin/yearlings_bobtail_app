import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'modules/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.string
}

const RumpledLinens = ({

    className,

    ...other
}) => {

    return (
        <Svg
            className={cx(
                className,
                'RumpledLinens'
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
                    'RumpledLinens'
                )}
            </text>
        </Svg>
    )
}

RumpledLinens.propTypes = propTypes

export default RumpledLinens
