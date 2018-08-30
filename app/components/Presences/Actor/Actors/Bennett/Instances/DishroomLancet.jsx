import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'components/Svg/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const DishroomLancet = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                className,
                'DishroomLancet'
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
                    'DishroomLancet'
                )}
            </text>
        </Svg>
    )
}

DishroomLancet.propTypes = propTypes;

export default DishroomLancet
