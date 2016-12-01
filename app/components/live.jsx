import React from 'react'
import TitleSection from './title/title-section'
import AudioSection from './audio/audio-section'
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
import { PHONE_WIDTH_OBJECT, SHOWN } from 'helpers/constants'

/*************
 * CONTAINER *
 *************/

const Live = (props) => {

    const { deviceWidth } = props,
        selectedSong = getSong(props),
        annotation = getAnnotation(props),
        selectedWikiUrl = getWikiUrl(props),
        isPhone = deviceWidth === PHONE_WIDTH_OBJECT.className

    return (
        <LiveView {...props}
            isPhone={isPhone}
            lyrics={selectedSong.lyrics}
            overviewText={selectedSong.overview}
            annotation={annotation}
            selectedWikiUrl={selectedWikiUrl}
            annotations={selectedSong.annotations}
            presentDotKeys={selectedSong.dotKeys}
            selectedSongLyrics={selectedSong.lyrics}
            hasDoubleColumns={selectedSong.doubleColumns}
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

    // From controller.
    isPhone,
    overviewText,
    tasks,
    lyrics,
    annotations,
    annotation,
    presentDotKeys,
    selectedSongLyrics,
    hasDoubleColumns,

...other }) => {

    const isLogue = isPrologue || isEpilogue,
        tipsSectionProps = {
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
        titleSectionProps = {
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
            selectedSongIndex,
            accessedOn,
            accessedSectionKey,
            nextSectionKey,
            accessedSongIndex,
            onSongClick
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
        <div className={`live-window${isLogue ? ' is-logue' : ' is-song'}${isLyricExpanded ? ' lyric-expanded' : ''}${isOverviewShown ? ' overview-shown' : ''}`}>
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
            <div className="main-column">
                <div className="field menu-field">
                    {!isPhone ?
                        <TitleSection {...titleSectionProps} /> : null
                    }
                    <AudioSection {...audioSectionProps} />
                </div>
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
                    </div>
                    <div className="subfield overview-subfield">
                        <OverviewToggleSection {...overviewToggleSectionProps} />
                        <div className="overview-popup-container">
                                <OverviewPopup {...overviewPopupProps} {...overviewToggleSectionProps}
                                    inOverviewSubfield={true}
                                />
                        </div>
                    </div>
                </div>
                {!isPhone ?
                    <div className="field nav-field">
                        <NavSection {...navSectionProps} />
                    </div> : null
                }
            </div>
            <LyricColumn {...lyricColumnProps} />
        </div>
    )
}

export default Live
