import React from 'react'
import { AUDIO_SECTION } from 'helpers/constants'

/*************
 * CONTAINER *
 *************/

const AudioSection = ({

    accessedOn,
    accessedSectionKey,

...other }) => {

    const sectionAccessHighlighted = accessedOn && accessedSectionKey === AUDIO_SECTION

    return (
        <AudioSectionView {...other}
            sectionAccessHighlighted={sectionAccessHighlighted}
        />
    )
}

/****************
 * PRESENTATION *
 ****************/

const AudioSectionView = ({

    // From props.
    isPlaying,
    selectedAudioOptionIndex,
    onPlayClick,
    onAudioOptionClick,

    // From controller.
    sectionAccessHighlighted

}) => (
    <div className={`section audio-section${sectionAccessHighlighted ? ' access-highlighted' : ''}`}>
        <h2>audio</h2>
            <button onClick={onPlayClick}>{isPlaying ? 'Playing' : 'Paused' }</button>
            <button onClick={onAudioOptionClick}>audio option: {selectedAudioOptionIndex}</button>
    </div>
)

export default AudioSection
