import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'modules/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.string
}

const Cowgirl = ({

    className,

    ...other
}) => {

    return (
        <Svg
            className={cx(
                className,
                'Cowgirl'
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
                    'Cowgirl'
                )}
            </text>
        </Svg>
    )
}

Cowgirl.propTypes = propTypes

export default Cowgirl
