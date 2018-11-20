import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const LizDefenceSpeech = ({

    className,

    ...other }) => {

    return (
        <Svg
            className={cx(
                'LizDefenceSpeech',
                className
            )}
        >
            <rect
                className={cx(
                    'Bubble__temporaryRect'
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
                    'LizDefenceSpeech'
                )}
            </text>
        </Svg>
    )
}

LizDefenceSpeech.propTypes = propTypes

export default LizDefenceSpeech
