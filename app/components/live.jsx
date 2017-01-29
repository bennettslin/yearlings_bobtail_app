import React from 'react'
import MainColumn from './main-column'
import LyricColumn from './lyric/lyric-column'
import ScoresTipsSection from './scores-tips-section'
import OverviewButton from './overview/overview-toggle'
import OverviewPopup from './overview/overview-popup'
import AnnotationPopup from './annotation/annotation-popup'
import DotsPopup from './dots/dots-popup'
import WikiPopup from './wiki/wiki-popup'
import { getSong, getAnnotation, getWikiUrl } from 'helpers/album-view-helper'
import { getIsPhone, getIsDesktop, getShowSingleBookColumn, getShrinkNavIcon, getIsHeightlessLyricColumn } from 'helpers/responsive-helper'

/*************
 * CONTAINER *
 *************/

const Live = (props) => {

    const { selectedDotsIndex } = props,
        selectedSong = getSong(props),
        annotation = getAnnotation(props),
        selectedWikiUrl = getWikiUrl(props),

        isPhone = getIsPhone(props),
        isHeightlessLyricColumn = getIsHeightlessLyricColumn(props),
        showSingleBookColumn = getShowSingleBookColumn(props),
        shrinkNavIcon = getShrinkNavIcon(props),
        isDotsShown = selectedDotsIndex === 1

    return (
        <LiveView {...props}
            lyrics={selectedSong.lyrics}
            overviewText={selectedSong.overview}
            annotation={annotation}
            selectedWikiUrl={selectedWikiUrl}
            presentDotKeys={selectedSong.dotKeys}
            selectedSongLyrics={selectedSong.lyrics}
            hasDoubleColumns={selectedSong.doubleColumns}
            isPhone={isPhone}
            isHeightlessLyricColumn={isHeightlessLyricColumn}
            showSingleBookColumn={showSingleBookColumn}
            shrinkNavIcon={shrinkNavIcon}
            isDotsShown={isDotsShown}
        />
    )
}

/****************
 * PRESENTATION *
 ****************/

