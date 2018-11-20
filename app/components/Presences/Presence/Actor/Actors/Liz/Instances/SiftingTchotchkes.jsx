import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const SiftingTchotchkes = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                className,
                'SiftingTchotchkes'
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
                    'SiftingTchotchkes'
                )}
            </text>
        </Svg>
    )
}

SiftingTchotchkes.propTypes = propTypes;

export default SiftingTchotchkes
