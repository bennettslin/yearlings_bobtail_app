import React from 'react'
import { getFormattedTime } from 'helpers/format-helper'

/*************
 * CONTAINER *
 *************/

// TODO: Make play button take up width of line.

const LyricsPlayButton = ({

    time,
    isHovered,
    isSelected,
    onClick

}) => (
    <div className="play-button-block">
        {!isSelected ?
            <a className={`play-button enabled${isHovered ? ' hovered' : ''}`}
                onClick={onClick}
            >
                {`\u25B6${getFormattedTime(time)}`}
            </a> :
            <div className="playing-icon">
                {'\u25B6'}
            </div>
        }
    </div>
)

export default LyricsPlayButton
