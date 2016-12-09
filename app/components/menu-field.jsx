import React from 'react'
import TitleSection from './title/title-section'
import AudioSection from './audio/audio-section'

/*************
 * CONTAINER *
 *************/

const MenuField = (props) => (
    <MenuFieldView {...props} />
)

/****************
 * PRESENTATION *
 ****************/

const MenuFieldView = ({

    // From props.
    isPhone,
    isOutsideMain,
    isPlaceholder,
    title,
    isPrologue,
    isFirstSong,
    isLastSong,
    isEpilogue,
    isFirstVerse,
    isLastVerse,
    selectedSongTitle,
    selectedSongIndex,
    isPlaying,
    selectedTimePlayed,
    selectedAudioOptionIndex,
    accessedSongIndex,
    accessedOn,
    accessedSectionKey,
    nextSectionKey,
    onPlayClick,
    onSongClick,
    onVerseClick,
    onAudioOptionClick

}) => {
    const titleSectionProps = {
            title,
            accessedOn,
            accessedSectionKey,
            nextSectionKey,
            accessedSongIndex,
            onTitleClick: onSongClick
        },
        audioSectionProps = {
            isPrologue,
            isFirstSong,
            isLastSong,
            isEpilogue,
            isFirstVerse,
            isLastVerse,
            selectedSongTitle,
            selectedSongIndex,
            isPlaying,
            selectedTimePlayed,
            selectedAudioOptionIndex,
            accessedOn,
            accessedSectionKey,
            nextSectionKey,
            onPlayClick,
            onAudioSongClick: onSongClick,
            onAudioTimeClick: onVerseClick,
            onAudioOptionClick
        }

    return (
        <div className={`field menu-field${isOutsideMain ? ' outside-main' : ''}${isPlaceholder ? ' placeholder' : ''}`}>
            {!isPlaceholder && !isPhone ?
                <TitleSection {...titleSectionProps} /> : null
            }
            {!isPlaceholder ?
                <AudioSection {...audioSectionProps} /> : null
            }
        </div>
    )
}

export default MenuField
