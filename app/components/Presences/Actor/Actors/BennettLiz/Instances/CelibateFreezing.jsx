import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const CelibateFreezing = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                className,
                'CelibateFreezing'
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
                    'CelibateFreezing'
                )}
            </text>
        </Svg>
    )
}

CelibateFreezing.propTypes = propTypes;

export default CelibateFreezing
