import React from 'react'
import MenuField from './menu-field'
import NavSection from './nav/nav-section'
import AudioBanner from './audio/audio-banner'
import OverviewToggleSection from './overview/overview-toggle-section'
import OverviewPopup from './overview/overview-popup'
import AnnotationPopup from './annotation/annotation-popup'
import DotsPopup from './dots/dots-popup'

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
    overviewPopupProps,

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
    annotation,
    bookStartingIndices,
    showSingleBookColumn,
    shrinkNavIcon,
    isLyricExpanded,

    selectedNavIndex,
    selectedBookColumnIndex,
    selectedDotKeys,
    selectedDotsIndex,
    presentDotKeys,
    selectedWikiIndex,
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
    accessedDotIndex,
    accessedPopupAnchorIndex,

    onPlayClick,
    onSongClick,
    onVerseClick,
    onAudioOptionClick,
    onTipsClick,
    onDotClick,
    onWikiUrlClick,
    onOverviewClick,
    onSongFromPortalClick,
    onAnnotationClick,
    onPopupContainerClick,
    onDotsExpandClick,
    onNavExpandClick,
    onBookColumnClick,
    onLyricExpandClick,
    onTimeChange,
    onPlayerEnd,
    onTimeUpdated

}) => {
    const annotationPopupProps = {
            songs,
            annotation,
            accessedPopupAnchorIndex,
            selectedDotKeys,
            selectedWikiIndex,
            accessedOn,
            accessedSectionKey,
            nextSectionKey,
            showArrows: true,
            onPortalClick: onSongFromPortalClick,
            onWikiUrlClick,
            onPopupButtonClick: onAnnotationClick,
            onPopupContainerClick
        },
        dotsPopupProps = {
            selectedDotKeys,
            selectedDotsIndex,
            presentDotKeys,
            accessedOn,
            accessedSectionKey,
            nextSectionKey,
            accessedDotIndex,
            onDotClick,
            onPopupButtonClick: onDotsExpandClick,
            onPopupContainerClick
        },
        dotsTipsSectionProps = {
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
            onTimeUpdated
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

                <div className="field popup-field">
                    <div className="subfield annotation-subfield">
                        <AnnotationPopup {...annotationPopupProps} />
                    </div>
                    <div className="subfield dots-subfield">
                        <DotsPopup {...dotsPopupProps} />
                    </div>
                </div>

                <div className="subfield overview-subfield">
                    <OverviewToggleSection {...overviewToggleSectionProps} />
                    <div className="overview-popup-container">
                        <OverviewPopup {...overviewPopupProps} {...overviewToggleSectionProps}
                            inOverviewSubfield={true}
                    />
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
