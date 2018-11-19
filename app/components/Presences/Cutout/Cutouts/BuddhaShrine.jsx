import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const BuddhaShrine = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                'BuddhaShrine',
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
                    'BuddhaShrine'
                )}
            </text>
        </Svg>
    )
}

BuddhaShrine.propTypes = propTypes;

export default BuddhaShrine
