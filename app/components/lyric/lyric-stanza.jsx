// Component to show individual stanza.

import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import LyricVerse from './lyric-verse'

const LyricStanza = ({

    // From props.
    stanzaIndex,
    stanzaType,
    substanzaType,
    sideStanzaType,
    sideSubstanzaType,
    subsequent,

    // From controller.
    stanzaArray,
    inMain,
    addSub,
    isSub,

...other }) => {

    if (stanzaArray) {
        if (addSub) {
            return (
                <div className="sub-block custom-sub-block right">
                    <LyricStanza {...other}
                        stanzaArray={stanzaArray}
                        inMain={inMain}
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
                    inMain={inMain}
                    showStanzaTypeAndIndex={showStanzaTypeAndIndex}
                    stanzaIndex={shownStanzaIndex}
                    stanzaType={itsStanzaType}
                />
            )
        }
    } else {
        return null
    }
}

LyricStanza.defaultProps = {
    inMain: false,
    subsequent: false,
    addSub: false,
    isSub: false
}

LyricStanza.propTypes = {
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
}

const LyricStanzaView = ({

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

LyricStanzaView.propTypes = {
    // From parent.
    stanzaIndex: PropTypes.number,
    stanzaArray: PropTypes.array.isRequired,
    stanzaType: PropTypes.string.isRequired,
    showStanzaTypeAndIndex: PropTypes.bool.isRequired
}

export default LyricStanza
