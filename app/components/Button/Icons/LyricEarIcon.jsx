import React from 'react'
import PropTypes from 'prop-types'
// import cx from 'classnames'

import {
    LEFT,
    RIGHT
} from '../../../constants/lyrics'

const
    LEFT_EAR_ICON = ({
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
    RIGHT_RIGHT_ICON = ({
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
    LYRIC_EAR_MAP = {
        [LEFT]: LEFT_EAR_ICON,
        [RIGHT]: RIGHT_RIGHT_ICON
    }

const propTypes = {
    buttonIdentifier: PropTypes.string.isRequired,
    className: PropTypes.string
}

const LyricEarIcon = ({

    buttonIdentifier: sideDirection,
    className

}) => {
    const IconComponent = LYRIC_EAR_MAP[sideDirection]

    return (
        <IconComponent
            {...{
                className
            }}
        />
    )
}

LyricEarIcon.propTypes = propTypes

export default LyricEarIcon
