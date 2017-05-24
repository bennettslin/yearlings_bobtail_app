import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import DotStanza from './dot-stanza'
import LyricsStanza from './lyrics-stanza'
import { TITLE, LEFT, RIGHT } from '../../helpers/constants'

/*************
 * CONTAINER *
 *************/

const LyricsUnit = (props) => {

    const { stanzaArray,
            isTitleUnit,
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

        isBottomOnly = !topSideStanza && !!bottomSideStanza,
        topSideSubStanza = topSideStanza ? topSideStanza[topSideStanza.length - 1].subStanza : null,
        isDotOnly = dotStanza && stanzaArray.length === 1,
        hasSide = topSideStanza || bottomSideStanza,
        truncateMain = hasSide && hiddenLyricColumnKey === LEFT,
        showMain = !isDotOnly && (!hasSide || hiddenLyricColumnKey !== LEFT || truncateMain),

        showSide = hasSide && hiddenLyricColumnKey !== RIGHT

    return (
        <LyricsUnitView {...props}
            unitClassName={unitClassName}
            stanzaIndex={stanzaIndex}
            stanzaType={isTitleUnit ? TITLE : stanzaType}
            substanzaType={substanzaType}
            sideStanzaType={sideStanzaType}
            sideSubstanzaType={sideSubstanzaType}
            subsequent={subsequent}
            dotStanza={dotStanza}
            subStanza={subStanza}
            topSideStanza={topSideStanza}
            bottomSideStanza={bottomSideStanza}
            isBottomOnly={isBottomOnly}
            showMain={showMain}
            truncateMain={truncateMain}
            showSide={showSide}
            topSideSubStanza={topSideSubStanza}
        />
    )
}

LyricsUnit.propTypes = {
    stanzaArray: PropTypes.array.isRequired,
    isTitleUnit: PropTypes.bool.isRequired,
    hiddenLyricColumnKey: PropTypes.string
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
    dotStanza,
    subStanza,
    topSideStanza,
    bottomSideStanza,
    topSideSubStanza,
    isBottomOnly,
    showMain,
    truncateMain,
    showSide,

...other }) => {

    // TODO: Don't bother passing hidden lyric column key to verse if it's not necessary.
    const getStanza = ({ stanzaArray, inMain, truncateMain, addSub, isSub }) => {
            if (stanzaArray) {
                if (addSub) {
                    return (
                        <div className="sub-block custom-sub-block right">
                            {getStanza({ stanzaArray, inMain, truncateMain, isSub: true })}
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
                            truncateMain={truncateMain}
                            stanzaIndex={shownStanzaIndex}
                            stanzaType={itsStanzaType}
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
                  subsequent
                }
            )}
        >
            {showMain &&
                <div className="stanza-block">
                    {getStanza({ stanzaArray, inMain: true, truncateMain })}
                    {getStanza({ stanzaArray: subStanza, inMain: true, truncateMain, addSub: true })}
                </div>
            }
            {showSide &&
                <div className={classnames(
                    'stanza-block',
                    'side',
                    { 'bottom-only': isBottomOnly }
                )}>
                    {getStanza({ stanzaArray: topSideStanza })}
                    {getStanza({ stanzaArray: bottomSideStanza })}
                    {getStanza({ stanzaArray: topSideSubStanza, addSub: true })}
                </div>
            }
            {dotStanza &&
                <DotStanza {...other}
                    dotStanzaObject={dotStanza}
                />
            }
        </div>
    )
}

LyricsUnitView.propTypes = {
    stanzaArray: PropTypes.array.isRequired,
    stanzaIndex: PropTypes.number,
    isTitleUnit: PropTypes.bool.isRequired,
    showMain: PropTypes.bool.isRequired,
    showSide: PropTypes.bool,
    isBottomOnly: PropTypes.bool,
    truncateMain: PropTypes.bool,
    subsequent: PropTypes.bool,
    unitClassName: PropTypes.string,
    stanzaType: PropTypes.string,
    substanzaType: PropTypes.string,
    sideStanzaType: PropTypes.string,
    sideSubstanzaType: PropTypes.string,
    subStanza: PropTypes.array,
    topSideStanza: PropTypes.array,
    bottomSideStanza: PropTypes.array,
    topSideSubStanza: PropTypes.array,
    dotStanza: PropTypes.object
}

export default LyricsUnit
