import React from 'react'
import PropTypes from 'prop-types'
// import cx from 'classnames'

import {
    SHOWN,
    HIDDEN,
    DISABLED,
    OVERVIEW_BUBBLE
} from '../../../../../constants/options'

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
        <path
            {...{
                className,
                x: 0,
                y: 0,
                d: 'M 75,0 L 100,75 L 25,100 L0,25 Z'
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
    OVERVIEW_BUBBLE_ICON = ({
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
    OVERVIEW_MAP = {
        [SHOWN]: SHOWN_ICON,
        [HIDDEN]: HIDDEN_ICON,
        [DISABLED]: DISABLED_ICON,
        [OVERVIEW_BUBBLE]: OVERVIEW_BUBBLE_ICON
    }

const propTypes = {
    buttonIdentifier: PropTypes.string.isRequired
}

const OverviewIcon = ({

    buttonIdentifier: overviewOptionKey,
    className

}) => {
    const
        IconComponent = OVERVIEW_MAP[overviewOptionKey]

    return (
        <IconComponent
            {...{
                className
            }}
        />
    )
}

OverviewIcon.propTypes = propTypes

export default OverviewIcon