const LiveView = ({

    // From props.
    deviceIndex,
    isPhone,
    windowWidth,
    manualWidth,
    bookStartingIndices,
    mp3s,
    songs,
    title,
    isPlaying,
    isLogue,
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
    selectedDotsIndex,
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
    hiddenLyricColumnKey,

    showSingleLyricColumn,
    isLyricExpanded,
    isLyricExpandable,
    isOverviewShown,
    isSelectedVerseAbove,
    isSelectedVerseBelow,
    selectedVerse,

    isFirstVerse,
    isLastVerse,
    selectedSongTitle,
    updatedTimePlayed,
    onSongClick,
    onVerseClick,
    onPlayClick,
    onAudioOptionClick,
    onTipsClick,
    onOverviewClick,
    onDotClick,
    onPortalClick,
    onSongFromPortalClick,
    onWikiUrlClick,
    onAnnotationClick,
    onLyricColumnClick,
    onPopupContainerClick,
    onDotsExpandClick,
    onLyricExpandClick,
    onNavExpandClick,
    onBookColumnClick,
    onTimeChange,
    onPlayerEnd,
    onTimeUpdated,
    onSelectVerseElement,
    onLyricSectionScroll,
    onVerseBarClick,

    // From controller.
    overviewText,
    annotation,
    presentDotKeys,
    selectedSongLyrics,
    hasDoubleColumns,
    isHeightlessLyricColumn,
    showSingleBookColumn,
    shrinkNavIcon,
    isDotsShown

}) => {

    const showFullPopup = !getIsDesktop(deviceIndex),
        overviewPopupProps = {
            isPhone,
            isLogue,
            hideClose: true,
            selectedOverviewIndex,
            overviewText,
            onPopupButtonClick: onOverviewClick,
            onPopupContainerClick,

            // For toggle in popup in phone.
            onOverviewClick
        },
        mainColumnProps = {
            showFullPopup,

            isPhone,
            deviceIndex,
            windowWidth,
            isHeightlessLyricColumn,

            isLogue,
            isFirstVerse,
            isLastVerse,
            isPlaying,

            mp3s,
            songs,
            title,
            overviewText,
            bookStartingIndices,
            showSingleBookColumn,
            shrinkNavIcon,
            isLyricExpanded,

            selectedNavIndex,
            selectedBookColumnIndex,
            selectedDotsIndex,
            selectedWikiUrl,
            selectedSongTitle,
            selectedSongIndex,
            selectedTipsIndex,
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
            onTipsClick,
            onPortalClick,
            onDotsExpandClick,
            onNavExpandClick,
            onBookColumnClick,
            onLyricExpandClick,
            onTimeChange,
            onPlayerEnd,
            onTimeUpdated
        },
        lyricColumnProps = {
            isLogue,
            showSingleLyricColumn,
            hiddenLyricColumnKey,
            hasDoubleColumns,
            isPlaying,
            isLyricExpanded,
            isLyricExpandable,
            isSelectedVerseAbove,
            isSelectedVerseBelow,
            selectedVerse,
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
            onLyricColumnClick,
            onPlayClick,
            onSelectVerseElement,
            onLyricSectionScroll,
            onVerseBarClick
        },
        scoresTipsSectionProps = {
            selectedTipsIndex,
            onTipsClick
        },
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
        wikiPopupProps = {
            selectedWikiUrl,
            accessedOn,
            accessedSectionKey,
            nextSectionKey,
            onPopupButtonClick: onWikiUrlClick,
            onPopupContainerClick
        },
        overviewButtonProps = {
            selectedOverviewIndex,
            onOverviewClick
        },
        verseBarShown = isSelectedVerseAbove || isSelectedVerseBelow

    return (
        <div className={
            `live-app
            ${selectedAnnotationIndex ? ' annotation-shown' : ''}
            ${isLogue ? ' is-logue' : ' is-song'}
            ${isLyricExpanded ? ' lyric-expanded' : ' lyric-collapsed'}
            ${isHeightlessLyricColumn ? ' heightless-lyric' : ''}
            ${selectedNavIndex ? '' : ' nav-expanded'}
            ${isDotsShown ? ' dots-shown' : ''}
            ${isOverviewShown ? ' overview-shown' : ''}
            ${isSelectedVerseAbove ? ' verse-above' : ''}
            ${isSelectedVerseBelow ? ' verse-below' : ''}
            ${verseBarShown ? '' : ' verse-bar-hidden'}
            ${manualWidth ? ' manual-width' : ''}`
        }>
            {/* Ideal for song and logue to not be in separate overview subfields. */}
            <div className="column overview-logue-column">
                    <OverviewPopup {...overviewPopupProps}
                        inOverviewSubfield={false}
                    />
            </div>
            <MainColumn {...mainColumnProps}
                annotationPopupChild={ <AnnotationPopup {...annotationPopupProps} /> }
                dotsPopupChild={ <DotsPopup {...dotsPopupProps} /> }
                overviewPopupChild={
                    <OverviewPopup {...overviewPopupProps}
                        inOverviewSubfield={true}
                        overviewButtonChild={ <OverviewButton {...overviewButtonProps} /> }
                    />
                }
                overviewButtonChild={ <OverviewButton {...overviewButtonProps} /> }
                scoresTipsSectionChild={ <ScoresTipsSection {...scoresTipsSectionProps} /> }
            />
            <LyricColumn {...lyricColumnProps} />

            <div className="full-popup-subfield">
                <WikiPopup {...wikiPopupProps} />
            </div>

            {showFullPopup &&
                <div className="full-popup-subfield annotation-subfield">
                    <AnnotationPopup {...annotationPopupProps} />
                </div>
            }

            {showFullPopup &&
                <div className="full-popup-subfield dots-subfield">
                    <DotsPopup {...dotsPopupProps} />
                </div>
            }
        </div>
    )
}

export default Live
