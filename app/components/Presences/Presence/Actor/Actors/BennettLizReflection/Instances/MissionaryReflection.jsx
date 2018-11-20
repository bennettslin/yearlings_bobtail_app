import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const MissionaryReflection = ({

    className,

    ...other }) => {

    return (
        <Svg
            className={cx(
                className,
                'MissionaryReflection'
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
                    'MissionaryReflection'
                )}
            </text>
        </Svg>
    )
}

MissionaryReflection.propTypes = propTypes

export default MissionaryReflection
