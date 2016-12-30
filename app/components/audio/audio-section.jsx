import React from 'react'
import AudioBanner from './audio-banner'
import AudioButtons from './audio-buttons'
import AudioPlayersSection from './audio-players-section'
import TitleSection from '../title/title-section'
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
    selectedSongIndex,

...other }) => {

    const sectionAccessHighlighted = accessedOn && accessedSectionKey === AUDIO_SECTION,
        sectionNextHighlighted = accessedOn && nextSectionKey === AUDIO_SECTION,
        isPrologue = selectedSongIndex === 0,
        isFirstSong = selectedSongIndex === 1,
        isLastSong = selectedSongIndex === SONG_FILES.length,
        isEpilogue = selectedSongIndex === SONG_FILES.length + 1

    return (
        <AudioSectionView {...other}
            selectedSongIndex={selectedSongIndex}
            isPrologue={isPrologue}
            isFirstSong={isFirstSong}
            isLastSong={isLastSong}
            isEpilogue={isEpilogue}
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
    selectedSongIndex,
    selectedSongTitle,
    selectedTimePlayed,
    selectedAudioOptionIndex,
    mp3s,
    isFirstVerse,
    isLastVerse,
    onPlayClick,
    onAudioOptionClick,
    onAudioSongClick,
    onAudioTimeClick,
    onTitleClick,
    onTimeChange,

    // From controller.
    isPrologue,
    isFirstSong,
    isLastSong,
    isEpilogue,
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
        },
        audioPlayersProps = {
            mp3s,
            isPlaying,
            selectedSongIndex,
            onTimeChange
        }

    return (
        <div
            className={`section audio-section${sectionAccessHighlighted ? ' access-highlighted' : ''}${sectionNextHighlighted ? ' next-highlighted' : ''}`}
        >
            {isAdmin ? <h2>audio</h2> : null}
            {titleInAudio ? <TitleSection {...titleProps} /> : null}
            {!isPhone ? <AudioBanner {...audioBannerProps} /> : null}
            <AudioButtons {...audioButtonsProps} />
            <AudioPlayersSection {...audioPlayersProps} />
        </div>
    )
}

export default AudioSection
