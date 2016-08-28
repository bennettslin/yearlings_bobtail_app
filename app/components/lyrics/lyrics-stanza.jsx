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
    onAnnotationClick

}) => (

    <div className="stanza">
        {/* Ignore side stanzas, which are arrays. */}
        {stanzaArray
            .filter((verseObject) => !(verseObject instanceof Array))
            .map((verseObject, verseIndex) => (
                    <LyricsVerse
                        key={verseIndex}
                        verseObject={verseObject}
                        onAnnotationClick={onAnnotationClick}
                    />
                )
            )}
    </div>
)

export default LyricsStanza
