import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import Svg from 'components/Svg/Svg'

const propTypes = {
    // From parent.
    className: PropTypes.any
}

const EstherSpeechPanel = ({

    className,

...other }) => {

    return (
        <Svg
            className={cx(
                'EstherSpeechPanel',
                className
            )}
        >
            <rect
                className={cx(
                    'Panel__temporaryRect'
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
                    'EstherSpeechPanel'
                )}
            </text>
        </Svg>
    )
}

EstherSpeechPanel.propTypes = propTypes;

export default EstherSpeechPanel
