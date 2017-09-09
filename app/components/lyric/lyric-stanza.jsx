// Component to show individual stanza.

import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import LyricVerse from './lyric-verse'

/*************
 * CONTAINER *
 *************/

const lyricStanzaDefaultProps = {
    inMain: false,
    subsequent: false,
    addSub: false,
    isSub: false
},

lyricStanzaPropTypes = {
    // From parent.
    stanzaIndex: PropTypes.number,
    stanzaType: PropTypes.string,
    substanzaType: PropTypes.string,
    sideStanzaType: PropTypes.string,
    sideSubstanzaType: PropTypes.string,
    subsequent: PropTypes.bool.isRequired,

    stanzaArray: PropTypes.array,
    inMain: PropTypes.bool.isRequired,
    addSub: PropTypes.bool.isRequired,
    isSub: PropTypes.bool.isRequired
},

LyricStanza = ({

    // From props.
    stanzaIndex,
    stanzaType,
    substanzaType,
    sideStanzaType,
    sideSubstanzaType,
    subsequent,

    // From controller.
    stanzaArray,
    addSub,

    // Passed recursively.
    isSub,

...other }) => {

    const { inMain } = other

    if (stanzaArray) {
        if (addSub) {
            return (
                <div className="sub-block custom-sub-block right">
                    <LyricStanza {...other}
                        stanzaArray={stanzaArray}
                        isSub={true}

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
                <LyricStanzaView {...other}
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

LyricStanza.defaultProps = lyricStanzaDefaultProps
LyricStanza.propTypes = lyricStanzaPropTypes

/****************
 * PRESENTATION *
 ****************/

const lyricStanzaViewPropTypes = {
    // From parent.
    stanzaIndex: PropTypes.number,
    stanzaArray: PropTypes.array.isRequired,
    stanzaType: PropTypes.string.isRequired,
    showStanzaTypeAndIndex: PropTypes.bool.isRequired
},

LyricStanzaView = ({

    showStanzaTypeAndIndex,
    stanzaArray,
    stanzaIndex,
    stanzaType,

...other }) => {

    const typeClassName = stanzaType && `stanza-type-${stanzaType}`

    return (
        <div className="stanza-container">
            {showStanzaTypeAndIndex &&
                <div className={classnames(
                    'stanza-tab',
                    typeClassName
                )}>
                    {stanzaType}{stanzaIndex !== -1 ? ` ${stanzaIndex}` : ''}
                </div>
            }

            <div className={classnames(
                'stanza',
                typeClassName
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

LyricStanzaView.propTypes = lyricStanzaViewPropTypes

export default LyricStanza
