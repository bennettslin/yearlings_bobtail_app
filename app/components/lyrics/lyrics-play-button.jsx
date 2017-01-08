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
        <a className="play-child play-button enabled"
            onClick={onClick}
        >
            {isSelected ?
                (isPlaying ? `\u23F8` : `\u25BA`) :
                (isAfterSelected ? `\u23E9` : `\u23EA`)
            }
        </a>
    </div>
)

export default LyricsPlayButton
