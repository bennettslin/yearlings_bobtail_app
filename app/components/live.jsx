import React from 'react'
import MainColumn from './main-column'
import LyricColumn from './lyric-column'
import OverviewPopup from './overview/overview-popup'
import { getSong, getAnnotation, getWikiUrl } from 'helpers/album-view-helper'
import { getIsPhone, getShowSingleBookColumn, getShrinkNavIcon, getIsHeightlessLyricColumn } from 'helpers/responsive-helper'

/*************
 * CONTAINER *
 *************/

const Live = (props) => {

    const { isPrologue,
            isEpilogue,
            selectedDotsIndex } = props,
        selectedSong = getSong(props),
        annotation = getAnnotation(props),
        selectedWikiUrl = getWikiUrl(props),
        isLogue = isPrologue || isEpilogue,

        isPhone = getIsPhone(props),
        isHeightlessLyricColumn = getIsHeightlessLyricColumn(props),
        showSingleBookColumn = getShowSingleBookColumn(props),
        shrinkNavIcon = getShrinkNavIcon(props),
        isDotsShown = selectedDotsIndex === 1

    return (
        <LiveView {...props}
            isLogue={isLogue}
            lyrics={selectedSong.lyrics}
            overviewText={selectedSong.overview}
            annotation={annotation}
            selectedWikiUrl={selectedWikiUrl}
            annotations={selectedSong.annotations}
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
    windowHeight,
    manualWidth,
    portalsIndices,
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
    selectedDotsIndex,
    selectedNavIndex,
    selectedBookColumnIndex,
    selectedPortalsIndex,
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
    onSongFromPortalClick,
    onWikiUrlClick,
    onAnnotationClick,
    onLyricColumnClick,
    onAnnotationSectionClick,
    onDotsExpandClick,
    onLyricExpandClick,
    onNavExpandClick,
    onBookColumnClick,

    // From controller.
    isLogue,
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
    isDotsShown

}) => {

    const overviewPopupProps = {
            isPhone,
            isLogue,
            hideClose: true,
            selectedOverviewIndex,
            overviewText,
            onPopupButtonClick: onOverviewClick
        },
        mainColumnProps = {
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
            portalsIndices,
            bookStartingIndices,
            showSingleBookColumn,
            shrinkNavIcon,
            isLyricExpanded,

            selectedNavIndex,
            selectedBookColumnIndex,
            selectedPortalsIndex,
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
            onSongFromPortalClick,
            onWikiUrlClick,
            onAnnotationClick,
            onAnnotationSectionClick,
            onDotsExpandClick,
            onNavExpandClick,
            onBookColumnClick,
            onLyricExpandClick
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
        <div className={`live-app${isLogue ? ' is-logue' : ' is-song'}${isLyricExpanded ? ' lyric-expanded' : ' lyric-collapsed'}${isHeightlessLyricColumn ? ' heightless-lyric' : ''}${selectedNavIndex ? '' : ' nav-expanded'}${isDotsShown ? ' dots-shown' : ''}${isOverviewShown ? ' overview-shown' : ''}${manualWidth ? ' manual-width' : ''}`}>
            {/* Ideal for song and logue to not be in separate overview subfields. */}
            <div className="column overview-logue-column">
                    <OverviewPopup {...overviewPopupProps}
                        inOverviewSubfield={false}
                    />
            </div>
            <MainColumn {...mainColumnProps} />
            <LyricColumn {...lyricColumnProps} />
        </div>
    )
}

export default Live
