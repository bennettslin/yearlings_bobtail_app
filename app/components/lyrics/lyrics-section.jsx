import React from 'react'
import LyricsUnit from './lyrics-unit'

/*************
 * CONTAINER *
 *************/

const LyricsSection = (props) => (
    <LyricsSectionView {...props} />
)

/****************
 * PRESENTATION *
 ****************/

const LyricsSectionView = ({

    // From props.
    songLyrics,
    onAnnotationClick

}) => (

    <div className="section lyrics-section">
        <h2>lyrics</h2>
        <div className="lyrics-block">
            {songLyrics.map((stanzaArray, stanzaIndex) => (
                    <LyricsUnit
                        key={stanzaIndex}
                        stanzaArray={stanzaArray}
                        onAnnotationClick={onAnnotationClick}
                    />
                )
            )}
        </div>
    </div>
)

export default LyricsSection
