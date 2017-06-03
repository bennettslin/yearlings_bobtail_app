// Component to show individual stanza.

import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import LyricVerse from './lyric-verse'

const LyricStanza = ({

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

LyricStanza.propTypes = {
    // From parent.
    stanzaIndex: PropTypes.number,
    stanzaArray: PropTypes.array.isRequired,
    stanzaType: PropTypes.string.isRequired,
    showStanzaTypeAndIndex: PropTypes.bool.isRequired
}

export default LyricStanza
