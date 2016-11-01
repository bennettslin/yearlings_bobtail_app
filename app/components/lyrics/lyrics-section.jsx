import React from 'react'
import LyricsUnit from './lyrics-unit'
import RadioButtonBlock from '../superclasses/radio-button-block'
import { LYRIC_COLUMN_KEYS, LYRICS } from 'helpers/constants'

/*************
 * CONTAINER *
 *************/

 const LyricsSection = ({

     accessedOn,
     accessedSectionKey,

 ...other }) => {

     const accessHighlighted = accessedOn && accessedSectionKey === LYRICS

     return (
         <LyricsSectionView {...other}
             accessHighlighted={accessHighlighted}
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
    accessHighlighted,

...other }) => (
    <div className={`section lyrics-section${accessHighlighted ? ' access-highlighted' : ''}${isNarrowScreen ? ' narrow' : ''}`}>
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
                    />
                )
            )}
        </div>
    </div>
)

export default LyricsSection
