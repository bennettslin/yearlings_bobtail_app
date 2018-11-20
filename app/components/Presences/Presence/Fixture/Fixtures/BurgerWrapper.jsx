import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const BurgerWrapper = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                'BurgerWrapper',
                className
            )}
        >
            <rect
                className={cx(
                    'Fixture__temporaryRect'
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
                    'BurgerWrapper'
                )}
            </text>
        </Svg>
    )
}

BurgerWrapper.propTypes = propTypes;

export default BurgerWrapper
