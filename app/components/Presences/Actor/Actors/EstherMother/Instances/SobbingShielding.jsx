import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'components/Svg/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const SobbingShielding = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                className,
                'SobbingShielding'
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
                    'SobbingShielding'
                )}
            </text>
        </Svg>
    )
}

SobbingShielding.propTypes = propTypes;

export default SobbingShielding
