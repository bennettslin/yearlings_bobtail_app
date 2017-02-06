import React from 'react'
import MenuField from './menu-field'
import NavSection from './nav/nav-section'
import AudioBanner from './audio/audio-banner'
import DotsOverviewToggleSection from './dots-overview-toggle-section'
import { getIsDesktop } from 'helpers/responsive-helper'

/*************
 * CONTAINER *
 *************/

const MainColumn = (props) => {

    const isDesktop = getIsDesktop(props.deviceIndex)

    return (
        <MainColumnView {...props}
            isDesktop={isDesktop}
        />
    )
}

/****************
 * PRESENTATION *
 ****************/

const MainColumnView = ({

    // From props.
    showFullPopup,

    isPhone,
    isLogue,
    deviceIndex,
    titleInAudio,
    isHiddenNav,
    isHeightlessLyricColumn,
    scoresTipsOutsideMenu,

    isFirstVerse,
    isLastVerse,
    isPlaying,

    mp3s,
    songs,
    title,
    bookStartingIndices,
    showSingleBookColumn,
    shrinkNavIcon,

    selectedDotsIndex,
    selectedNavIndex,
    selectedBookColumnIndex,
    selectedSongTitle,
    selectedSongIndex,
    selectedTimePlayed,
    updatedTimePlayed,
    selectedAudioOptionIndex,

    accessedOn,
    accessedSectionKey,
    nextSectionKey,
    accessedSongIndex,

    onPlayClick,
    onSongClick,
    onVerseClick,
    onAudioOptionClick,
    onNavExpandClick,
    onBookColumnClick,
    onDotsExpandClick,
    onTimeChange,
    onPlayerEnd,
    onTimeUpdated,

    annotationPopupChild,
    dotsPopupChild,
    dotsSectionChild,
    overviewPopupChild,
    overviewButtonChild,
    lyricExpandButtonChild,
    scoresTipsSectionChild,

    // From controller.
    isDesktop

}) => {
    const menuFieldProps = {
            titleInAudio,
            scoresTipsOutsideMenu,

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

            scoresTipsSectionChild
        },
        dotsOverviewToggleSectionProps = {
            selectedDotsIndex,
            onDotsExpandClick,
            overviewButtonChild,
            dotsSectionChild
        },
        audioBannerProps = {
            isLogue,
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
            <MenuField {...menuFieldProps}
                audioBannerChild={ <AudioBanner {...audioBannerProps} /> }
            />
            <div className="field centre-field">

                {!showFullPopup &&
                    <div className="field popup-field">
                        <div className="subfield annotation-subfield">
                            {annotationPopupChild}
                        </div>
                    </div>
                }


                <div className="subfield dots-overview-subfield">
                    <DotsOverviewToggleSection {...dotsOverviewToggleSectionProps}
                        scoresTipsSectionChild={
                            isDesktop && scoresTipsOutsideMenu &&
                                scoresTipsSectionChild
                        }
                    />
                    <div className="overview-popup-container">
                        {overviewPopupChild}
                    </div>

                    {lyricExpandButtonChild}

                    <div className="dots-subfield">
                        {dotsSectionChild}
                    </div>
                    {!isDesktop && scoresTipsOutsideMenu && scoresTipsSectionChild}
                </div>

                {isPhone &&
                    <div className="audio-banner-custom-subfield">
                        <AudioBanner {...audioBannerProps} />
                    </div>
                }

                {!isHiddenNav &&
                    <div className="nav-custom-subfield">
                        <NavSection {...navSectionProps} />
                    </div>
                }
            </div>
        </div>
    )
}

export default MainColumn
