import React from 'react'
import AnnotationPopup from '../annotation/annotation-popup'
import WikiPopup from '../wiki/wiki-popup'
import DotsSection from '../dots/dots-section'
import LyricsSection from '../lyrics/lyrics-section'
import { getAnnotation } from 'helpers/album-view-helper'

/*************
 * CONTAINER *
 *************/

const Song = ({

    selectedSong,
    selectedAnnotationIndex,
    selectedWikiIndex,

...other }) => {

    const annotation = getAnnotation({ selectedAnnotationIndex, selectedSong }),
        selectedWikiUrl = selectedWikiIndex ? `https://en.m.wikipedia.org/wiki/${annotation.popupAnchors[selectedWikiIndex - 1]}` : null

    return (
        <SongView {...other}
            annotation={annotation}
            selectedAnnotationIndex={selectedAnnotationIndex}
            selectedWikiIndex={selectedWikiIndex}
            selectedWikiUrl={selectedWikiUrl}
            presentDotKeys={selectedSong.dotKeys}
            selectedSongLyrics={selectedSong.lyrics}
            hasDoubleColumns={selectedSong.doubleColumns}
        />
    )
}

/****************
 * PRESENTATION *
 ****************/

// FIXME: Passing songs only because it's needed for portal links. Is there a better way?

const SongView = ({

    // From props.
    songs,

    selectedAnnotationIndex,
    selectedWikiIndex,
    selectedDotKeys,
    selectedWikiUrl,
    hoveredDotIndex,
    hoveredLineIndex,
    selectedVerseIndex,
    isSingleLyricColumn,
    selectedLyricColumnIndex,
    selectedSongIndex,
    lyricsStartAtZero,
    accessedOn,
    accessedSectionKey,
    nextSectionKey,
    accessedAnnotationIndex,
    accessedVerseIndex,
    accessedLyricElement,
    accessedPopupAnchorIndex,
    accessedDotIndex,

    onDotClick,
    onPortalClick,
    onWikiUrlClick,
    onAnnotationClick,
    onVerseClick,
    onDotHover,
    onLineHover,
    onLyricColumnClick,
    onAnnotationSectionClick,

    // From controller.
    annotation,
    presentDotKeys,
    selectedSongLyrics,
    hasDoubleColumns

}) => (

    <div className="column song-column">
        <div className="field song-field">
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
            <DotsSection
                hoveredDotIndex={hoveredDotIndex}
                selectedDotKeys={selectedDotKeys}
                presentDotKeys={presentDotKeys}
                accessedOn={accessedOn}
                accessedSectionKey={accessedSectionKey}
                nextSectionKey={nextSectionKey}
                accessedDotIndex={accessedDotIndex}
                onDotClick={onDotClick}
                onDotHover={onDotHover}
            />
            <LyricsSection
                isSingleLyricColumn={isSingleLyricColumn}
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
                hasDoubleColumns={hasDoubleColumns}
                songLyrics={selectedSongLyrics}
                selectedDotKeys={selectedDotKeys}
                hoveredLineIndex={hoveredLineIndex}
                selectedVerseIndex={selectedVerseIndex}
                onLineHover={onLineHover}
                onVerseClick={onVerseClick}
                onAnnotationClick={onAnnotationClick}
                onLyricColumnClick={onLyricColumnClick}
            />
        </div>
    </div>
)

export default Song
