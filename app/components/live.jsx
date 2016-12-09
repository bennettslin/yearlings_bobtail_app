import React from 'react'
import MenuField from './menu-field'
import NavSection from './nav/nav-section'
import TipsSection from './tips/tips-section'
import OverviewToggleSection from './overview/overview-toggle-section'
import OverviewPopup from './overview/overview-popup'
import StageSection from './stage/stage-section'
import AnnotationPopup from './annotation/annotation-popup'
import WikiPopup from './wiki/wiki-popup'
import DotsSection from './dots/dots-section'
import LyricColumn from './lyric-column'
import { getSong, getAnnotation, getWikiUrl } from 'helpers/album-view-helper'
import { getShowSingleBookColumn, getShrinkNavIcon, getIsHeightlessLyricColumn } from 'helpers/responsive-helper'
import { PHONE_WIDTH_OBJECT, LAPTOP_WIDTH_OBJECT, MONITOR_WIDTH_OBJECT, SHOWN } from 'helpers/constants'

/*************
 * CONTAINER *
 *************/

const Live = (props) => {

    const { deviceWidth } = props,
        selectedSong = getSong(props),
        annotation = getAnnotation(props),
        selectedWikiUrl = getWikiUrl(props),
        isPhone = deviceWidth === PHONE_WIDTH_OBJECT.className,
        isDesktop = deviceWidth === LAPTOP_WIDTH_OBJECT.className || deviceWidth === MONITOR_WIDTH_OBJECT.className,

        isHeightlessLyricColumn = getIsHeightlessLyricColumn(props),
        showSingleBookColumn = getShowSingleBookColumn(props),
        shrinkNavIcon = getShrinkNavIcon(props)

    return (
        <LiveView {...props}
            isPhone={isPhone}
            isDesktop={isDesktop}
            lyrics={selectedSong.lyrics}
            overviewText={selectedSong.overview}
            annotation={annotation}
            selectedWikiUrl={selectedWikiUrl}
            annotations={selectedSong.annotations}
            presentDotKeys={selectedSong.dotKeys}
            selectedSongLyrics={selectedSong.lyrics}
            hasDoubleColumns={selectedSong.doubleColumns}
            isHeightlessLyricColumn={isHeightlessLyricColumn}
            showSingleBookColumn={showSingleBookColumn}
            shrinkNavIcon={shrinkNavIcon}
        />
    )
}

/****************
 * PRESENTATION *
 ****************/

