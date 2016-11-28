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
import { PHONE_WIDTH_OBJECT } from 'helpers/constants'

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
        overviewPopupProps = {
            isLogue,
            hideClose: true,
            selectedOverviewIndex,
            overviewText,
            onPopupButtonClick: onOverviewClick
        }

    return (
        <div className={`live-window${isLogue ? ' is-logue' : ' is-song'}${isLyricExpanded ? ' lyric-expanded' : ''}`}>
            {false ?
                <TipsSection
                    selectedTipsIndex={selectedTipsIndex}
                    onTipsClick={onTipsClick}
                /> : null
            }
            <AnnotationPopup
                songs={songs}
                annotation={annotation}
                accessedPopupAnchorIndex={accessedPopupAnchorIndex}
                selectedDotKeys={selectedDotKeys}
                selectedWikiIndex={selectedWikiIndex}
                accessedOn={accessedOn}
                accessedSectionKey={accessedSectionKey}
                nextSectionKey={nextSectionKey}
                showArrows={true}
                onPortalClick={onPortalClick}
                onWikiUrlClick={onWikiUrlClick}
                onPopupButtonClick={onAnnotationClick}
                onSectionClick={onAnnotationSectionClick}
            />
            <WikiPopup
                selectedWikiUrl={selectedWikiUrl}
                accessedOn={accessedOn}
                accessedSectionKey={accessedSectionKey}
                nextSectionKey={nextSectionKey}
                onPopupButtonClick={onWikiUrlClick}
            />
            {false ?
                <DotsSection
                    selectedDotKeys={selectedDotKeys}
                    presentDotKeys={presentDotKeys}
                    accessedOn={accessedOn}
                    accessedSectionKey={accessedSectionKey}
                    nextSectionKey={nextSectionKey}
                    accessedDotIndex={accessedDotIndex}
                    onDotClick={onDotClick}
                /> : null
            }
            <div className="main-column">
                <div className="field menu-field">
                    {!isPhone ?
                        <TitleSection
                        title={title}
                        accessedOn={accessedOn}
                        accessedSectionKey={accessedSectionKey}
                        nextSectionKey={nextSectionKey}
                        accessedSongIndex={accessedSongIndex}
                        onTitleClick={onSongClick}
                        /> : null
                    }
                    <AudioSection
                        isPrologue={isPrologue}
                        isFirstSong={isFirstSong}
                        isLastSong={isLastSong}
                        isEpilogue={isEpilogue}
                        isFirstVerse={isFirstVerse}
                        isLastVerse={isLastVerse}
                        selectedSongTitle={selectedSongTitle}
                        selectedSongIndex={selectedSongIndex}
                        isPlaying={isPlaying}
                        selectedTimePlayed={selectedTimePlayed}
                        selectedAudioOptionIndex={selectedAudioOptionIndex}
                        accessedOn={accessedOn}
                        accessedSectionKey={accessedSectionKey}
                        nextSectionKey={nextSectionKey}
                        onPlayClick={onPlayClick}
                        onAudioSongClick={onSongClick}
                        onAudioTimeClick={onVerseClick}
                        onAudioOptionClick={onAudioOptionClick}
                    />
                </div>
                <div className="field main-field">
                    {/* Ideal for song and logue to not be in separate overview subfields. */}
                    <div className="subfield overview-logue-subfield">
                            <OverviewPopup {...overviewPopupProps}
                                inOverviewSubfield={false}
                            />
                    </div>
                    <div className="subfield overview-subfield">
                        <OverviewToggleSection {...other}
                            selectedOverviewIndex={selectedOverviewIndex}
                            onOverviewClick={onOverviewClick}
                        />
                        <div className="overview-popup-container">
                                <OverviewPopup {...overviewPopupProps}
                                    inOverviewSubfield={true}
                                />
                        </div>
                    </div>
                    <StageSection
                    />
                </div>
                {!isPhone ?
                    <div className="field nav-field">
                        <NavSection
                            songs={songs}
                            selectedSongIndex={selectedSongIndex}
                            accessedOn={accessedOn}
                            accessedSectionKey={accessedSectionKey}
                            nextSectionKey={nextSectionKey}
                            accessedSongIndex={accessedSongIndex}
                            onSongClick={onSongClick}
                        />
                    </div> : null
                }
            </div>
            <LyricColumn
                showSingleLyricColumn={showSingleLyricColumn}
                hasDoubleColumns={hasDoubleColumns}
                isLyricExpanded={isLyricExpanded}
                isLyricExpandable={isLyricExpandable}
                lyricsStartAtZero={lyricsStartAtZero}
                accessedOn={accessedOn}
                accessedSectionKey={accessedSectionKey}
                nextSectionKey={nextSectionKey}
                accessedLyricElement={accessedLyricElement}
                accessedAnnotationIndex={accessedAnnotationIndex}
                accessedVerseIndex={accessedVerseIndex}
                selectedSongIndex={selectedSongIndex}
                selectedAnnotationIndex={selectedAnnotationIndex}
                selectedLyricColumnIndex={selectedLyricColumnIndex}
                songLyrics={selectedSongLyrics}
                selectedDotKeys={selectedDotKeys}
                selectedVerseIndex={selectedVerseIndex}
                onVerseClick={onVerseClick}
                onAnnotationClick={onAnnotationClick}
                onLyricExpandClick={onLyricExpandClick}
                onLyricColumnClick={onLyricColumnClick}
            />
        </div>
    )
}

export default Live
