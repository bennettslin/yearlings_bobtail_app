import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const YoungChild = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                className,
                'YoungChild'
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
                    'YoungChild'
                )}
            </text>
        </Svg>
    )
}

YoungChild.propTypes = propTypes;

export default YoungChild
