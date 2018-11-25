import React from 'react'
import PropTypes from 'prop-types'
// import cx from 'classnames'

import {
    SHOWN,
    HIDDEN,
    DISABLED
} from 'constants/options'

const
    SHOWN_ICON = ({
        className
    }) => (
        <circle
            {...{
                className,
                cx: 50,
                cy: 50,
                r: 50
            }}
        />
    ),
    HIDDEN_ICON = ({
        className
    }) => (
        <rect
            {...{
                className,
                x: 0,
                y: 0,
                width: 100,
                height: 100
            }}
        />
    ),
    DISABLED_ICON = ({
        className
    }) => (
        <path
            {...{
                className,
                x: 0,
                y: 0,
                d: 'M 50,0 L 100,50 L 50,100 L0,50 Z'
            }}
        />
    ),
    TIPS_MAP = {
        [SHOWN]: SHOWN_ICON,
        [HIDDEN]: HIDDEN_ICON,
        [DISABLED]: DISABLED_ICON
    }

const propTypes = {
    buttonIdentifier: PropTypes.string.isRequired
}

const TipsIcon = ({

    buttonIdentifier: tipsOptionKey,
    className

}) => {
    const IconComponent = TIPS_MAP[tipsOptionKey]

    return (
        <IconComponent
            {...{
                className
            }}
        />
    )
}


TipsIcon.propTypes = propTypes

export default TipsIcon
