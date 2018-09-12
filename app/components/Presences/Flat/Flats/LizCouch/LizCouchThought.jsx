import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'components/Svg/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const LizCouchThought = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                'LizCouchThought',
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
                    'LizCouchThought'
                )}
            </text>
        </Svg>
    )
}

LizCouchThought.propTypes = propTypes;

export default LizCouchThought
