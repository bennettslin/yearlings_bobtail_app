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
    dotsTipsOutsideMenu,

    isPhone,
    title,
    mp3s,
    isFirstVerse,
    isLastVerse,
    selectedSongTitle,
    selectedSongIndex,
    isPlaying,
    selectedTimePlayed,
    userSelectedTimePlayed,
    selectedAudioOptionIndex,
    accessedSongIndex,
    accessedOn,
    accessedSectionKey,
    nextSectionKey,
    onPlayClick,
    onSongClick,
    onVerseClick,
    onAudioOptionClick,
    onTimeChange,
    onTimeUpdated,

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
            titleInAudio,
            isPhone,
            mp3s,
            isFirstVerse,
            isLastVerse,
            selectedSongTitle,
            selectedSongIndex,
            isPlaying,
            title,
            selectedTimePlayed,
            userSelectedTimePlayed,
            selectedAudioOptionIndex,
            accessedOn,
            accessedSectionKey,
            nextSectionKey,
            onPlayClick,
            onAudioSongClick: onSongClick,
            onAudioTimeClick: onVerseClick,
            onTitleClick: onSongClick,
            onAudioOptionClick,
            onTimeChange,
            onTimeUpdated
        }

    return (
        <div className={`field menu-field${titleInAudio ? ' title-in-audio' : ''}`}>

            {!titleInAudio ?
                <div className="menu-subfield title-menu-subfield">
                    <TitleSection {...titleSectionProps} />
                </div> : null
            }
            <div className="menu-subfield audio-menu-subfield">
                <AudioSection {...audioSectionProps} />
            </div>
            {!dotsTipsOutsideMenu ?
                <div className="menu-subfield dots-tips-menu-subfield">
                    <DotsTipsSection {...dotsTipsSectionProps} />
                </div> : null
            }
        </div>
    )
}

export default MenuField
