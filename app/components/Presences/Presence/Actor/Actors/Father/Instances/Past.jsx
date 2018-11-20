import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const Past = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                className,
                'Past'
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
                    'Past'
                )}
            </text>
        </Svg>
    )
}

Past.propTypes = propTypes;

export default Past