const LiveView = ({

    // From props.
    deviceWidth,
    windowWidth,
    windowHeight,
    manualWidth,
    bookStartingIndices,
    songs,
    title,
    isPlaying,
    selectedSongIndex,
    selectedAnnotationIndex,
    selectedDotKeys,
    selectedWikiIndex,
    selectedWikiUrl,
    selectedVerseIndex,
    selectedAudioOptionIndex,
    selectedTipsIndex,
    selectedTimePlayed,
    selectedLyricColumnIndex,
    selectedOverviewIndex,
    selectedNavIndex,
    selectedBookColumnIndex,
    accessedOn,
    accessedSectionKey,
    nextSectionKey,
    accessedSongIndex,
    accessedAnnotationIndex,
    accessedVerseIndex,
    accessedLyricElement,
    accessedPopupAnchorIndex,
    accessedDotIndex,

    lyricsStartAtZero,

    showSingleLyricColumn,
    isLyricExpanded,
    isLyricExpandable,
    isOverviewShown,

    isPrologue,
    isFirstSong,
    isLastSong,
    isEpilogue,
    isFirstVerse,
    isLastVerse,
    selectedSongTitle,
    onSongClick,
    onVerseClick,
    onPlayClick,
    onAudioOptionClick,
    onTipsClick,
    onOverviewClick,
    onDotClick,
    onPortalClick,
    onWikiUrlClick,
    onAnnotationClick,
    onLyricColumnClick,
    onAnnotationSectionClick,
    onLyricExpandClick,
    onNavExpandClick,
    onBookColumnClick,

    // From controller.
    isPhone,
    isDesktop,
    overviewText,
    tasks,
    lyrics,
    annotations,
    annotation,
    presentDotKeys,
    selectedSongLyrics,
    hasDoubleColumns,
    isHeightlessLyricColumn,
    showSingleBookColumn,
    shrinkNavIcon,

...other }) => {

    const isLogue = isPrologue || isEpilogue,
        annotationPopupProps = {
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
        dotsSectionProps = {
            selectedDotKeys,
            presentDotKeys,
            accessedOn,
            accessedSectionKey,
            nextSectionKey,
            accessedDotIndex,
            onDotClick
        },
        menuFieldProps = {
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
            selectedTipsIndex,
            isPlaying,
            selectedTimePlayed,
            selectedAudioOptionIndex,
            accessedOn,
            accessedSectionKey,
            nextSectionKey,
            onPlayClick,
            onSongClick,
            onVerseClick,
            onAudioOptionClick,
            onTipsClick
        },
        overviewToggleSectionProps = {
            selectedOverviewIndex,
            onOverviewClick
        },
        overviewPopupProps = {
            deviceWidth,
            isLogue,
            hideClose: true,
            selectedOverviewIndex,
            overviewText,
            onPopupButtonClick: onOverviewClick
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
        },
        lyricColumnProps = {
            showSingleLyricColumn,
            hasDoubleColumns,
            isLyricExpanded,
            isLyricExpandable,
            lyricsStartAtZero,
            accessedOn,
            accessedSectionKey,
            nextSectionKey,
            accessedLyricElement,
            accessedAnnotationIndex,
            accessedVerseIndex,
            selectedSongIndex,
            selectedAnnotationIndex,
            selectedLyricColumnIndex,
            songLyrics: selectedSongLyrics,
            selectedDotKeys,
            selectedVerseIndex,
            onVerseClick,
            onAnnotationClick,
            onLyricExpandClick,
            onLyricColumnClick
        }

    return (
        <div className={`live-window${isLogue ? ' is-logue' : ' is-song'}${isLyricExpanded ? ' lyric-expanded' : ' lyric-collapsed'}${isHeightlessLyricColumn ? ' heightless-lyric' : ''}${selectedNavIndex ? '' : ' nav-expanded'}${isOverviewShown ? ' overview-shown' : ''}${manualWidth ? ' manual-width' : ''}`}>
            {false ?
                <TipsSection {...tipsSectionProps} /> : null
            }
            {false ?
                <DotsSection {...dotsSectionProps} /> : null
            }
            {/* Ideal for song and logue to not be in separate overview subfields. */}
            <div className="subfield overview-logue-subfield">
                    <OverviewPopup {...overviewPopupProps}
                        inOverviewSubfield={false}
                    />
            </div>
            {isDesktop ?
                <MenuField {...menuFieldProps}
                    isOutsideMain={true}
                /> : null
            }
            <div className="main-column">
                {!isDesktop ?
                    <MenuField {...menuFieldProps} /> :
                    <MenuField {...menuFieldProps}
                        isPlaceholder={true}
                    />
                }
                <div className="field main-field">
                    <StageSection
                    />
                    <div className="field popup-field">
                        <div className="subfield annotation-subfield">
                            <AnnotationPopup {...annotationPopupProps} />
                        </div>
                        <div className="subfield wiki-subfield">
                            <WikiPopup {...wikiPopupProps} />
                        </div>
                        <div className="subfield dots-subfield">

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
                    {isHeightlessLyricColumn ?
                        <div className="lyric-button-block expand-button-block">
                            <a
                                className="lyric-button enabled"
                                onClick={onLyricExpandClick}
                            >
                                <div className="button-icon lyric-icon">
                                    {isLyricExpanded ? '-' : '+'}
                                </div>
                            </a>
                        </div> : null
                    }
                </div>
                {isDesktop ?
                    <div className="field nav-field placeholder"></div> : null
                }
            </div>
            {!isPhone ?
                <div className="field nav-field outside-main">
                    <NavSection {...navSectionProps} />
                </div> : null
            }
            <LyricColumn {...lyricColumnProps} />
        </div>
    )
}

export default Live
