import React from 'react'
import PropTypes from 'prop-types'
import Button from '../button/button'

/*************
 * CONTAINER *
 *************/

// TODO: Make audio button take up width of line.
const VerseAudioButton = ({

    // TODO: Would be preferable not to need isAudioButtonEnabled flag.
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
        <div className="verse-audio-button-block">
            <div className="verse-audio-button-child">
                <Button
                    buttonName="verse-audio"
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

VerseAudioButton.propTypes = {
    isAudioButtonEnabled: PropTypes.bool.isRequired,
    isPlaying: PropTypes.bool.isRequired,
    isSelected: PropTypes.bool.isRequired,
    isAfterSelected: PropTypes.bool.isRequired,
    handleAudioButtonClick: PropTypes.func.isRequired
}

export default VerseAudioButton
