import React from 'react'
import DotsBlock from '../dots/dots-block'
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
    isDot,
    isDotOnlyStanza,
    onAnnotationClick

}) => (

    <div className={`stanza${isDot ? ' anchor' : ''}${isDotOnlyStanza ? ' dot-only' : ''}`}>
        {/* Ignore side stanzas, which are arrays. */}
        {stanzaArray
            .filter((verseObject) => !(verseObject instanceof Array))
            .map((verseObject, verseIndex) => {
                return isDot ? (
                    <DotsBlock
                        dotKeys={{ pun: true }}
                    />
                ) : (
                    <LyricsVerse
                        key={verseIndex}
                        verseObject={verseObject}
                        onAnnotationClick={onAnnotationClick}
                    />
                )
        })}
    </div>
)

export default LyricsStanza
