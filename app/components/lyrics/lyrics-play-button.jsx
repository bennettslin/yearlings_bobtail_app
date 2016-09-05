import React from 'react'
import { getFormattedTime } from 'helpers/format-helper'

// FIXME: Need to figure out a way to not show play button on more than one verse, which happens if first line starts at 0.

/*************
 * CONTAINER *
 *************/

const LyricsPlayButton = ({

    time,
    isHovered,
    isSelected,
    onClick

}) => (

    <div className="play-button-unit">
        <div className="play-button-block">
            {!isSelected ?
                <a className={`play-button enabled${isHovered ? ' hovered' : ''}`}
                    onClick={onClick}
                >
                    {getFormattedTime(time)}
                </a> :
                <div className="playing-icon">
                    {'\u25B6'}
                </div>
            }
        </div>
    </div>
)

export default LyricsPlayButton
