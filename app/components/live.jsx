import React from 'react'
import MainColumn from './main-column'
import LyricColumn from './lyric/lyric-column'
import DotsTipsSection from './dots-tips-section'
import OverviewPopup from './overview/overview-popup'
import { getSong, getAnnotation, getWikiUrl } from 'helpers/album-view-helper'
import { getIsPhone, getShowSingleBookColumn, getShrinkNavIcon, getIsHeightlessLyricColumn, getdotsTipsOutsideMenu } from 'helpers/responsive-helper'

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
        isDotsShown = selectedDotsIndex === 1,
        dotsTipsOutsideMenu = getdotsTipsOutsideMenu(props)

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
            dotsTipsOutsideMenu={dotsTipsOutsideMenu}
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

    showSingleLyricColumn,
    isLyricExpanded,
    isLyricExpandable,
    isOverviewShown,
    isSelectedVerseAbove,
    isSelectedVerseBelow,

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
    onSelectedVerseScroll,

    // From controller.
    overviewText,
    annotation,
    presentDotKeys,
    selectedSongLyrics,
    hasDoubleColumns,
    isHeightlessLyricColumn,
    showSingleBookColumn,
    shrinkNavIcon,
    isDotsShown,
    dotsTipsOutsideMenu

}) => {

    const overviewPopupProps = {
            isPhone,
            isLogue,
            hideClose: true,
            selectedOverviewIndex,
            overviewText,
            onPopupButtonClick: onOverviewClick,
            onPopupContainerClick
        },
        mainColumnProps = {
            overviewPopupProps,

            dotsTipsOutsideMenu,
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
            onPortalClick,
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
        },
        lyricColumnProps = {
            showSingleLyricColumn,
            hasDoubleColumns,
            isLyricExpanded,
            isLyricExpandable,
            isSelectedVerseAbove,
            isSelectedVerseBelow,
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
            onSelectedVerseScroll
        },
        dotsTipsSectionProps = {
            selectedTipsIndex,
            selectedDotsIndex,
            onTipsClick,
            onDotsExpandClick
        }

    return (
        <div className={
            `live-app
            ${isLogue ? ' is-logue' : ' is-song'}
            ${isLyricExpanded ? ' lyric-expanded' : ' lyric-collapsed'}
            ${isHeightlessLyricColumn ? ' heightless-lyric' : ''}
            ${selectedNavIndex ? '' : ' nav-expanded'}
            ${isDotsShown ? ' dots-shown' : ''}
            ${isOverviewShown ? ' overview-shown' : ''}
            ${isSelectedVerseAbove ? ' verse-above' : ''}
            ${isSelectedVerseBelow ? ' verse-below' : ''}
            ${manualWidth ? ' manual-width' : ''}`
        }>
            {/* Ideal for song and logue to not be in separate overview subfields. */}
            <div className="column overview-logue-column">
                    <OverviewPopup {...overviewPopupProps}
                        inOverviewSubfield={false}
                    />
            </div>
            <MainColumn {...mainColumnProps} />
            <LyricColumn {...lyricColumnProps} />

            {dotsTipsOutsideMenu &&
                <div className="dots-tips-custom-subfield">
                    <DotsTipsSection {...dotsTipsSectionProps} />
                </div>
            }
        </div>
    )
}

export default Live
