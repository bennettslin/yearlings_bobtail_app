import React from 'react'
import LyricsUnit from './lyrics-unit'
import RadioButtonBlock from '../superclasses/radio-button-block'
import { LYRIC_COLUMN_KEYS, LYRICS_SECTION } from 'helpers/constants'

/*************
 * CONTAINER *
 *************/

 const LyricsSection = ({

     accessedOn,
     accessedSectionKey,

 ...other }) => {

     const sectionAccessHighlighted = accessedOn && accessedSectionKey === LYRICS_SECTION

     return (
         <LyricsSectionView {...other}
             sectionAccessHighlighted={sectionAccessHighlighted}
         />
     )
 }

/****************
 * PRESENTATION *
 ****************/

const LyricsSectionView = ({

    // From props.
    songLyrics,
    isNarrowScreen,
    selectedLyricColumnIndex,
    hasDoubleColumns,
    onLyricColumnClick,

    // From controller.
    sectionAccessHighlighted,

...other }) => (
    <div
        className={`section lyrics-section${sectionAccessHighlighted ? ' access-highlighted' : ''}${isNarrowScreen ? ' narrow' : ''}`}
    >
        {/* Upon song change, scroll to element with this class name. */}
        <h2 className="lyrics-scroll-home">lyrics</h2>
        {isNarrowScreen && hasDoubleColumns ?
            <RadioButtonBlock
                selectedButtonIndex={selectedLyricColumnIndex}
                buttonKeys={LYRIC_COLUMN_KEYS}
                onButtonClick={onLyricColumnClick}
            /> : null
        }
        <div className="lyrics-block">
            {songLyrics.map((stanzaArray, stanzaIndex) => (
                    <LyricsUnit {...other}
                        key={stanzaIndex}
                        isNarrowScreen={isNarrowScreen}
                        isTitleUnit={stanzaIndex === 0}
                        stanzaArray={stanzaArray}
                        selectedLyricColumnIndex={selectedLyricColumnIndex}
                        sectionAccessHighlighted={sectionAccessHighlighted}
                    />
                )
            )}
        </div>
    </div>
)

export default LyricsSection
