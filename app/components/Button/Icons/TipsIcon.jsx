import React from 'react'
import PropTypes from 'prop-types'
// import cx from 'classnames'

import {
    SHOWN,
    HIDDEN,
    DISABLED,
    TIPS_OPTIONS
} from '../../../constants/options'

const
    SHOWN_ICON = ({
        className
    }) => (
        <circle
            {...{
                className,
                cx: 50,
                cy: 50,
                r: 25
            }}
        />
    ),
    HIDDEN_ICON = ({
        className
    }) => (
        <rect
            {...{
                className,
                x: 25,
                y: 25,
                width: 50,
                height: 50
            }}
        />
    ),
    DISABLED_ICON = ({
        className
    }) => (
        <rect
            {...{
                className,
                x: 25,
                y: 25,
                width: 50,
                height: 50
            }}
        />
    ),
    TIPS_MAP = {
        [SHOWN]: SHOWN_ICON,
        [HIDDEN]: HIDDEN_ICON,
        [DISABLED]: DISABLED_ICON
    }

const propTypes = {
    buttonIdentifier: PropTypes.number.isRequired
}

const TipsIcon = ({

    buttonIdentifier: tipsIndex,
    className

}) => {
    const
        tipsOptionKey = TIPS_OPTIONS[tipsIndex],
        IconComponent = TIPS_MAP[tipsOptionKey]

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
