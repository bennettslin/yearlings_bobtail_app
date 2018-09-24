import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'components/Svg/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const BuddhaCave = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                'BuddhaCave',
                className
            )}
        >
            <rect
                className={cx(
                    'Cutout__temporaryRect'
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
                    'BuddhaCave'
                )}
            </text>
        </Svg>
    )
}

BuddhaCave.propTypes = propTypes;

export default BuddhaCave
