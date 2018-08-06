import React from 'react'
import PropTypes from 'prop-types'
// import cx from 'classnames'

import {
    SHOWN,
    HIDDEN,
    DISABLED,
    OVERVIEW_OPTIONS
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
        [DISABLED]: DISABLED_ICON
    }

const propTypes = {
    buttonIdentifier: PropTypes.number.isRequired
}

const OverviewIcon = ({

    buttonIdentifier: overviewIndex,
    className

}) => {
    const
        overviewOptionKey = OVERVIEW_OPTIONS[overviewIndex],
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
