import React from 'react'
import PropTypes from 'prop-types'

import {
    LEFT,
    RIGHT
} from '../../../constants/lyrics'

const LYRIC_EAR_MAP = {
    [LEFT]: (
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
    [RIGHT]: (
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
    )
}

const propTypes = {
    buttonIdentifier: PropTypes.string.isRequired
}

const LyricEarIcon = ({

    buttonIdentifier: sideDirection

}) => (

    LYRIC_EAR_MAP[sideDirection]
)

LyricEarIcon.propTypes = propTypes

export default LyricEarIcon
