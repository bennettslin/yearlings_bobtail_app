import React from 'react'

/*************
 * CONTAINER *
 *************/

// TODO: Make play button take up width of line.

const LyricsPlayButton = ({

    isPlaying,
    isSelected,
    isAfterSelected,
    onClick

}) => (
    <div className="play-button-block">
        {!isSelected &&
            <a className="play-child small-play-button enabled">
                <div>{`\u2022`}</div>
            </a>
        }
        {!isSelected ?
            <a className="play-child play-button enabled"
                onClick={onClick}
            >
                {isAfterSelected ? `\u23E9` : `\u23EA`}
            </a> :
            <div className="play-child play-icon">
                {isPlaying ? `\u25BA` : `\u23F8`}
            </div>
        }
    </div>
)

export default LyricsPlayButton
