import React from 'react'
import DotStanza from './dot-stanza'
import LyricsStanza from './lyrics-stanza'

/*************
 * CONTAINER *
 *************/

const LyricsUnit = (props) => {

    const { stanzaArray } = props,

        { unitClass,
          sectionClass,
          subsequentClass,
          dotStanza,
          subStanza,
          topSideStanza,
          bottomSideStanza } = stanzaArray[stanzaArray.length - 1],

        isDotOnly = dotStanza && stanzaArray.length === 1,
        isBottomOnly = !topSideStanza && bottomSideStanza,
        topSideSubStanza = topSideStanza ? topSideStanza[topSideStanza.length - 1].subStanza : null

    return (
        <LyricsUnitView {...props}
            unitClass={unitClass}
            sectionClass={sectionClass}
            subsequentClass={subsequentClass}
            dotStanza={dotStanza}
            isDotOnly={isDotOnly}
            subStanza={subStanza}
            topSideStanza={topSideStanza}
            bottomSideStanza={bottomSideStanza}
            isBottomOnly={isBottomOnly}
            topSideSubStanza={topSideSubStanza}
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
    activeAnnotationIndex,
    activeDotKeys,
    onAnnotationClick,
    onTimeClick,

    // From controller.
    unitClass,
    sectionClass,
    subsequentClass,
    dotStanza,
    isDotOnly,
    subStanza,
    topSideStanza,
    bottomSideStanza,
    isBottomOnly,
    topSideSubStanza,

}) => {
    // TODO: Can this be refactored to not use this getter method?
    const getStanza = ({ stanzaArray, isMain, inSubBlock }) => {
        return stanzaArray ? (
            inSubBlock ?
                <div className="sub-block custom right">
                    {getStanza({ stanzaArray, inSubBlock: false })}
                </div> :
                <LyricsStanza
                    sectionClass={isMain ? sectionClass : ''}
                    activeAnnotationIndex={activeAnnotationIndex}
                    activeDotKeys={activeDotKeys}
                    stanzaArray={stanzaArray}
                    onAnnotationClick={onAnnotationClick}
                    onTimeClick={onTimeClick}
                />
        ) : null
    }

    return (
        <div className={`lyrics-unit${isTitleUnit ? ' title-unit' : ''}${unitClass ? ` custom ${unitClass}` : ''}`}>
            {dotStanza ?
                <div className={`stanza-block dot ${isDotOnly ? 'only' : 'shared'}`}>
                    <DotStanza
                        activeAnnotationIndex={activeAnnotationIndex}
                        activeDotKeys={activeDotKeys}
                        dotStanzaObject={dotStanza}
                        onAnnotationClick={onAnnotationClick}
                    />
                </div> : null
            }
            {!isDotOnly ?
                <div className={`stanza-block main${subsequentClass ? ' subsequent' : ''}`}>
                    {getStanza({ stanzaArray, isMain: true })}
                    {getStanza({ stanzaArray: subStanza, inSubBlock: true })}
                </div> : null
            }
            {topSideStanza || bottomSideStanza ?
                <div className={`stanza-block side${isBottomOnly ? ' bottom-only' : ''}`}>
                    {getStanza({ stanzaArray: topSideStanza })}
                    {getStanza({ stanzaArray: topSideSubStanza, inSubBlock: true })}
                    {getStanza({ stanzaArray: bottomSideStanza })}
                </div> : null
            }
        </div>
    )
}

export default LyricsUnit
