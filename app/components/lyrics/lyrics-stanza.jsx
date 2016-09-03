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
    activeAnnotationIndex,
    activeDotKeys,
    onAnnotationClick,
    onTimeClick

}) => (

    <div className={`stanza${sectionClass ? ` ${sectionClass}` : ''}`}>
        {stanzaArray.map((verseObject, verseIndex) => (
            !verseObject.stanzaMap && !verseObject.unitMap ?
                <LyricsVerse
                    key={verseIndex}
                    verseObject={verseObject}
                    activeAnnotationIndex={activeAnnotationIndex}
                    activeDotKeys={activeDotKeys}
                    onAnnotationClick={onAnnotationClick}
                    onTimeClick={onTimeClick}
                /> : null
            )
        )}
    </div>
)

export default LyricsStanza
