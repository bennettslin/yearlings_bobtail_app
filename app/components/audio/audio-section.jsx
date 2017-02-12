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
    titleInAudio,
    isPhone,
    isAdmin,
    isPlaying,
    title,
    selectedAudioOptionIndex,
    isFirstVerse,
    isLastVerse,
    onPlayClick,
    onAudioOptionClick,
    onAudioSongClick,
    onAudioTimeClick,
    onTitleClick,

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
            {isAdmin &&
                <h2>audio</h2>
            }
            {titleInAudio &&
                <TitleSection {...titleProps} />
            }
            {!isPhone && audioBannerChild}
            <AudioButtons {...audioButtonsProps} />
        </div>
    )
}

export default AudioSection
