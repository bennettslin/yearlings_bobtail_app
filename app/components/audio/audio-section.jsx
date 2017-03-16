import React from 'react'
import AudioButtons from './audio-buttons'
import TitleSection from '../title/title-section'
import { AUDIO_SECTION,
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
    timerInAudio,
    titleInAudio,
    isPhone,
    selectedAdminIndex,
    isPlaying,
    title,
    selectedAudioOptionIndex,
    isFirstVerse,
    isLastVerse,
    onAudioSongClick,

    handleTitleSelect,
    handleAudioPlay,
    handleAudioPreviousSong,
    handleAudioNextSong,
    handleAudioOptionsToggle,

    audioTimerChild,
    audioBannerChild,

    // From controller.
    isPrologue,
    isFirstSong,
    isLastSong,
    isEpilogue,
    sectionAccessHighlighted,
    sectionNextHighlighted,

}) => {

    const audioButtonsProps = {
            titleInAudio,
            isPlaying,
            selectedAudioOptionIndex,
            isPrologue,
            isFirstSong,
            isLastSong,
            isEpilogue,
            isFirstVerse,
            isLastVerse,
            handleAudioPlay,
            onAudioSongClick,

            handleAudioPreviousSong,
            handleAudioNextSong,
            handleAudioOptionsToggle
        },
        titleProps = {
            titleInAudio,
            title,
            handleTitleSelect
        }

    return (
        <div
            className={`section audio-section${sectionAccessHighlighted ? ' access-highlighted' : ''}${sectionNextHighlighted ? ' next-highlighted' : ''}`}
        >
            {selectedAdminIndex &&
                <h2>audio</h2>
            }
            {timerInAudio && (
                <div className="audio-timer-block">
                    {audioTimerChild}
                </div>
            )}
            {titleInAudio &&
                <TitleSection {...titleProps} />
            }
            {(!isPhone || timerInAudio) && audioBannerChild}
            <AudioButtons {...audioButtonsProps} />
        </div>
    )
}

export default AudioSection
