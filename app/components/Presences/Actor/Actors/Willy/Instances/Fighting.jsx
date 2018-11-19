import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const Fighting = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                className,
                'Fighting'
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
                    'Fighting'
                )}
            </text>
        </Svg>
    )
}

Fighting.propTypes = propTypes;

export default Fighting
