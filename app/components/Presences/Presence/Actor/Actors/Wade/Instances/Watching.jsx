import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const Watching = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                className,
                'Watching'
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
                    'Watching'
                )}
            </text>
        </Svg>
    )
}

Watching.propTypes = propTypes;

export default Watching
