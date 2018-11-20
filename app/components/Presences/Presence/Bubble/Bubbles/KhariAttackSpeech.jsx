import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from '../../../../Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const KhariAttackSpeech = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                'KhariAttackSpeech',
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
                    'KhariAttackSpeech'
                )}
            </text>
        </Svg>
    )
}

KhariAttackSpeech.propTypes = propTypes;

export default KhariAttackSpeech
