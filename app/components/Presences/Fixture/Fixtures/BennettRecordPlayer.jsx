import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'components/Svg/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const BennettRecordPlayer = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                'BennettRecordPlayer',
                className
            )}
        >
            <rect
                className={cx(
                    'Fixture__temporaryRect'
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
                    'BennettRecordPlayer'
                )}
            </text>
        </Svg>
    )
}

BennettRecordPlayer.propTypes = propTypes;

export default BennettRecordPlayer
