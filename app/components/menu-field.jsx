import React from 'react'
import TitleSection from './title/title-section'
import AudioSection from './audio/audio-section'
import DotsTipsSection from './dots-tips-section'
import { getTitleInAudio } from 'helpers/responsive-helper'

/*************
 * CONTAINER *
 *************/

const MenuField = (props) => {
    const titleInAudio = getTitleInAudio(props)

    return (
        <MenuFieldView {...props}
            titleInAudio={titleInAudio}
        />
    )
}
/****************
 * PRESENTATION *
 ****************/

const MenuFieldView = ({

    // From props.
    dotsTipsSectionProps,
    dotsTipsInMain,

    isPhone,
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
    onAudioOptionClick,

    // From controller.
    titleInAudio

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
            isPhone,
            titleInAudio,
            titleSectionProps,

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
        <div className={`field menu-field${titleInAudio ? ' title-in-audio' : ''}`}>

            {!titleInAudio ?
                <div className="menu-subfield title-menu-subfield">
                    <div className="title-block">
                        <TitleSection {...titleSectionProps} />
                    </div>
                </div> : null
            }
            <div className="menu-subfield audio-menu-subfield">
                <AudioSection {...audioSectionProps} />
            </div>
            {!dotsTipsInMain ?
                <div className="menu-subfield dots-tips-menu-subfield">
                    <DotsTipsSection {...dotsTipsSectionProps} />
                </div> : null
            }
        </div>
    )
}

export default MenuField
