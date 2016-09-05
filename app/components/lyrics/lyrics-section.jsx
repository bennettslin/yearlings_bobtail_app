import React from 'react'
import LyricsUnit from './lyrics-unit'
import RadioButtonBlock from '../superclasses/radio-button-block'
import { LYRIC_COLUMN_KEYS } from 'helpers/constants'

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
    isNarrowScreen,
    selectedLyricColumnIndex,
    hasDoubleColumns,
    onLyricColumnClick,

...other }) => (
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
                    <LyricsUnit {...other}
                        key={stanzaIndex}
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
