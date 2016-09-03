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
    activeAnnotationIndex,
    activeDotKeys,
    activeTime,
    hoveredLineIndex,
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
                    activeAnnotationIndex={activeAnnotationIndex}
                    activeDotKeys={activeDotKeys}
                    activeTime={activeTime}
                    hoveredLineIndex={hoveredLineIndex}
                    onAnnotationClick={onAnnotationClick}
                    onTimeClick={onTimeClick}
                    onLineHover={onLineHover}
                /> : null
            )
        )}
    </div>
)

export default LyricsStanza
