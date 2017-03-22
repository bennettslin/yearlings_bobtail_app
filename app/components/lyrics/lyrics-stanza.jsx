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
    const indexClassName = !isNaN(stanzaIndex) && `stanza-index-${stanzaIndex}`,
        typeClassName = stanzaType && `stanza-type-${stanzaType}`

    return (

        <div className="stanza-container">
            {showStanzaTypeAndIndex &&
                <div className={classnames(
                    'stanza-tab',
                    typeClassName
                )}>
                    {stanzaType}{stanzaIndex !== -1 ? ` ${stanzaIndex}` : ''}
                </div>
            }

            <div className={classnames(
                'stanza',
                indexClassName,
                typeClassName
            )}>
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
