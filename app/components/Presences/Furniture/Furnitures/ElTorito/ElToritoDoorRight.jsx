import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'components/Svg/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const ElToritoDoorRight = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                'ElToritoDoorRight',
                className
            )}
        >
            <rect
                className={cx(
                    'Furniture__temporaryRect'
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
                    'ElToritoDoorRight'
                )}
            </text>
        </Svg>
    )
}

ElToritoDoorRight.propTypes = propTypes;

export default ElToritoDoorRight
