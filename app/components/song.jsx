import React from 'react'
import AnnotationPopup from './annotation/annotation-popup'
import WikiPopup from './wiki/wiki-popup'
import DotsSection from './dots/dots-section'
import LyricsSection from './lyrics/lyrics-section'
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
        selectedWikiUrl = selectedWikiIndex ? `https://en.m.wikipedia.org/wiki/${annotation.wikis[selectedWikiIndex - 1]}` : null

    return (
        <SongView {...other}
            annotation={annotation}
            selectedAnnotationIndex={selectedAnnotationIndex}
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

    accessedAnnotationIndex,
    accessedAnnotationOutlined,
    accessedDotIndex,
    selectedAnnotationIndex,
    selectedDotKeys,
    selectedWikiUrl,
    hoveredDotIndex,
    hoveredLineIndex,
    selectedVerseIndex,
    isNarrowScreen,
    selectedLyricColumnIndex,
    selectedSongIndex,
    accessedOn,
    accessedSectionKey,

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
                selectedDotKeys={selectedDotKeys}
                accessedOn={accessedOn}
                accessedSectionKey={accessedSectionKey}
                onPortalClick={onPortalClick}
                onWikiUrlClick={onWikiUrlClick}
                onCloseClick={onAnnotationClick}
                onSectionClick={onAnnotationSectionClick}
            />
            <WikiPopup
                selectedWikiUrl={selectedWikiUrl}
                accessedOn={accessedOn}
                accessedSectionKey={accessedSectionKey}
                onCloseClick={onWikiUrlClick}
            />
            <DotsSection
                hoveredDotIndex={hoveredDotIndex}
                selectedDotKeys={selectedDotKeys}
                presentDotKeys={presentDotKeys}
                accessedOn={accessedOn}
                accessedSectionKey={accessedSectionKey}
                accessedDotIndex={accessedDotIndex}
                onDotClick={onDotClick}
                onDotHover={onDotHover}
            />
            <LyricsSection
                isNarrowScreen={isNarrowScreen}
                accessedAnnotationIndex={accessedAnnotationIndex}
                accessedAnnotationOutlined={accessedAnnotationOutlined}
                selectedSongIndex={selectedSongIndex}
                selectedAnnotationIndex={selectedAnnotationIndex}
                selectedLyricColumnIndex={selectedLyricColumnIndex}
                accessedOn={accessedOn}
                accessedSectionKey={accessedSectionKey}
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
