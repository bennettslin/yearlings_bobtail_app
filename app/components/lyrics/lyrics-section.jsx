import React from 'react'
import LyricsUnit from './lyrics-unit'

/*************
 * CONTAINER *
 *************/

const LyricsSection = (props) => (
    <LyricsSectionView {...props} />
)

/****************
 * PRESENTATION *
 ****************/

const LyricsSectionView = ({

    // From props.
    songLyrics,
    selectedTime,
    selectedAnnotationIndex,
    selectedDotKeys,
    hoveredLineIndex,
    isNarrowScreen,
    onAnnotationClick,
    onTimeClick,
    onLineHover

}) => (

    <div className="section lyrics-section">
        <h2>lyrics</h2>
        <div className="lyrics-block">
            {songLyrics.map((stanzaArray, stanzaIndex) => (
                    <LyricsUnit
                        key={stanzaIndex}
                        isTitleUnit={stanzaIndex === 0}
                        stanzaArray={stanzaArray}
                        selectedAnnotationIndex={selectedAnnotationIndex}
                        selectedDotKeys={selectedDotKeys}
                        selectedTime={selectedTime}
                        hoveredLineIndex={hoveredLineIndex}
                        onAnnotationClick={onAnnotationClick}
                        onTimeClick={onTimeClick}
                        onLineHover={onLineHover}
                    />
                )
            )}
        </div>
    </div>
)

export default LyricsSection
