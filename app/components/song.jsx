import React from 'react'
import AnnotationPopup from './annotation/annotation-popup'
import WikiPopup from './wiki/wiki-popup'
import DotsSection from './dots/dots-section'
import LyricsSection from './lyrics/lyrics-section'
import AlbumHelper from 'helpers/album-view-helper'

/*************
 * CONTAINER *
 *************/

const Song = (props) => {

    const { selectedSong,
            selectedAnnotationIndex } = props,

        annotation = AlbumHelper.getAnnotation(selectedAnnotationIndex, selectedSong)

    return (
        <SongView {...props}
            annotation={annotation}
            presentDotKeys={selectedSong.dotKeys}
            selectedSongLyrics={selectedSong.lyrics}
        />
    )
}

/****************
 * PRESENTATION *
 ****************/

const SongView = ({

    // From props.
    songs,

    selectedAnnotationIndex,
    selectedDotKeys,
    selectedWikiUrl,
    selectedTime,
    hoveredDotIndex,
    hoveredLineIndex,

    onDotClick,
    onPortalClick,
    onWikiUrlClick,
    onAnnotationClick,
    onTimeClick,
    onDotHover,
    onLineHover,

    // From controller.
    annotation,
    presentDotKeys,
    selectedSongLyrics

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
                showUnpresent={true}
                hoveredDotIndex={hoveredDotIndex}
                selectedDotKeys={selectedDotKeys}
                presentDotKeys={presentDotKeys}
                onDotClick={onDotClick}
                onDotHover={onDotHover}
            />
            <LyricsSection
                songLyrics={selectedSongLyrics}
                selectedTime={selectedTime}
                selectedAnnotationIndex={selectedAnnotationIndex}
                selectedDotKeys={selectedDotKeys}
                hoveredLineIndex={hoveredLineIndex}
                onTimeClick={onTimeClick}
                onAnnotationClick={onAnnotationClick}
                onLineHover={onLineHover}
            />
        </div>
    </div>
)

export default Song
