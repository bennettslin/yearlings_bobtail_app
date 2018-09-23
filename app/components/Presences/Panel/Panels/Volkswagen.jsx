import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'components/Svg/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const Volkswagen = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                'Volkswagen',
                className
            )}
        >
            <rect
                className={cx(
                    'Panel__temporaryRect'
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
                    'Volkswagen'
                )}
            </text>
        </Svg>
    )
}

Volkswagen.propTypes = propTypes;

export default Volkswagen
