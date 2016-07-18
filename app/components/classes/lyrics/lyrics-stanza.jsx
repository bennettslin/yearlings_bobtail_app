import React from 'react';
import LyricsVerse from './lyrics-verse.jsx';

/*************
 * CONTAINER *
 *************/

const LyricsStanza = (props) => (
    <LyricsStanzaView {...props} />
);

/****************
 * PRESENTATION *
 ****************/

const LyricsStanzaView = ({

    // From props.
    stanzaArray,
    stanzaIndex,
    onAnnotationClick

}) => (

    <div className="stanza">
        {stanzaArray.map((verseObject, verseIndex) => {
            return (
                <LyricsVerse
                    key={verseIndex}
                    verseObject={verseObject}
                    verseIndex={verseIndex}
                    onAnnotationClick={onAnnotationClick}
                />
            );
        })}
    </div>

);

export default LyricsStanza;