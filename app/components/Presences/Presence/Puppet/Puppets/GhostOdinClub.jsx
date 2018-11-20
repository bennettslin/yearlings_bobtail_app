import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const GhostOdinClub = ({

    className,

    ...other }) => {

    return (
        <Svg
            className={cx(
                'GhostOdinClub',
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
                    'GhostOdinClub'
                )}
            </text>
        </Svg>
    )
}

GhostOdinClub.propTypes = propTypes

export default GhostOdinClub
