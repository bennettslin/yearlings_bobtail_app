import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'components/Svg/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const ConvertibleBack = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                'ConvertibleBack',
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
                    'ConvertibleBack'
                )}
            </text>
        </Svg>
    )
}

ConvertibleBack.propTypes = propTypes;

export default ConvertibleBack
