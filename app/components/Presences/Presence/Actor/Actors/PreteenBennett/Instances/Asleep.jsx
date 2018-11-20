import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const Asleep = ({

    className,

    ...other }) => {

    return (
        <Svg
            className={cx(
                className,
                'Asleep'
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
                    'Asleep'
                )}
            </text>
        </Svg>
    )
}

Asleep.propTypes = propTypes

export default Asleep
