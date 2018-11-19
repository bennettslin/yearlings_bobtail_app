import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const Pondering = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                className,
                'Pondering'
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
                    'Pondering'
                )}
            </text>
        </Svg>
    )
}

Pondering.propTypes = propTypes;

export default Pondering
