import React from 'react'
import LyricsUnit from './lyrics-unit'
import RadioButtonBlock from '../superclasses/radio-button-block'
import { LYRIC_COLUMN_KEYS } from 'helpers/constants'

/*************
 * CONTAINER *
 *************/

const LyricsSection = (props) => {
    return (
        <LyricsSectionView {...props} />
    )
}

/****************
 * PRESENTATION *
 ****************/

// TODO: Only have radio button block for doublespeaker songs, Grasshoppers, and Uncanny Valley.

const LyricsSectionView = ({

    // From props.
    songLyrics,
    selectedTime,
    selectedAnnotationIndex,
    selectedDotKeys,
    hoveredLineIndex,
    isNarrowScreen,
    selectedLyricColumnIndex,
    hasDoubleColumns,
    onAnnotationClick,
    onTimeClick,
    onLineHover,
    onLyricColumnClick

}) => (

    <div className={`section lyrics-section${isNarrowScreen ? ' narrow' : ''}`}>
        <h2>lyrics</h2>
        {isNarrowScreen && hasDoubleColumns ?
            <RadioButtonBlock
                selectedButtonIndex={selectedLyricColumnIndex}
                buttonKeys={LYRIC_COLUMN_KEYS}
                onButtonClick={onLyricColumnClick}
            /> : null
        }
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
                        selectedLyricColumnIndex={selectedLyricColumnIndex}
                    />
                )
            )}
        </div>
    </div>
)

export default LyricsSection
