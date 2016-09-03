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
    activeTime,
    activeAnnotationIndex,
    activeDotKeys,
    onAnnotationClick,
    onTimeClick

}) => (

    <div className="section lyrics-section">
        <h2>lyrics</h2>
        <div className="lyrics-block">
            {songLyrics.map((stanzaArray, stanzaIndex) => (
                    <LyricsUnit
                        key={stanzaIndex}
                        isTitleUnit={stanzaIndex === 0}
                        stanzaArray={stanzaArray}
                        activeAnnotationIndex={activeAnnotationIndex}
                        activeDotKeys={activeDotKeys}
                        activeTime={activeTime}
                        onAnnotationClick={onAnnotationClick}
                        onTimeClick={onTimeClick}
                    />
                )
            )}
        </div>
    </div>
)

export default LyricsSection
