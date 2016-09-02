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
    sectionClass,
    activeDotKeys,
    onAnnotationClick

}) => (

    <div className={`stanza${sectionClass ? ` ${sectionClass}` : ''}`}>
        {stanzaArray.map((verseObject, verseIndex) => (
            !verseObject.stanzaMap && !verseObject.unitMap ?
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
