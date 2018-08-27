import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'components/Svg/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const BennettBanjo = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                className,
                'BennettBanjo'
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
                    'BennettBanjo'
                )}
            </text>
        </Svg>
    )
}

BennettBanjo.propTypes = propTypes;

export default BennettBanjo
