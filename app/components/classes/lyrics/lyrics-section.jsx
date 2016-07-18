import React from 'react';
import LyricsStanza from './lyrics-stanza.jsx';

/*************
 * CONTAINER *
 *************/

const LyricsSection = (props) => (
    <LyricsSectionView {...props} />
);

/****************
 * PRESENTATION *
 ****************/

const LyricsSectionView = ({

    // From props.
    selectedSongLyrics,
    onAnnotationClick

}) => (

    <div className="section lyrics-section">
        <h2>lyrics</h2>
        <div className="lyrics-block">
            {selectedSongLyrics.map((stanzaArray, stanzaIndex) => {
                return (
                    <LyricsStanza
                        key={stanzaIndex}
                        stanzaArray={stanzaArray}
                        stanzaIndex={stanzaIndex}
                        onAnnotationClick={onAnnotationClick}
                    />
                );
            })}
        </div>
    </div>

);

export default LyricsSection;