import React from 'react'
import AnnotationPopup from './annotation/annotation-popup'
import WikiPopup from './wiki/wiki-popup'
import DotsSection from './dots/dots-section'
import LyricsSection from './lyrics/lyrics-section'
import AlbumHelper from 'helpers/album-view-helper'

/*************
 * CONTAINER *
 *************/

const Song = ({

    selectedSong,
    selectedAnnotationIndex,

...other }) => {

    const annotation = AlbumHelper.getAnnotation(selectedAnnotationIndex, selectedSong)

    return (
        <SongView {...other}
            annotation={annotation}
            selectedAnnotationIndex={selectedAnnotationIndex}
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
    selectedAnnotationIndex,
    selectedDotKeys,
    selectedWikiUrl,
    selectedTime,
    hoveredDotIndex,
    hoveredLineIndex,
    selectedVerseIndex,
    isNarrowScreen,
    selectedLyricColumnIndex,
    selectedSongIndex,

    onDotClick,
    onPortalClick,
    onWikiUrlClick,
    onAnnotationClick,
    onVerseClick,
    onDotHover,
    onLineHover,
    onLyricColumnClick,

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
                onPortalClick={onPortalClick}
                onWikiUrlClick={onWikiUrlClick}
                onCloseClick={onAnnotationClick}
            />
            <WikiPopup
                selectedWikiUrl={selectedWikiUrl}
                onCloseClick={onWikiUrlClick}
            />
            <DotsSection
                hoveredDotIndex={hoveredDotIndex}
                selectedDotKeys={selectedDotKeys}
                presentDotKeys={presentDotKeys}
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
                hasDoubleColumns={hasDoubleColumns}
                songLyrics={selectedSongLyrics}
                selectedTime={selectedTime}
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
