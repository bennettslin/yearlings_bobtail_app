import React from 'react'
import MainColumn from './main-column'
import LyricColumn from './lyric/lyric-column'
import ScoresTipsSection from './scores-tips-section'
import OverviewButton from './overview/overview-toggle'
import OverviewPopup from './overview/overview-popup'
import AnnotationPopup from './annotation/annotation-popup'
import DotsPopup from './dots/dots-popup'
import DotsSection from './dots/dots-section'
import ScorePopup from './score/score-popup'
import WikiPopup from './wiki/wiki-popup'
import { getSong, getAnnotation, getWikiUrl } from 'helpers/album-view-helper'
import { getIsPhone, getIsDesktop, getShowSingleBookColumn, getShrinkNavIcon, getIsHeightlessLyricColumn, getIsHiddenNav, getScoresTipsOutsideMenu, getTitleInAudio } from 'helpers/responsive-helper'

/*************
 * CONTAINER *
 *************/

const Live = (props) => {

    const { selectedDotsIndex } = props,
        selectedSong = getSong(props),
        annotation = getAnnotation(props),
        selectedWikiUrl = getWikiUrl(props),

        isPhone = getIsPhone(props),
        titleInAudio = getTitleInAudio(props),
        isHiddenNav = getIsHiddenNav(props),
        isHeightlessLyricColumn = getIsHeightlessLyricColumn(props),
        scoresTipsOutsideMenu = getScoresTipsOutsideMenu(props),
        showSingleBookColumn = getShowSingleBookColumn(props),
        shrinkNavIcon = getShrinkNavIcon(props)

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
            titleInAudio={titleInAudio}
            isHiddenNav={isHiddenNav}
            isHeightlessLyricColumn={isHeightlessLyricColumn}
            scoresTipsOutsideMenu={scoresTipsOutsideMenu}
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
    deviceIndex,
    isPhone,
    manualWidth,
    bookStartingIndices,
    mp3s,
    scores,
    songs,
    title,
    isPlaying,
    isLogue,
    selectedSongIndex,
    selectedAnnotationIndex,
    selectedDotKeys,
    selectedWikiIndex,
    selectedWikiUrl,
    selectedScoreIndex,
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

    showLyricButtons,
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
    onScoreClick,
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
    titleInAudio,
    isHiddenNav,
    isHeightlessLyricColumn,
    scoresTipsOutsideMenu,
    showSingleBookColumn,
    shrinkNavIcon

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
            titleInAudio,
            isHiddenNav,
            isHeightlessLyricColumn,
            scoresTipsOutsideMenu,

            isLogue,
            isFirstVerse,
            isLastVerse,
            isPlaying,

            mp3s,
            scores,
            songs,
            title,
            overviewText,
            bookStartingIndices,
            showSingleBookColumn,
            shrinkNavIcon,

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
            onLyricColumnClick,
            onPlayClick,
            onSelectVerseElement,
            onLyricSectionScroll,
            onVerseBarClick
        },
        scoresTipsSectionProps = {
            selectedScoreIndex,
            selectedTipsIndex,
            onScoreClick,
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
        dotsSectionProps = {
            selectedDotKeys,
            selectedDotsIndex,
            presentDotKeys,
            accessedOn,
            accessedSectionKey,
            nextSectionKey,
            accessedDotIndex,
            onDotClick,
            onPopupContainerClick
        },
        scorePopupProps = {
            scores,
            selectedScoreIndex,
            onPopupButtonClick: onScoreClick,
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

        verseBarShown = isSelectedVerseAbove || isSelectedVerseBelow,

        lyricExpandButtonChild = isLyricExpandable && (
            <div className="lyric-button-block expand-button-block">
                <a
                    className="lyric-button enabled"
                    onClick={e => onLyricExpandClick(e)}
                >
                    <div className="large button-icon lyric-icon">
                        {isLyricExpanded ? '-' : '+'}
                    </div>
                </a>
            </div>
        )

    return (
        <div className={
            `live-app
            ${selectedAnnotationIndex ? ' annotation-shown' : ''}
            ${isLogue ? ' is-logue' : ' is-song'}
            ${showLyricButtons ? '' : ' hide-lyric-buttons'}
            ${isLyricExpanded ? ' lyric-expanded' : ' lyric-collapsed'}
            ${titleInAudio ? ' title-in-audio' : ''}
            ${isHeightlessLyricColumn ? ' heightless-lyric' : ''}
            ${selectedNavIndex ? ' nav-expanded' : ''}
            ${selectedDotsIndex ? ' dots-shown' : ''}
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
                dotsPopupChild={ <DotsPopup {...dotsSectionProps} /> }
                dotsSectionChild={ <DotsSection {...dotsSectionProps} /> }
                overviewPopupChild={
                    <OverviewPopup {...overviewPopupProps}
                        inOverviewSubfield={true}
                        overviewButtonChild={ <OverviewButton {...overviewButtonProps} /> }
                    />
                }
                overviewButtonChild={ <OverviewButton {...overviewButtonProps} /> }
                lyricExpandButtonChild={lyricExpandButtonChild}
                scoresTipsSectionChild={ <ScoresTipsSection {...scoresTipsSectionProps} /> }
            />
            <LyricColumn {...lyricColumnProps}
                lyricExpandButtonChild={lyricExpandButtonChild}
            />

            <div className="full-popup-subfield">
                <ScorePopup {...scorePopupProps} />
                <WikiPopup {...wikiPopupProps} />
            </div>

            {showFullPopup &&
                <div className="full-popup-subfield annotation-subfield">
                    <AnnotationPopup {...annotationPopupProps} />
                </div>
            }

        </div>
    )
}

export default Live
