import React from 'react'
import { getPortalFromIndex } from 'helpers/album-view-helper'

/*************
 * CONTAINER *
 *************/

const PortalSection = ({

    onSongFromPortalClick,

...other }) => {

    const { songIndex,
            annotationIndex,
            songTitle,
            annotationTitle } = getPortalFromIndex(other),

        onClick = e => onSongFromPortalClick(e, songIndex, annotationIndex)

    return (
        <PortalSectionView
            songTitle={songTitle}
            annotationTitle={annotationTitle}
            onClick={onClick}
        />
    )
}

/****************
 * PRESENTATION *
 ****************/

const PortalSectionView = ({

    // From props.

    // From controller.
    songTitle,
    annotationTitle,
    onClick

}) => (
    <div
        className="section portal-section"
    >
        <h2>portal</h2>
        <a
            className="enabled"
            onClick={onClick}
        >
            {songTitle}, {annotationTitle}
        </a>
    </div>
)

export default PortalSection
