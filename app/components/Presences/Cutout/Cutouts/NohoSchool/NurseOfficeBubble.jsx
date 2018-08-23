import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'components/Svg/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const NurseOfficeBubble = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                'NurseOfficeBubble',
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
                    'NurseOfficeBubble'
                )}
            </text>
        </Svg>
    )
}

NurseOfficeBubble.propTypes = propTypes;

export default NurseOfficeBubble
