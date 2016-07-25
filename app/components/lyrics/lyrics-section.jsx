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
    songLyrics,
    onAnnotationClick

}) => (

    <div className="section lyrics-section">
        <h2>lyrics</h2>
        <div className="lyrics-block">
            {songLyrics.map((stanzaArray, stanzaIndex) => {
                return (
                    <div
                        key={stanzaIndex}
                        className="lyrics-card"
                    >
                        <LyricsStanza
                            stanzaArray={stanzaArray}
                            stanzaIndex={stanzaIndex}
                            onAnnotationClick={onAnnotationClick}
                        />
                    </div>
                );
            })}
        </div>
    </div>
);

export default LyricsSection;
