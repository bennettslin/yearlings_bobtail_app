import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const Alley = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                className,
                'Alley'
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
                    'Alley'
                )}
            </text>
        </Svg>
    )
}

Alley.propTypes = propTypes;

export default Alley
