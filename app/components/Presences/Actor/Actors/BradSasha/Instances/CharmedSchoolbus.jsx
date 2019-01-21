import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'modules/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.string
}

const CharmedSchoolbus = ({

    className,

    ...other
}) => {

    return (
        <Svg
            className={cx(
                className,
                'CharmedSchoolbus'
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
                    'CharmedSchoolbus'
                )}
            </text>
        </Svg>
    )
}

CharmedSchoolbus.propTypes = propTypes

export default CharmedSchoolbus
