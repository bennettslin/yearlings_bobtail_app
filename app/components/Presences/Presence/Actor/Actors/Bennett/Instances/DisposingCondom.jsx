import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const DisposingCondom = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                className,
                'DisposingCondom'
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
                    'DisposingCondom'
                )}
            </text>
        </Svg>
    )
}

DisposingCondom.propTypes = propTypes;

export default DisposingCondom
