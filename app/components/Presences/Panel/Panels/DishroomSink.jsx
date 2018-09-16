import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'components/Svg/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const DishroomSink = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                'DishroomSink',
                className
            )}
        >
            <rect
                className={cx(
                    'Panel__temporaryRect'
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
                    'DishroomSink'
                )}
            </text>
        </Svg>
    )
}

DishroomSink.propTypes = propTypes;

export default DishroomSink
