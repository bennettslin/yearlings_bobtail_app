import React from 'react'
import AnnotationCard from '../annotation/annotation-card'
import LyricsVerse from '../lyrics/lyrics-verse'
import { getPortalFromIndex, getVerse } from 'helpers/album-view-helper'

/*************
 * CONTAINER *
 *************/

const PortalSection = ({

    onSongFromPortalClick,

...other }) => {

    const { songIndex,
            annotationIndex,
            verseIndex,
            songTitle,
            annotationTitle } = getPortalFromIndex(other),

        verse = getVerse({
            selectedSongIndex: songIndex,
            songs: other.songs
        }, verseIndex),

        onClick = e => onSongFromPortalClick(e, songIndex, annotationIndex)


    console.error('verse', verse);

    return (
        <PortalSectionView {...other}
            songTitle={songTitle}
            annotationTitle={annotationTitle}
            verse={verse}
            onClick={onClick}
        />
    )
}

/****************
 * PRESENTATION *
 ****************/

const PortalSectionView = ({

    // From props.
    inPopup,

    // From controller.
    songTitle,
    annotationTitle,

    verse,
    onClick

}) => (
    <div
        className={`section portal-section${inPopup ? ' in-popup' : ''}`}
    >
        <h2>portal</h2>
        <a
            className="enabled"
            onClick={onClick}
        >
            {songTitle}, {annotationTitle}
        </a>
        {/* <AnnotationCard /> */}
        <LyricsVerse
            inPortal={true}
            verseObject={verse}
        />
    </div>
)

export default PortalSection
