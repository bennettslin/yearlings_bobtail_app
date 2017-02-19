import React from 'react'

/*************
 * CONTAINER *
 *************/

// TODO: Make audio button take up width of line.

const LyricsAudioButton = ({

    isPlaying,
    isSelected,
    isAfterSelected,
    onClick

}) => {

    let buttonIcon

    if (isSelected) {
        buttonIcon = isPlaying ? `\u23F8` : `\u25BA`
    } else {
        buttonIcon = isAfterSelected ? `\u23E9` : `\u23EA`
    }

    return (
        <div className="lyrics-audio-button-block">
            {!isSelected && false &&
                <a className="lyrics-audio-button-child small-lyrics-audio-button enabled">
                    <div>{`\u2022`}</div>
                </a>
            }
            <a className="lyrics-audio-button-child lyrics-audio-button enabled"
                onClick={onClick}
            >
                {buttonIcon}
            </a>
        </div>
    )
}

export default LyricsAudioButton
