import React from 'react'
import classnames from 'classnames'
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
    showStanzaTypeAndIndex,
    stanzaArray,
    stanzaIndex,
    stanzaType,

...other }) => {
    const indexClassName = !isNaN(stanzaIndex) ? `stanza-index-${stanzaIndex}` : '',
        typeClassName = stanzaType ? `stanza-type-${stanzaType}` : '',

        stanzaClassNames = classnames(
            'stanza',
            indexClassName,
            typeClassName
        ),

        stanzaTabClassNames = classnames(
            'stanza-tab',
            typeClassName
        )

    return (

        <div className="stanza-container">
            {showStanzaTypeAndIndex &&
                <div className={stanzaTabClassNames}>
                    {stanzaType}{stanzaIndex !== -1 ? ` ${stanzaIndex}` : ''}
                </div>
            }

            <div className={stanzaClassNames}>
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
        </div>
    )
}

export default LyricsStanza
