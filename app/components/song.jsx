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

    const { activeSong,
            activeAnnotationIndex } = props,

        annotation = AlbumHelper.getAnnotation(activeAnnotationIndex, activeSong)

    return (
        <SongView {...props}
            annotation={annotation}
            presentDotKeys={activeSong.dotKeys}
            activeSongLyrics={activeSong.lyrics}
        />
    )
}

/****************
 * PRESENTATION *
 ****************/

const SongView = ({

    // From props.
    songs,

    activeAnnotationIndex,
    activeDotKeys,
    activeWikiUrl,
    activeTime,
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
    activeSongLyrics

}) => (

    <div className="column song-column">
        <div className="field song-field">
            <AnnotationPopup
                songs={songs}
                annotation={annotation}
                activeDotKeys={activeDotKeys}
                onPortalClick={onPortalClick}
                onWikiUrlClick={onWikiUrlClick}
                onCloseClick={onAnnotationClick}
            />
            <WikiPopup
                activeWikiUrl={activeWikiUrl}
                onCloseClick={onWikiUrlClick}
            />
            <DotsSection
                showUnpresent={true}
                hoveredDotIndex={hoveredDotIndex}
                activeDotKeys={activeDotKeys}
                presentDotKeys={presentDotKeys}
                onDotClick={onDotClick}
                onDotHover={onDotHover}
            />
            <LyricsSection
                songLyrics={activeSongLyrics}
                activeTime={activeTime}
                activeAnnotationIndex={activeAnnotationIndex}
                activeDotKeys={activeDotKeys}
                hoveredLineIndex={hoveredLineIndex}
                onTimeClick={onTimeClick}
                onAnnotationClick={onAnnotationClick}
                onLineHover={onLineHover}
            />
        </div>
    </div>
)

export default Song
