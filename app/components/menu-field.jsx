import React from 'react'
import TitleSection from './title/title-section'
import AudioSection from './audio/audio-section'
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
    scoresTipsOutsideMenu,

    isPhone,
    title,
    mp3s,
    isFirstVerse,
    isLastVerse,
    selectedSongIndex,
    isPlaying,
    updatedTimePlayed,
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
    onPlayerEnd,
    onTimeUpdated,

    audioBannerChild,
    scoresTipsSectionChild,

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
            selectedSongIndex,
            isPlaying,
            title,
            updatedTimePlayed,
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
            onPlayerEnd,
            onTimeUpdated,

            audioBannerChild
        }

    return (
        <div className={`field menu-field${titleInAudio ? ' title-in-audio' : ''}`}>

            {!titleInAudio &&
                <div className="menu-subfield title-menu-subfield">
                    <TitleSection {...titleSectionProps} />
                </div>
            }
            <div className="menu-subfield audio-menu-subfield">
                <AudioSection {...audioSectionProps} />
            </div>
            {!scoresTipsOutsideMenu &&
                <div className="menu-subfield scores-tips-menu-subfield">
                    {scoresTipsSectionChild}
                </div>
            }
        </div>
    )
}

export default MenuField
