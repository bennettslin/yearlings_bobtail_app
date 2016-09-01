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
        {/* Ignore side stanzas, which are arrays. */}
        {stanzaArray
            .filter((verseObject) => !(verseObject instanceof Array))
            .map((verseObject, verseIndex) => (
                    !verseObject.unitIndex ?
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
