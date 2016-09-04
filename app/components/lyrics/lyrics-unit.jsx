import React from 'react'
import DotStanza from './dot-stanza'
import LyricsStanza from './lyrics-stanza'
import { TITLE } from 'helpers/constants'

/*************
 * CONTAINER *
 *************/

const LyricsUnit = (props) => {

    const { stanzaArray,
            isTitleUnit } = props,

        { unitClass,
          sectionClass,
          subsectionClass,
          backgroundClass,
          subBackgroundClass,
          subsequent,
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
            sectionClass={isTitleUnit ? TITLE : sectionClass}
            subsectionClass={subsectionClass}
            backgroundClass={backgroundClass}
            subBackgroundClass={subBackgroundClass}
            subsequent={subsequent}
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
    selectedAnnotationIndex,
    selectedDotKeys,
    selectedTime,
    hoveredLineIndex,
    onAnnotationClick,
    onTimeClick,
    onLineHover,

    // From controller.
    unitClass,
    sectionClass,
    subsectionClass,
    subsequent,
    backgroundClass,
    subBackgroundClass,
    dotStanza,
    isDotOnly,
    subStanza,
    topSideStanza,
    bottomSideStanza,
    isBottomOnly,
    topSideSubStanza,

}) => {
    const getStanza = ({ stanzaArray, inMain, addSub, isSub }) => {
        if (stanzaArray) {
            if (addSub) {
                return (
                    <div className="sub-block custom right">
                    {getStanza({ stanzaArray, inMain, isSub: true })}
                    </div>
                )
            } else {
                const className = inMain ?
                    (isSub ? subsectionClass :
                        sectionClass) :
                    (isSub ? subBackgroundClass :
                        backgroundClass)
                return (
                    <LyricsStanza
                        stanzaArray={stanzaArray}
                        sectionClass={className}
                        selectedAnnotationIndex={selectedAnnotationIndex}
                        selectedDotKeys={selectedDotKeys}
                        selectedTime={selectedTime}
                        hoveredLineIndex={hoveredLineIndex}
                        onAnnotationClick={onAnnotationClick}
                        onTimeClick={onTimeClick}
                        onLineHover={onLineHover}
                    />
                )
            }
        } else {
            return null
        }
    }

    return (
        <div className={`lyrics-unit${isTitleUnit ? ' title-unit' : ''}${unitClass ? ` custom ${unitClass}` : ''}`}>
            {!isDotOnly ?
                <div className={`stanza-block main${subsequent ? ' subsequent' : ''}`}>
                    {getStanza({ stanzaArray, inMain: true })}
                    {getStanza({ stanzaArray: subStanza, inMain: true, addSub: true })}
                </div> : null
            }
            {topSideStanza || bottomSideStanza ?
                <div className={`stanza-block side${isBottomOnly ? ' bottom-only' : ''}`}>
                    {getStanza({ stanzaArray: topSideStanza })}
                    {getStanza({ stanzaArray: bottomSideStanza })}
                    {getStanza({ stanzaArray: topSideSubStanza, addSub: true })}
                </div> : null
            }
            {dotStanza ?
                <div className={`stanza-block dot ${isDotOnly ? 'only' : 'shared'}`}>
                    <DotStanza
                        selectedAnnotationIndex={selectedAnnotationIndex}
                        selectedDotKeys={selectedDotKeys}
                        dotStanzaObject={dotStanza}
                        onAnnotationClick={onAnnotationClick}
                    />
                </div> : null
            }
        </div>
    )
}

export default LyricsUnit
