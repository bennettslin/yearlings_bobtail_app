import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'components/Svg/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const DrunkCelibate = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                className,
                'DrunkCelibate'
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
                    'DrunkCelibate'
                )}
            </text>
        </Svg>
    )
}

DrunkCelibate.propTypes = propTypes;

export default DrunkCelibate
