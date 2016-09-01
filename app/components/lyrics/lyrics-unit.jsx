import React from 'react'
import DotStanza from './dot-stanza'
import LyricsStanza from './lyrics-stanza'

/*************
 * CONTAINER *
 *************/

const LyricsUnit = (props) => {

    const { stanzaArray } = props,

        // Determine whether lyric unit has a custom layout.
        { customLayout,

          // Determine whether there are dot stanzas.
          dotStanza,

          // Determine whether there are side stanzas.
          topSideStanza,
          bottomSideStanza } = stanzaArray[0],

        isDotOnly = dotStanza && stanzaArray.length === 1,
        isBottomOnly = !topSideStanza && bottomSideStanza

    return (
        <LyricsUnitView {...props}
            customLayout={customLayout}
            dotStanza={dotStanza}
            isDotOnly={isDotOnly}
            topSideStanza={topSideStanza}
            bottomSideStanza={bottomSideStanza}
            isBottomOnly={isBottomOnly}
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
    dotStanza,
    isDotOnly,
    topSideStanza,
    bottomSideStanza,
    isBottomOnly

}) => (

    <div className={`lyrics-unit${isTitleUnit ? ' title-unit' : ''}${customLayout ? ` custom ${customLayout}` : ''}`}>
        {dotStanza ?
            <div className={`stanza-block dot ${isDotOnly ? 'only' : 'shared'}`}>
                <DotStanza
                    activeDotKeys={activeDotKeys}
                    dotStanzaObject={dotStanza}
                    onAnnotationClick={onAnnotationClick}
                />
            </div> : null
        }
        {!isDotOnly ?
            <div className={`stanza-block main`}>
                <LyricsStanza
                    activeDotKeys={activeDotKeys}
                    stanzaArray={stanzaArray}
                    onAnnotationClick={onAnnotationClick}
                />
            </div> : null
        }
        {/* Include side stanzas, if there are any. */}
        {topSideStanza || bottomSideStanza ?
            <div className={`stanza-block side${isBottomOnly ? ' bottom-only' : ''}`}>
                {topSideStanza ?
                    <LyricsStanza
                        activeDotKeys={activeDotKeys}
                        stanzaArray={topSideStanza}
                        onAnnotationClick={onAnnotationClick}
                    /> : null
                }
                {bottomSideStanza ?
                    <LyricsStanza
                        activeDotKeys={activeDotKeys}
                        stanzaArray={bottomSideStanza}
                        onAnnotationClick={onAnnotationClick}
                    /> : null
                }
            </div> : null
        }
    </div>
)

export default LyricsUnit
