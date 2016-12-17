import React from 'react'
import MenuField from './menu-field'
import NavSection from './nav/nav-section'
import AudioBanner from './audio/audio-banner'
import DotsTipsSection from './dots-tips-section'
import OverviewToggleSection from './overview/overview-toggle-section'
import OverviewPopup from './overview/overview-popup'
import AnnotationPopup from './annotation/annotation-popup'
import WikiPopup from './wiki/wiki-popup'
import DotsPopup from './dots/dots-popup'
import { getDotsTipsInMain } from 'helpers/responsive-helper'

/*************
 * CONTAINER *
 *************/

const MainColumn = (props) => {

    const dotsTipsInMain = getDotsTipsInMain(props)

    return (
        <MainColumnView {...props}
            dotsTipsInMain={dotsTipsInMain}
        />
    )
}

/****************
 * PRESENTATION *
 ****************/

const MainColumnView = ({

    // From props.
    overviewPopupProps,

    isPhone,
    deviceIndex,
    windowWidth,
    isHeightlessLyricColumn,

    isLogue,
    isPrologue,
    isFirstSong,
    isLastSong,
    isEpilogue,
    isFirstVerse,
    isLastVerse,
    isPlaying,

    songs,
    title,
    annotation,
    overviewText,
    bookStartingIndices,
    showSingleBookColumn,
    shrinkNavIcon,
    isLyricExpanded,

    selectedNavIndex,
    selectedBookColumnIndex,
    selectedDotKeys,
    selectedDotsIndex,
    presentDotKeys,
    selectedWikiUrl,
    selectedWikiIndex,
    selectedSongTitle,
    selectedSongIndex,
    selectedTipsIndex,
    selectedTimePlayed,
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
    onPortalClick,
    onAnnotationClick,
    onAnnotationSectionClick,
    onDotsExpandClick,
    onNavExpandClick,
    onBookColumnClick,
    onLyricExpandClick,

    // From controller.
    dotsTipsInMain

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
            onPortalClick,
            onWikiUrlClick,
            onPopupButtonClick: onAnnotationClick,
            onSectionClick: onAnnotationSectionClick
        },
        wikiPopupProps = {
            selectedWikiUrl,
            accessedOn,
            accessedSectionKey,
            nextSectionKey,
            onPopupButtonClick: onWikiUrlClick
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
            onPopupButtonClick: onDotsExpandClick
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
            dotsTipsInMain,

            isPhone,
            title,
            accessedOn,
            accessedSectionKey,
            nextSectionKey,
            accessedSongIndex,
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
            onSongClick,
            onVerseClick,
            onAudioOptionClick
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
        <div className={`column main-column${dotsTipsInMain ? ' dots-tips-in-main' : ''}`}>
            <MenuField {...menuFieldProps} />
            <div className="field centre-field">

                <div className="field popup-field">
                    <div className="subfield annotation-subfield">
                        <AnnotationPopup {...annotationPopupProps} />
                    </div>
                    <div className="subfield wiki-subfield">
                        <WikiPopup {...wikiPopupProps} />
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

                {dotsTipsInMain ?
                    <div className="dots-tips-custom-subfield">
                        <DotsTipsSection {...dotsTipsSectionProps} />
                    </div> : null
                }

                {/* FIXME: Get rid of this, and its props. */}
                {false ?
                    <div className="lyric-button-block expand-button-block in-main">
                        <a
                            className="lyric-button enabled"
                            onClick={onLyricExpandClick}
                        >
                            <div className="large button-icon lyric-icon">
                                {isLyricExpanded ? '-' : '+'}
                            </div>
                        </a>
                    </div> : null
                }
            </div>
        </div>
    )
}

export default MainColumn
