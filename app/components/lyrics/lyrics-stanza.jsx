import React from 'react'
import LyricsVerse from './lyrics-verse'

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
    stanzaArray,
    sectionClass,
    selectedAnnotationIndex,
    selectedDotKeys,
    selectedTime,
    hoveredLineIndex,
    hiddenLyricColumnKey,
    onAnnotationClick,
    onTimeClick,
    onLineHover

}) => (

    <div className={`stanza${sectionClass ? ` ${sectionClass}` : ''}`}>
        {stanzaArray.map((verseObject, verseIndex) => (
            !verseObject.stanzaMap && !verseObject.unitMap ?
                <LyricsVerse
                    key={verseIndex}
                    verseObject={verseObject}
                    selectedAnnotationIndex={selectedAnnotationIndex}
                    selectedDotKeys={selectedDotKeys}
                    selectedTime={selectedTime}
                    hoveredLineIndex={hoveredLineIndex}
                    hiddenLyricColumnKey={hiddenLyricColumnKey}
                    onAnnotationClick={onAnnotationClick}
                    onTimeClick={onTimeClick}
                    onLineHover={onLineHover}
                /> : null
            )
        )}
    </div>
)

export default LyricsStanza
