import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const GhostOdinAlley = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                'GhostOdinAlley',
                className
            )}
        >
            <rect
                className={cx(
                    'Puppet__temporaryRect'
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
                    'GhostOdinAlley'
                )}
            </text>
        </Svg>
    )
}

GhostOdinAlley.propTypes = propTypes;

export default GhostOdinAlley
