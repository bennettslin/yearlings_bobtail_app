import React from 'react'
import classnames from 'classnames'
import Button from '../button/button'

/*************
 * CONTAINER *
 *************/

// TODO: Make audio button take up width of line.

const LyricsAudioButton = ({

    isAudioButtonEnabled,
    isPlaying,
    isSelected,
    isAfterSelected,
    handleAudioButtonClick

}) => {
    let buttonIcon

    if (isSelected) {
        buttonIcon = isPlaying ? `\u23F8` : `\u25BA`
    } else {
        buttonIcon = isAfterSelected ? `\u23E9` : `\u23EA`
    }

    return (
        <div
            className={classnames(
                'lyrics-audio-button-block',
                { 'audio-button-enabled': isAudioButtonEnabled }
            )}
        >
            <div className="lyrics-audio-button-child">
                <Button
                    buttonName="lyrics-audio"
                    isCustomSize={true}
                    isEnabled={isAudioButtonEnabled}
                    iconClass={isSelected ? 'audio-colour' : 'audio-nav'}
                    iconText={buttonIcon}
                    handleClick={isAudioButtonEnabled && handleAudioButtonClick}
                />
            </div>
        </div>
    )
}

export default LyricsAudioButton
