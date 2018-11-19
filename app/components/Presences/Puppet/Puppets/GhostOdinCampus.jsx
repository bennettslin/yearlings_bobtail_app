import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const GhostOdinCampus = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                'GhostOdinCampus',
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
                    'GhostOdinCampus'
                )}
            </text>
        </Svg>
    )
}

GhostOdinCampus.propTypes = propTypes;

export default GhostOdinCampus
