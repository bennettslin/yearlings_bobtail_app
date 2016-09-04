import React from 'react'
import { getFormattedTime } from 'helpers/format-helper'

/*************
 * CONTAINER *
 *************/

const LyricsPlayButton = ({

    time,
    isHovered,
    isSelected,
    onClick

}) => (

    <div className="play-button-container">
        <div className="play-button-block">
            <a className={`play-button${isHovered ? ' hovered' : ''}${isSelected ? ' selected' : ' enabled'}`}
                onClick={onClick}
            >
                {/* TODO: When playing, show playing instead, and make it not selectable. */}
                {isSelected ? '\u25B6' : getFormattedTime(time)}
            </a>
        </div>
    </div>
)

export default LyricsPlayButton
