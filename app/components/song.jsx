import React, { Component } from 'react';
import AnnotationPopup from './annotation/annotation-popup.jsx';
import WikiPopup from './wiki/wiki-popup.jsx';
import DotsSection from './dots/dots-section.jsx';
import LyricsSection from './lyrics/lyrics-section.jsx';
import AlbumHelper from '../helpers/album-view-helper.js';

/*************
 * CONTAINER *
 *************/

const Song = (props) => {

    const { activeSong,
            activeAnnotationIndex } = props,

        annotation = AlbumHelper.getAnnotation(activeAnnotationIndex, activeSong);

    return (
        <SongView {...props}
            annotation={annotation}
            activeSongLyrics={activeSong.lyrics}
        />
    );
};

/****************
 * PRESENTATION *
 ****************/

const SongView = ({

    // From props.
    songs,

    activeWikiUrl,
    activeSongDotKeys,

    onDotClick,
    onPortalClick,
    onWikiUrlClick,
    onAnnotationClick,

    // From controller.
    annotation,
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
);

export default Song;
