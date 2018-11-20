import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const Stooping = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                className,
                'Stooping'
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
                    'Stooping'
                )}
            </text>
        </Svg>
    )
}

Stooping.propTypes = propTypes;

export default Stooping
