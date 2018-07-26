import React from 'react'
import PropTypes from 'prop-types'
// import cx from 'classnames'

const
    LYRIC_EXPANDED_ICON = ({
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
    LYRIC_COLLAPSED_ICON = ({
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
    LYRIC_EXPAND_ICON = {
        [true]: LYRIC_EXPANDED_ICON,
        [false]: LYRIC_COLLAPSED_ICON
    }

const propTypes = {
    buttonIdentifier: PropTypes.bool.isRequired,
    className: PropTypes.string
}

const LyricExpandIcon = ({

    buttonIdentifier: isLyricExpanded,
    className

}) => {
    const IconComponent = LYRIC_EXPAND_ICON[isLyricExpanded]

    return (
        <IconComponent
            {...{
                className
            }}
        />
    )
}

LyricExpandIcon.propTypes = propTypes

export default LyricExpandIcon
