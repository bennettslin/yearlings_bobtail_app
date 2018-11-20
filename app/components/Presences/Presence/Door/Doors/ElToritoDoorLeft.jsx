import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const ElToritoDoorLeft = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                'ElToritoDoorLeft',
                className
            )}
        >
            <rect
                className={cx(
                    'Door__temporaryRect'
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
                    'ElToritoDoorLeft'
                )}
            </text>
        </Svg>
    )
}

ElToritoDoorLeft.propTypes = propTypes;

export default ElToritoDoorLeft
