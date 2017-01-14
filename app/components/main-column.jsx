import React from 'react'
import MenuField from './menu-field'
import NavSection from './nav/nav-section'
import AudioBanner from './audio/audio-banner'
import OverviewToggleSection from './overview/overview-toggle-section'

/*************
 * CONTAINER *
 *************/

const MainColumn = (props) => {
    return (
        <MainColumnView {...props} />
    )
}

/****************
 * PRESENTATION *
 ****************/

const MainColumnView = ({

    // From props.
    showFullPopup,

    dotsTipsOutsideMenu,
    isPhone,
    deviceIndex,
    windowWidth,
    isHeightlessLyricColumn,

    isFirstVerse,
    isLastVerse,
    isPlaying,

    mp3s,
    songs,
    title,
    bookStartingIndices,
    showSingleBookColumn,
    shrinkNavIcon,
    isLyricExpanded,

    selectedNavIndex,
    selectedBookColumnIndex,
    selectedDotsIndex,
    selectedSongTitle,
    selectedSongIndex,
    selectedTipsIndex,
    selectedTimePlayed,
    updatedTimePlayed,
    selectedAudioOptionIndex,
    selectedOverviewIndex,

    accessedOn,
    accessedSectionKey,
    nextSectionKey,
    accessedSongIndex,

    onPlayClick,
    onSongClick,
    onVerseClick,
    onAudioOptionClick,
    onTipsClick,
    onOverviewClick,
    onDotsExpandClick,
    onNavExpandClick,
    onBookColumnClick,
    onLyricExpandClick,
    onTimeChange,
    onPlayerEnd,
    onTimeUpdated,

    annotationPopupChild,
    dotsPopupChild,
    overviewPopupChild,
    dotsTipsSectionChild

}) => {
    const dotsTipsSectionProps = {
            selectedTipsIndex,
            selectedDotsIndex,
            onTipsClick,
            onDotsExpandClick
        },
        menuFieldProps = {
            deviceIndex,
            windowWidth,
            dotsTipsSectionProps,
            dotsTipsOutsideMenu,

            isPhone,
            title,
            accessedSongIndex,
            mp3s,
            isFirstVerse,
            isLastVerse,
            selectedSongTitle,
            selectedSongIndex,
            isPlaying,
            selectedTimePlayed,
            updatedTimePlayed,
            selectedAudioOptionIndex,
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

            dotsTipsSectionChild
        },
        overviewToggleSectionProps = {
            selectedOverviewIndex,
            onOverviewClick
        },
        audioBannerProps = {
            selectedSongTitle,
            selectedTimePlayed
        },
        navSectionProps = {
            songs,
            bookStartingIndices,
            showSingleBookColumn,
            shrinkNavIcon,
            selectedSongIndex,
            selectedNavIndex,
            selectedBookColumnIndex,
            accessedOn,
            accessedSectionKey,
            nextSectionKey,
            accessedSongIndex,
            onSongClick,
            onNavExpandClick,
            onBookColumnClick
        }

    return (
        <div className="column main-column">
            <MenuField {...menuFieldProps} />
            <div className="field centre-field">

                {!showFullPopup &&
                    <div className="field popup-field">
                        <div className="subfield annotation-subfield">
                            {annotationPopupChild}
                        </div>
                        <div className="subfield dots-subfield">
                            {dotsPopupChild}
                        </div>
                    </div>
                }

                <div className="subfield overview-subfield">
                    <OverviewToggleSection {...overviewToggleSectionProps} />
                    <div className="overview-popup-container">
                        {overviewPopupChild}
                    </div>
                </div>

                {isPhone ?
                    <div className="audio-banner-custom-subfield">
                        <AudioBanner {...audioBannerProps} />
                    </div> :
                    <div className="nav-custom-subfield">
                        <NavSection {...navSectionProps} />
                    </div>
                }

                {isHeightlessLyricColumn &&
                    <div className="lyric-button-block expand-button-block in-main">
                        <a
                            className="lyric-button enabled"
                            onClick={onLyricExpandClick}
                        >
                            <div className="large button-icon lyric-icon">
                                {isLyricExpanded ? '-' : '+'}
                            </div>
                        </a>
                    </div>
                }
            </div>
        </div>
    )
}

export default MainColumn
