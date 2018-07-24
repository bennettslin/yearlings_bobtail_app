import React from 'react'
import PropTypes from 'prop-types'

import {
    SHOWN,
    HIDDEN,
    DISABLED,
    OVERVIEW_OPTIONS
} from '../../../constants/options'

const OVERVIEW_MAP = {
    [SHOWN]: (
        <circle
            {...{
                cx: 50,
                cy: 50,
                r: 25,
                fill: 'orange',
                stroke: 'red'
            }}
        />
    ),
    [HIDDEN]: (
        <rect
            {...{
                x: 25,
                y: 25,
                width: 50,
                height: 50,
                fill: 'green',
                stroke: 'yellow'
            }}
        />
    ),
    [DISABLED]: (
        <rect
            {...{
                x: 25,
                y: 25,
                width: 50,
                height: 50,
                fill: 'purple',
                stroke: 'blue'
            }}
        />
    )
}

const propTypes = {
    buttonIdentifier: PropTypes.number.isRequired
}

const OverviewIcon = ({

    buttonIdentifier: overviewIndex

}) => {
    const overviewOptionKey = OVERVIEW_OPTIONS[overviewIndex]

    return (
        OVERVIEW_MAP[overviewOptionKey]
    )
}

OverviewIcon.propTypes = propTypes

export default OverviewIcon
