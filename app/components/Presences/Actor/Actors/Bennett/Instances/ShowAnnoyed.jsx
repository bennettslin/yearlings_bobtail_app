import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'modules/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.string
}

const ShowAnnoyed = ({

    className,

    ...other
}) => {

    return (
        <Svg
            className={cx(
                className,
                'ShowAnnoyed'
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
                    'ShowAnnoyed'
                )}
            </text>
        </Svg>
    )
}

ShowAnnoyed.propTypes = propTypes

export default ShowAnnoyed
