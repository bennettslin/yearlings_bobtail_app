import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'components/Svg/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const PublicMiddleLeft = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                'PublicMiddleLeft',
                className
            )}
        >
            <rect
                className={cx(
                    'Flat__temporaryRect'
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
                    'PublicMiddleLeft'
                )}
            </text>
        </Svg>
    )
}

PublicMiddleLeft.propTypes = propTypes;

export default PublicMiddleLeft
