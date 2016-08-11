import React from 'react'
import LyricsStanza from './lyrics-stanza'
import { BOTTOM_ONLY_SIDE_STANZA } from 'helpers/constants'

/*************
 * CONTAINER *
 *************/

const LyricsUnit = (props) => {

    const { stanzaArray } = props,

        // Determine whether there are anchor stanzas.
        firstVerseObject = stanzaArray[0],
        dotStanza = firstVerseObject instanceof Array ?
            firstVerseObject : null,
        isDotOnlyStanza = dotStanza && stanzaArray.length === 1,

        // Determine whether there are side stanzas.
        lastVerseObject = stanzaArray.length > 1 ? stanzaArray[stanzaArray.length - 1] : null,
        lastSideStanza = lastVerseObject instanceof Array ?
            lastVerseObject : null,
        nextLastVerseObject = stanzaArray.length > 1 ?
            stanzaArray[stanzaArray.length - 2] : null,
        nextLastSideStanza = lastSideStanza &&
            nextLastVerseObject &&
            nextLastVerseObject instanceof Array ?
            nextLastVerseObject : null,
        bottomOnlySideStanza = lastSideStanza ?
            lastSideStanza[0].side === BOTTOM_ONLY_SIDE_STANZA : false

    return (
        <LyricsUnitView {...props}
            dotStanza={dotStanza}
            isDotOnlyStanza={isDotOnlyStanza}
            lastSideStanza={lastSideStanza}
            nextLastSideStanza={nextLastSideStanza}
            bottomOnlySideStanza={bottomOnlySideStanza}
        />
    )
}

/****************
 * PRESENTATION *
 ****************/

const LyricsUnitView = ({

    // From props.
    stanzaArray,
    onAnnotationClick,

    // From controller.
    dotStanza,
    isDotOnlyStanza,
    lastSideStanza,
    nextLastSideStanza,
    bottomOnlySideStanza

}) => (

    <div className="lyrics-unit">
        {/* Make dot stanza component, remove dot info from lyrics stanza, and figure out good class names. */}
        {dotStanza ?
            <div className="stanza-block dot">
                <LyricsStanza
                    isDot={true}
                    isDotOnlyStanza={isDotOnlyStanza}
                    stanzaArray={dotStanza}
                    onAnnotationClick={onAnnotationClick}
                />
            </div> : null
        }
        {!isDotOnlyStanza ?
            <div className="stanza-block main">
                <LyricsStanza
                    stanzaArray={stanzaArray}
                    onAnnotationClick={onAnnotationClick}
                />
            </div> : null
        }
        {/* Include side stanzas, if there are any. */}
        {lastSideStanza ?
            <div className={`stanza-block side${bottomOnlySideStanza ? ' bottom-only' : ''}`}>
                {nextLastSideStanza ?
                    <LyricsStanza
                        stanzaArray={nextLastSideStanza}
                        onAnnotationClick={onAnnotationClick}
                    /> : null
                }
                {lastSideStanza ?
                    <LyricsStanza
                        stanzaArray={lastSideStanza}
                        onAnnotationClick={onAnnotationClick}
                    /> : null
                }
            </div> : null
        }
    </div>
)

export default LyricsUnit
