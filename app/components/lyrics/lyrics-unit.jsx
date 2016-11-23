import React from 'react'
import DotStanza from './dot-stanza'
import LyricsStanza from './lyrics-stanza'
import { TITLE, LEFT, RIGHT, LYRIC_COLUMN_KEYS } from 'helpers/constants'
import { intersects } from 'helpers/dot-helper'

/*************
 * CONTAINER *
 *************/

const LyricsUnit = ({

    stanzaArray,
    isTitleUnit,
    selectedLyricColumnIndex,
    selectedDotKeys,
    showSingleLyricColumn,

...other }) => {

    const { unitClass,
            sectionClass,
            subsectionClass,
            sideSectionClass,
            sideSubsectionClass,
            subsequent,
            dotStanza,
            subStanza,
            topSideStanza,
            bottomSideStanza } = stanzaArray[stanzaArray.length - 1],

        hiddenLyricColumnKey = showSingleLyricColumn && selectedLyricColumnIndex >= 0 ? LYRIC_COLUMN_KEYS[(selectedLyricColumnIndex + 1) % 2] : null,
        isBottomOnly = !topSideStanza && bottomSideStanza,
        topSideSubStanza = topSideStanza ? topSideStanza[topSideStanza.length - 1].subStanza : null,
        isDotOnly = dotStanza && stanzaArray.length === 1,
        hasSide = topSideStanza || bottomSideStanza,
        showMain = !isDotOnly && !hasSide || hiddenLyricColumnKey !== LEFT,
        showSide = hasSide && hiddenLyricColumnKey !== RIGHT,
        shouldShowDotStanza = dotStanza ? intersects(dotStanza.dotKeys, selectedDotKeys) : false

    return (
        <LyricsUnitView {...other}
            stanzaArray={stanzaArray}
            isTitleUnit={isTitleUnit}
            unitClass={unitClass}
            sectionClass={isTitleUnit ? TITLE : sectionClass}
            subsectionClass={subsectionClass}
            sideSectionClass={sideSectionClass}
            sideSubsectionClass={sideSubsectionClass}
            subsequent={subsequent}
            shouldShowDotStanza={shouldShowDotStanza}
            selectedDotKeys={selectedDotKeys}
            dotStanza={dotStanza}
            subStanza={subStanza}
            topSideStanza={topSideStanza}
            bottomSideStanza={bottomSideStanza}
            isBottomOnly={isBottomOnly}
            isDotOnly={isDotOnly}
            showMain={showMain}
            showSide={showSide}
            topSideSubStanza={topSideSubStanza}
            showSingleLyricColumn={showSingleLyricColumn}
            hiddenLyricColumnKey={hiddenLyricColumnKey}
            selectedLyricColumnIndex={selectedLyricColumnIndex}
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

    // From controller.
    unitClass,
    sectionClass,
    subsectionClass,
    subsequent,
    sideSectionClass,
    sideSubsectionClass,
    shouldShowDotStanza,
    selectedDotKeys,
    dotStanza,
    subStanza,
    topSideStanza,
    bottomSideStanza,
    topSideSubStanza,
    isBottomOnly,
    isDotOnly,
    showMain,
    showSide,

...other }) => {

    // TODO: Don't bother passing hidden lyric column key to verse if it's not necessary.
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
                    (isSub ? sideSubsectionClass :
                        sideSectionClass)
                return (
                    <LyricsStanza {...other}
                        stanzaArray={stanzaArray}
                        sectionClass={className}
                        selectedDotKeys={selectedDotKeys}
                    />
                )
            }
        } else {
            return null
        }
    }

    return (
        <div className={`lyrics-unit${isTitleUnit ? ' title-unit' : ''}${unitClass ? ` custom ${unitClass}` : ''}`}>
            {showMain ?
                <div className={`stanza-block ${subsequent ? ' subsequent' : ''}`}>
                    {getStanza({ stanzaArray, inMain: true })}
                    {getStanza({ stanzaArray: subStanza, inMain: true, addSub: true })}
                </div> : null
            }
            {showSide ?
                <div className={`stanza-block side${isBottomOnly ? ' bottom-only' : ''}`}>
                    {getStanza({ stanzaArray: topSideStanza })}
                    {getStanza({ stanzaArray: bottomSideStanza })}
                    {getStanza({ stanzaArray: topSideSubStanza, addSub: true })}
                </div> : null
            }
            {shouldShowDotStanza ?
                <div className={`stanza-block dot ${isDotOnly ? 'only' : 'shared'}`}>
                    <DotStanza {...other}
                        dotStanzaObject={dotStanza}
                        selectedDotKeys={selectedDotKeys}
                    />
                </div> : null
            }
        </div>
    )
}

export default LyricsUnit
