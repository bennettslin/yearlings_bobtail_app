import React from 'react'
import PropTypes from 'prop-types'

import {
    SHOWN,
    HIDDEN,
    DISABLED,
    TIPS_OPTIONS
} from '../../../constants/options'

const TIPS_MAP = {
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

const TipsIcon = ({

    buttonIdentifier: overviewIndex

}) => {
    const tipsOptionKey = TIPS_OPTIONS[overviewIndex]

    return (
        TIPS_MAP[tipsOptionKey]
    )
}

TipsIcon.propTypes = propTypes

export default TipsIcon
