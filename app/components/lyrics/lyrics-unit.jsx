import React from 'react'
import DotStanza from './dot-stanza'
import LyricsStanza from './lyrics-stanza'
import { BOTTOM_ONLY_SIDE_STANZA } from 'helpers/constants'

/*************
 * CONTAINER *
 *************/

const LyricsUnit = (props) => {

    const { stanzaArray } = props,


        /**
         * Treat the first object as the unit index. If it is not, all other
         * steps will fail gracefully.
         */
        unitIndexObject = stanzaArray[0],

        // Determine whether lyric unit has a custom layout.
        customLayout = unitIndexObject.customLayout,

        // Determine whether there are dot stanzas.
        dotStanzaObject = unitIndexObject.dotStanza,
        isDotOnlyUnit = dotStanzaObject && stanzaArray.length === 1,

        // Determine whether there are side stanzas, which are always on right.
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

    console.error('unitIndexObject.unitIndex', unitIndexObject.unitIndex);

    return (
        <LyricsUnitView {...props}
            customLayout={customLayout}
            dotStanzaObject={dotStanzaObject}
            isDotOnlyUnit={isDotOnlyUnit}
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
    isTitleUnit,
    stanzaArray,
    activeDotKeys,
    onAnnotationClick,

    // From controller.
    customLayout,
    dotStanzaObject,
    isDotOnlyUnit,
    lastSideStanza,
    nextLastSideStanza,
    bottomOnlySideStanza

}) => (

    <div className={`lyrics-unit${isTitleUnit ? ' title-unit' : ''}${customLayout ? ` custom ${customLayout}` : ''}`}>
        {dotStanzaObject ?
            <div className={`stanza-block dot ${isDotOnlyUnit ? 'only' : 'shared'}`}>
                <DotStanza
                    activeDotKeys={activeDotKeys}
                    dotStanzaObject={dotStanzaObject}
                    onAnnotationClick={onAnnotationClick}
                />
            </div> : null
        }
        {!isDotOnlyUnit ?
            <div className={`stanza-block main`}>
                <LyricsStanza
                    activeDotKeys={activeDotKeys}
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
                        activeDotKeys={activeDotKeys}
                        stanzaArray={nextLastSideStanza}
                        onAnnotationClick={onAnnotationClick}
                    /> : null
                }
                {lastSideStanza ?
                    <LyricsStanza
                        activeDotKeys={activeDotKeys}
                        stanzaArray={lastSideStanza}
                        onAnnotationClick={onAnnotationClick}
                    /> : null
                }
            </div> : null
        }
    </div>
)

export default LyricsUnit
