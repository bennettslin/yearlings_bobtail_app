// Component to show individual box of verses.

import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import LyricVerse from './LyricVerse'

/*************
 * CONTAINER *
 *************/

const lyricStanzaCardDefaultProps = {
    inMain: false,
    subsequent: false,
    addSubStanza: false,
    isSub: false
},

lyricStanzaCardPropTypes = {
    // From parent.
    stanzaIndex: PropTypes.number,
    stanzaType: PropTypes.string,
    substanzaType: PropTypes.string,
    sideStanzaType: PropTypes.string,
    sideSubstanzaType: PropTypes.string,
    subsequent: PropTypes.bool.isRequired,

    stanzaArray: PropTypes.array,
    inMain: PropTypes.bool.isRequired,
    addSubStanza: PropTypes.bool.isRequired,
    isSub: PropTypes.bool.isRequired
},

LyricStanzaCard = ({

    // From props.
    stanzaIndex,
    stanzaType,
    substanzaType,
    sideStanzaType,
    sideSubstanzaType,
    subsequent,

    // From controller.
    stanzaArray,
    addSubStanza,

    // Passed recursively.
    isSub,

...other }) => {

    const { inMain } = other

    // TODO: When does custom-sub-block ever get called?
    if (stanzaArray) {
        if (addSubStanza) {
            return (
                <div className="sub-block offset__stanza__right">
                    <LyricStanzaCard {...other}
                        stanzaArray={stanzaArray}
                        isSub

                        // Not ideal to repeat like this, but oh well.
                        stanzaType={stanzaType}
                        substanzaType={substanzaType}
                        sideStanzaType={sideStanzaType}
                        sideSubstanzaType={sideSubstanzaType}
                    />
                </div>
            )
        } else {
            const shownStanzaIndex = inMain && !isSub ?
                    stanzaIndex : undefined,
                showStanzaTypeAndIndex = !subsequent && !!shownStanzaIndex

            let itsStanzaType

            if (inMain) {
                itsStanzaType = isSub ? substanzaType : stanzaType
            } else {
                itsStanzaType = isSub ? sideSubstanzaType : sideStanzaType
            }

            return (
                <LyricStanzaCardView {...other}
                    stanzaArray={stanzaArray}
                    stanzaIndex={shownStanzaIndex}
                    stanzaType={itsStanzaType}
                    showStanzaTypeAndIndex={showStanzaTypeAndIndex}
                />
            )
        }
    } else {
        return null
    }
}

LyricStanzaCard.defaultProps = lyricStanzaCardDefaultProps
LyricStanzaCard.propTypes = lyricStanzaCardPropTypes

/****************
 * PRESENTATION *
 ****************/

const lyricStanzaCardViewPropTypes = {
    // From parent.
    stanzaIndex: PropTypes.number,
    stanzaArray: PropTypes.array.isRequired,
    stanzaType: PropTypes.string.isRequired,
    showStanzaTypeAndIndex: PropTypes.bool.isRequired
},

LyricStanzaCardView = ({

    showStanzaTypeAndIndex,
    stanzaArray,
    stanzaIndex,
    stanzaType,

...other }) => {

    return (
        <div className="LyricStanzaCard">

            {showStanzaTypeAndIndex &&
                <div className={cx(
                    'stanza-tab',
                    `bgColour__stanza__${stanzaType}`
                )}>
                    {stanzaType}{stanzaIndex !== -1 ? ` ${stanzaIndex}` : ''}
                </div>
            }

            <div className={cx(
                'stanza',
                `bgColour__stanza__${stanzaType}`
            )}>
                {stanzaArray.map((verseObject, stanzaVerseIndex) => {
                    const { stanzaMap,
                            unitMap } = verseObject

                    return !stanzaMap && !unitMap && (
                            <LyricVerse {...other}
                                key={stanzaVerseIndex}
                                verseObject={verseObject}
                            />
                        )
                    }
                )}
            </div>
        </div>
    )
}

LyricStanzaCardView.propTypes = lyricStanzaCardViewPropTypes

export default LyricStanzaCard
