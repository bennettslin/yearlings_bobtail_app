import React from 'react'
import classnames from 'classnames'
import DotStanza from './dot-stanza'
import LyricsStanza from './lyrics-stanza'
import { TITLE, LEFT, RIGHT } from 'helpers/constants'
import { intersects } from 'helpers/dot-helper'

/*************
 * CONTAINER *
 *************/

const LyricsUnit = (props) => {

    const { stanzaArray,
            isTitleUnit,
            selectedDotKeys,
            hiddenLyricColumnKey } = props,

        { unitClassName,
          stanzaIndex,
          stanzaType,
          substanzaType,
          sideStanzaType,
          sideSubstanzaType,
          subsequent,
          dotStanza,
          subStanza,
          topSideStanza,
          bottomSideStanza } = stanzaArray[stanzaArray.length - 1],

        isBottomOnly = !topSideStanza && bottomSideStanza,
        topSideSubStanza = topSideStanza ? topSideStanza[topSideStanza.length - 1].subStanza : null,
        isDotOnly = dotStanza && stanzaArray.length === 1,
        hasSide = topSideStanza || bottomSideStanza,
        showMain = !isDotOnly && (!hasSide || hiddenLyricColumnKey !== LEFT),
        showSide = hasSide && hiddenLyricColumnKey !== RIGHT,
        shouldShowDotStanza = dotStanza ? intersects(dotStanza.dotKeys, selectedDotKeys) : false

    return (
        <LyricsUnitView {...props}
            unitClassName={unitClassName}
            stanzaIndex={stanzaIndex}
            stanzaType={isTitleUnit ? TITLE : stanzaType}
            substanzaType={substanzaType}
            sideStanzaType={sideStanzaType}
            sideSubstanzaType={sideSubstanzaType}
            subsequent={subsequent}
            shouldShowDotStanza={shouldShowDotStanza}
            dotStanza={dotStanza}
            subStanza={subStanza}
            topSideStanza={topSideStanza}
            bottomSideStanza={bottomSideStanza}
            isBottomOnly={isBottomOnly}
            isDotOnly={isDotOnly}
            showMain={showMain}
            showSide={showSide}
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

    // From controller.
    unitClassName,
    stanzaIndex,
    stanzaType,
    substanzaType,
    subsequent,
    sideStanzaType,
    sideSubstanzaType,
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
                        <div className="sub-block custom-sub-block right">
                            {getStanza({ stanzaArray, inMain, isSub: true })}
                        </div>
                    )
                } else {
                    const shownStanzaIndex = inMain && !isSub && stanzaIndex,
                        showStanzaTypeAndIndex = !subsequent && !!shownStanzaIndex

                    let itsStanzaType

                    if (inMain) {
                        itsStanzaType = isSub ? substanzaType : stanzaType
                    } else {
                        itsStanzaType = isSub ? sideSubstanzaType : sideStanzaType
                    }

                    return (
                        <LyricsStanza {...other}
                            stanzaArray={stanzaArray}
                            showStanzaTypeAndIndex={showStanzaTypeAndIndex}
                            inMain={inMain}
                            stanzaIndex={shownStanzaIndex}
                            stanzaType={itsStanzaType}
                            selectedDotKeys={selectedDotKeys}
                        />
                    )
                }
            } else {
                return null
            }
        }

    return (
        <div
            className={classnames(
                'lyrics-unit',
                unitClassName,
                { 'title-unit': isTitleUnit,
                  'custom-sub-block': unitClassName,
                  'subsequent': subsequent
                }
            )}
        >
            {showMain &&
                <div className="stanza-block">
                    {getStanza({ stanzaArray, inMain: true })}
                    {getStanza({ stanzaArray: subStanza, inMain: true, addSub: true })}
                </div>
            }
            {showSide &&
                <div className={`stanza-block side${isBottomOnly ? ' bottom-only' : ''}`}>
                    {getStanza({ stanzaArray: topSideStanza })}
                    {getStanza({ stanzaArray: bottomSideStanza })}
                    {getStanza({ stanzaArray: topSideSubStanza, addSub: true })}
                </div>
            }
            {/* At present, dot-only and dot-shared classes aren't used. */}
            {shouldShowDotStanza &&
                <div className={`stanza-block dot-${isDotOnly ? 'only' : 'shared'}`}>
                    <DotStanza {...other}
                        dotStanzaObject={dotStanza}
                        selectedDotKeys={selectedDotKeys}
                    />
                </div>
            }
        </div>
    )
}

export default LyricsUnit
