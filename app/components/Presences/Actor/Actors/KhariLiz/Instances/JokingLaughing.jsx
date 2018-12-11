import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const JokingLaughing = ({

    className,

    ...other
}) => {

    return (
        <Svg
            className={cx(
                className,
                'JokingLaughing'
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
                    'JokingLaughing'
                )}
            </text>
        </Svg>
    )
}

JokingLaughing.propTypes = propTypes

export default JokingLaughing
