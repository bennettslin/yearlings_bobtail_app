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
            activeSongDotKeys={activeSong.dotKeys}
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

    activeWikiUrl,

    onDotClick,
    onPortalClick,
    onWikiUrlClick,
    onAnnotationClick,

    // From controller.
    annotation,
    activeSongDotKeys,
    activeSongLyrics

}) => (

    <div className="column song-column">
        <div className="field song-field">
            <AnnotationPopup
                songs={songs}
                annotation={annotation}
                onPortalClick={onPortalClick}
                onWikiUrlClick={onWikiUrlClick}
                onCloseClick={onAnnotationClick}
            />
            <WikiPopup
                activeWikiUrl={activeWikiUrl}
                onCloseClick={onWikiUrlClick}
            />
            <DotsSection
                dotKeys={activeSongDotKeys}
                onDotClick={onDotClick}
            />
            <LyricsSection
                songLyrics={activeSongLyrics}
                onAnnotationClick={onAnnotationClick}
            />
        </div>
    </div>
)

export default Song
