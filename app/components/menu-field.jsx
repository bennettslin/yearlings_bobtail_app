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
                <div className="subfield title-subfield">
                    <div className="title-block">
                        <TitleSection {...titleSectionProps} />
                    </div>
                </div> : null
            }
            {!isPlaceholder ?
                <div className="subfield audio-subfield">
                    <AudioSection {...audioSectionProps} />
                </div> : null
            }
            {!isPlaceholder && !isPhone ?
                <div className="subfield dots-tips-subfield">
                    <div className="dots-tips-block">
                        <a
                            className="dots-tips-button dots-button enabled"
                        >
                            <div className="button-icon dots-icon">
                                dots
                            </div>
                        </a>
                        <a
                            className="dots-tips-button tips-button enabled"
                        >
                            <div className="button-icon tips-icon">
                                tips
                            </div>
                        </a>
                    </div>
                </div> : null
            }
        </div>
    )
}

export default MenuField
