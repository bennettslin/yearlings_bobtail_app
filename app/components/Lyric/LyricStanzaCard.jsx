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
    addSubstanza: false,
    isSubstanza: false
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
    isSubstanza: PropTypes.bool.isRequired,
    addSubstanza: PropTypes.bool.isRequired
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
    addSubstanza,

    // Passed recursively.
    isSubstanza,

...other }) => {

    const { inMain } = other

    if (stanzaArray) {

        const shownStanzaIndex =
            inMain
            && !subsequent
            && !isSubstanza
            && !addSubstanza
            && stanzaIndex

        let stanzaTypeLabel

        if (inMain) {
            stanzaTypeLabel = isSubstanza ? substanzaType : stanzaType

        } else {
            stanzaTypeLabel = isSubstanza ? sideSubstanzaType : sideStanzaType
        }

        return (
            <LyricStanzaCardView {...other}
                stanzaArray={stanzaArray}
                addSubstanza={addSubstanza}
                stanzaIndex={shownStanzaIndex}
                stanzaType={stanzaTypeLabel}
            />
        )
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
    addSubstanza: PropTypes.bool.isRequired,
    stanzaIndex: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.number
    ]),
    stanzaArray: PropTypes.array.isRequired,
    stanzaType: PropTypes.string.isRequired
},

LyricStanzaCardView = ({

    addSubstanza,
    stanzaArray,
    stanzaIndex,
    stanzaType,

...other }) => {

    return (
        <div className={cx(
            'LyricStanzaCard',
            addSubstanza && 'offset__stanza__overlap',
            addSubstanza && 'offset__stanza__right'
        )}>

            {stanzaIndex &&
                <div className={cx(
                    'LyricStanzaCard__tab',
                    `bgColour__stanza__${stanzaType}`
                )}>
                    {`${stanzaType}${
                        stanzaIndex !== -1 ? ` ${stanzaIndex}` : ''
                    }`}
                </div>
            }

            <div className={cx(
                'LyricStanzaCard__sheet',
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
