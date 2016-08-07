import React from 'react'
import LyricsVerse from './lyrics-verse'

/*************
 * CONTAINER *
 *************/

const LyricsStanza = (props) => (
    <LyricsStanzaView {...props} />
)

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
        {/* Ignore side stanzas, which are arrays. */}
        {stanzaArray
            .filter((verseObject) => !(verseObject instanceof Array))
            .map((verseObject, verseIndex) => {
            return (
                <LyricsVerse
                    key={verseIndex}
                    verseObject={verseObject}
                    verseIndex={verseIndex}
                    onAnnotationClick={onAnnotationClick}
                />
            )
        })}
    </div>
)

export default LyricsStanza
