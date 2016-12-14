import React from 'react'
import AudioBanner from './audio-banner'
import AudioButtons from './audio-buttons'
import { getFormattedTime } from 'helpers/format-helper'
import { AUDIO_OPTIONS,
         AUDIO_SECTION } from 'helpers/constants'

/*************
 * CONTAINER *
 *************/

const AudioSection = ({

    accessedOn,
    accessedSectionKey,
    nextSectionKey,

...other }) => {

    const sectionAccessHighlighted = accessedOn && accessedSectionKey === AUDIO_SECTION,
        sectionNextHighlighted = accessedOn && nextSectionKey === AUDIO_SECTION

    return (
        <AudioSectionView {...other}
            sectionAccessHighlighted={sectionAccessHighlighted}
            sectionNextHighlighted={sectionNextHighlighted}
        />
    )
}

/****************
 * PRESENTATION *
 ****************/

const AudioSectionView = ({

    // From props.
    isPhone,
    isAdmin,
    isPlaying,
    selectedTimePlayed,
    selectedAudioOptionIndex,
    isPrologue,
    isFirstSong,
    isLastSong,
    isEpilogue,
    isFirstVerse,
    isLastVerse,
    selectedSongTitle,
    onPlayClick,
    onAudioOptionClick,
    onAudioSongClick,
    onAudioTimeClick,

    // From controller.
    sectionAccessHighlighted,
    sectionNextHighlighted,

}) => {

    const audioBannerProps = {
            selectedTimePlayed,
            isPrologue,
            isEpilogue,
            selectedSongTitle
        },
        audioButtonsProps = {
            isPlaying,
            selectedAudioOptionIndex,
            isPrologue,
            isFirstSong,
            isLastSong,
            isEpilogue,
            isFirstVerse,
            isLastVerse,
            onPlayClick,
            onAudioOptionClick,
            onAudioSongClick,
            onAudioTimeClick
        }

    return (
        <div
            className={`section audio-section${sectionAccessHighlighted ? ' access-highlighted' : ''}${sectionNextHighlighted ? ' next-highlighted' : ''}`}
        >
            {isAdmin ? <h2>audio</h2> : null}
            {!isPhone ? <AudioBanner {...audioBannerProps} /> : null}
            <AudioButtons {...audioButtonsProps} />
        </div>
    )
}

export default AudioSection
