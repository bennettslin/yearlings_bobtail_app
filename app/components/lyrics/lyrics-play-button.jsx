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
    <div className={`play-button-block${isHovered || isSelected ? ' slid-out' : ''}`}>
        {!isSelected ?
            <a className={`play-child play-button${isSelected ? '' : ' enabled'}${isHovered ? ' hovered' : ''}`}
                onClick={onClick}
            >
                {`\u25B6${getFormattedTime(time)}`}
            </a> :
            <div className="play-child play-icon">
                {`\u25B6`}
            </div>
        }
    </div>
)

export default LyricsPlayButton
