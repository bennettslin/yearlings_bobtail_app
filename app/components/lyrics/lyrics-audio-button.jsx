import React from 'react'

/*************
 * CONTAINER *
 *************/

// TODO: Make audio button take up width of line.

const LyricsAudioButton = ({

    isAudioButtonEnabled,
    isPlaying,
    isSelected,
    isAfterSelected,
    onAudioButtonClick

}) => {

    const onClick = isAudioButtonEnabled ? onAudioButtonClick : null

    let buttonIcon,
        audioStatusClassName = isSelected ? 'audio-colour' : 'audio-nav'

    if (isSelected) {
        buttonIcon = isPlaying ? `\u23F8` : `\u25BA`
    } else {
        buttonIcon = isAfterSelected ? `\u23E9` : `\u23EA`
    }

    return (
        <div className={`lyrics-audio-button-block ${isAudioButtonEnabled ? 'audio-button-enabled' : ''}`}>
            <a className={`lyrics-audio-button-child lyrics-audio-button ${isAudioButtonEnabled ? 'enabled' : ''}`}
                onClick={onClick}
            >
                <div className={`
                        button-icon
                        lyrics-audio-icon
                        ${audioStatusClassName}
                    `}
                >
                    {buttonIcon}
                </div>
            </a>
        </div>
    )
}

export default LyricsAudioButton
