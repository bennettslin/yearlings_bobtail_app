import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'components/Svg/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const SidelongHesitance = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                className,
                'SidelongHesitance'
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
                    'SidelongHesitance'
                )}
            </text>
        </Svg>
    )
}

SidelongHesitance.propTypes = propTypes;

export default SidelongHesitance
