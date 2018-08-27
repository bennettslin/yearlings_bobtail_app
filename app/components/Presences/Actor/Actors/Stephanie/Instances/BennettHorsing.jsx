import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'components/Svg/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const BennettHorsing = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                className,
                'BennettHorsing'
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
                    'BennettHorsing'
                )}
            </text>
        </Svg>
    )
}

BennettHorsing.propTypes = propTypes;

export default BennettHorsing
