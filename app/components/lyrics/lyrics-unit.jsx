import React from 'react'
import DotStanza from './dot-stanza'
import LyricsStanza from './lyrics-stanza'

/*************
 * CONTAINER *
 *************/

const LyricsUnit = (props) => {

    const { stanzaArray } = props,

        { unitClass,
          dotStanza,
          subStanza,
          subStanzaClass,
          topSideStanza,
          bottomSideStanza } = stanzaArray[0],

        isDotOnly = dotStanza && stanzaArray.length === 1,
        isBottomOnly = !topSideStanza && bottomSideStanza,
        topSideSubStanza = topSideStanza ? topSideStanza[0].subStanza : null,
        topSideSubStanzaClass = topSideStanza ? topSideStanza[0].subStanzaClass : null

    return (
        <LyricsUnitView {...props}
            unitClass={unitClass}
            dotStanza={dotStanza}
            isDotOnly={isDotOnly}
            subStanza={subStanza}
            subStanzaClass={subStanzaClass}
            topSideStanza={topSideStanza}
            bottomSideStanza={bottomSideStanza}
            isBottomOnly={isBottomOnly}
            topSideSubStanza={topSideSubStanza}
            topSideSubStanzaClass={topSideSubStanzaClass}
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
    unitClass,
    dotStanza,
    isDotOnly,
    subStanza,
    subStanzaClass,
    topSideStanza,
    bottomSideStanza,
    isBottomOnly,
    topSideSubStanza,
    topSideSubStanzaClass

}) => {
    const getStanza = (stanzaArray, inSubBlock, subStanzaClass) => {
        return stanzaArray ? (
            inSubBlock ?
                <div className={`sub-block${subStanzaClass ? ` custom ${subStanzaClass}` : ''}`}>
                    {getStanza(stanzaArray, false)}
                </div> :
                <LyricsStanza
                    activeDotKeys={activeDotKeys}
                    stanzaArray={stanzaArray}
                    onAnnotationClick={onAnnotationClick}
                />
        ) : null
    }

    return (
        <div className={`lyrics-unit${isTitleUnit ? ' title-unit' : ''}${unitClass ? ` custom ${unitClass}` : ''}`}>
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
                <div className="stanza-block main">
                    {getStanza(stanzaArray)}
                    {getStanza(subStanza, true, subStanzaClass)}
                </div> : null
            }
            {topSideStanza || bottomSideStanza ?
                <div className={`stanza-block side${isBottomOnly ? ' bottom-only' : ''}`}>
                    {getStanza(topSideStanza)}
                    {getStanza(topSideSubStanza, true, topSideSubStanzaClass)}
                    {getStanza(bottomSideStanza)}
                </div> : null
            }
        </div>
    )
}

export default LyricsUnit
