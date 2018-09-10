import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'components/Svg/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const Pchelka = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                'Pchelka',
                className
            )}
        >
            <rect
                className={cx(
                    'Puppet__temporaryRect'
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
                    'Pchelka'
                )}
            </text>
        </Svg>
    )
}

Pchelka.propTypes = propTypes;

export default Pchelka
