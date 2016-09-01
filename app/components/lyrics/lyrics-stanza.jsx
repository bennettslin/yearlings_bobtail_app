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
    activeDotKeys,
    onAnnotationClick

}) => (

    <div className="stanza">
        {stanzaArray.map((verseObject, verseIndex) => (
            !verseObject.stanzaIndex && !verseObject.unitIndex ?
                <LyricsVerse
                    key={verseIndex}
                    verseObject={verseObject}
                    activeDotKeys={activeDotKeys}
                    onAnnotationClick={onAnnotationClick}
                /> : null
            )
        )}
    </div>
)

export default LyricsStanza
