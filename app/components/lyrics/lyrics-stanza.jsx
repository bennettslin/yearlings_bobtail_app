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

...other }) => (

    <div className={`stanza${sectionClass ? ` ${sectionClass}` : ''}`}>
        {stanzaArray.map((verseObject, verseIndex) => {
            return !verseObject.stanzaMap && !verseObject.unitMap &&
                <LyricsVerse {...other}
                    key={verseIndex}
                    verseObject={verseObject}
                />
            }
        )}
    </div>
)

export default LyricsStanza
