import React from 'react'
import LyricsStanza from './lyrics-stanza'
import { BOTTOM_ONLY_SIDE_STANZA } from 'helpers/constants'

/*************
 * CONTAINER *
 *************/

const LyricsUnit = (props) => {

    const { stanzaArray } = props,

        // Determine whether there are side stanzas.
        lastVerseObject = stanzaArray[stanzaArray.length - 1],
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
            lastSideStanza={lastSideStanza}
            nextLastSideStanza={nextLastSideStanza}
            bottomOnlySideStanza={bottomOnlySideStanza}
        />
    )
}

// TODO: Create an about music link.

/****************
 * PRESENTATION *
 ****************/

const LyricsUnitView = ({

    // From props.
    stanzaArray,
    onAnnotationClick,

    // From controller.
    lastSideStanza,
    nextLastSideStanza,
    bottomOnlySideStanza

}) => (
    <div className="lyrics-unit">
        {/* If there is a side stanza, wrap main stanza for proper height. */}
        {lastSideStanza ?
            <div className="main-stanza">
                <LyricsStanza
                stanzaArray={stanzaArray}
                onAnnotationClick={onAnnotationClick}
                />
            </div> :
            <LyricsStanza
            stanzaArray={stanzaArray}
            onAnnotationClick={onAnnotationClick}
            />
        }
        {/* Include side stanzas, if there are any. */}
        {lastSideStanza ?
            <div className={`side-stanza${bottomOnlySideStanza ? ' bottom-only' : ''}`}>
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
