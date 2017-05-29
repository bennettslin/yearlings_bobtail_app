import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import LyricVerse from './lyric-verse'

/*************
 * CONTAINER *
 *************/

const LyricStanza = (props) => (
    <LyricStanzaView {...props} />
)

/****************
 * PRESENTATION *
 ****************/

const LyricStanzaView = ({

    // From props.
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
                    return !verseObject.stanzaMap && !verseObject.unitMap &&
                        <LyricVerse {...other}
                            key={stanzaVerseIndex}
                            verseObject={verseObject}
                        />
                    }
                )}
            </div>
        </div>
    )
}

LyricStanza.propTypes = {
    stanzaIndex: PropTypes.number,
    stanzaArray: PropTypes.array.isRequired,
    stanzaType: PropTypes.string.isRequired,
    showStanzaTypeAndIndex: PropTypes.bool.isRequired
}

export default LyricStanza
