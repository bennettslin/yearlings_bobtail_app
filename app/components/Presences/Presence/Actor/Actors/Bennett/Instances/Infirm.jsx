import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const Infirm = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                className,
                'Infirm'
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
                    'Infirm'
                )}
            </text>
        </Svg>
    )
}

Infirm.propTypes = propTypes;

export default Infirm
