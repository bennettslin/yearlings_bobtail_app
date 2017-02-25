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
    stanzaType,

...other }) => (

    <div
        className={`
            stanza
            ${stanzaIndex ? `stanza-index-${stanzaIndex}` : ''}
            ${stanzaType ? stanzaType : ''}
        `}
    >
        {stanzaArray.map((verseObject, verseIndex) => {
            return !verseObject.stanzaMap && !verseObject.unitMap &&
                <LyricsVerse {...other}
                    key={verseIndex}
                    stanzaIndex={stanzaIndex}
                    verseObject={verseObject}
                />
            }
        )}
    </div>
)

export default LyricsStanza
