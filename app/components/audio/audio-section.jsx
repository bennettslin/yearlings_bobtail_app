import React from 'react'
import AudioBanner from './audio-banner'
import AudioButtons from './audio-buttons'
import TitleSection from '../title/title-section'
import { getFormattedTime } from 'helpers/format-helper'
import { AUDIO_OPTIONS,
         AUDIO_SECTION,
         SONG_FILES } from 'helpers/constants'

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
    titleInAudio,
    isPhone,
    isAdmin,
    isPlaying,
    title,
    selectedSongTitle,
    selectedTimePlayed,
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
    onAudioTimeClick,
    onTitleClick,

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
            titleInAudio,
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
        },
        titleProps = {
            titleInAudio,
            title,
            onTitleClick
        }

    return (
        <div
            className={`section audio-section${sectionAccessHighlighted ? ' access-highlighted' : ''}${sectionNextHighlighted ? ' next-highlighted' : ''}`}
        >
            {isAdmin ? <h2>audio</h2> : null}
            {titleInAudio ? <TitleSection {...titleProps} /> : null}
            {!isPhone ? <AudioBanner {...audioBannerProps} /> : null}
            <AudioButtons {...audioButtonsProps} />
            <audio controls>

            </audio>
        </div>
    )
}

export default AudioSection
