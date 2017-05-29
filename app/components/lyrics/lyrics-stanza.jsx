import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import VerseUnit from '../verse/verse-unit'

/*************
 * CONTAINER *
 *************/

const LyricsStanza = (props) => (
    <LyricsStanzaView {...props} />
)

/****************
 * PRESENTATION *
 ****************/

const LyricsStanzaView = ({

    // From props.
    selectedVerseIndex,
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

                    const { verseIndex } = verseObject,
                        isSelected = verseIndex === selectedVerseIndex,
                        isAfterSelected = verseIndex > selectedVerseIndex

                    return !verseObject.stanzaMap && !verseObject.unitMap &&
                        <VerseUnit {...other}
                            key={stanzaVerseIndex}
                            isSelected={isSelected}
                            isAfterSelected={isAfterSelected}
                            verseObject={verseObject}
                        />
                    }
                )}
            </div>
        </div>
    )
}

LyricsStanza.propTypes = {
    stanzaIndex: PropTypes.number,
    stanzaArray: PropTypes.array.isRequired,
    stanzaType: PropTypes.string.isRequired,
    showStanzaTypeAndIndex: PropTypes.bool.isRequired
}

export default LyricsStanza
