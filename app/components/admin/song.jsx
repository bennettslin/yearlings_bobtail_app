import React from 'react'
import AnnotationPopup from '../annotation/annotation-popup'
import WikiPopup from '../wiki/wiki-popup'
import DotsSection from '../dots/dots-section'
import LyricsSection from '../lyrics/lyrics-section'
import { getSong, getAnnotation, getWikiUrl } from 'helpers/album-view-helper'

/*************
 * CONTAINER *
 *************/

const Song = (props) => {

    const selectedSong = getSong(props),
        annotation = getAnnotation(props),
        selectedWikiUrl = getWikiUrl(props)

    return (
        <SongView {...props}
            annotation={annotation}
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
    selectedVerseIndex,
    showSingleLyricColumn,
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
    onLyricColumnClick,
    onAnnotationSectionClick,

    // From controller.
    annotation,
    presentDotKeys,
    selectedSongLyrics,
    hasDoubleColumns

}) => (

    <div className="column song-column">
        <div className="admin-field song-admin-field">
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
                isAdmin={true}
                selectedDotKeys={selectedDotKeys}
                presentDotKeys={presentDotKeys}
                accessedOn={accessedOn}
                accessedSectionKey={accessedSectionKey}
                nextSectionKey={nextSectionKey}
                accessedDotIndex={accessedDotIndex}
                onDotClick={onDotClick}
            />
            {selectedSongIndex ?
                <LyricsSection
                    isAdmin={true}
                    showSingleLyricColumn={showSingleLyricColumn}
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
                    selectedVerseIndex={selectedVerseIndex}
                    onVerseClick={onVerseClick}
                    onAnnotationClick={onAnnotationClick}
                    onLyricColumnClick={onLyricColumnClick}
                /> : null
            }
        </div>
    </div>
)

export default Song
