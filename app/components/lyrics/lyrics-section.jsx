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
    nextSectionKey,

...other }) => {

    const sectionAccessHighlighted = accessedOn && accessedSectionKey === LYRICS_SECTION,
        sectionNextHighlighted = accessedOn && nextSectionKey === LYRICS_SECTION

    return (
        <LyricsSectionView {...other}
            sectionAccessHighlighted={sectionAccessHighlighted}
            sectionNextHighlighted={sectionNextHighlighted}
        />
    )
}

/****************
 * PRESENTATION *
 ****************/

const LyricsSectionView = ({

    // From props.
    isAdmin,
    songLyrics = [],
    showSingleLyricColumn,
    selectedLyricColumnIndex,
    hasDoubleColumns,
    onLyricColumnClick,

    // From controller.
    sectionAccessHighlighted,
    sectionNextHighlighted,

...other }) => (
    <div
        className={`section lyrics-section${sectionAccessHighlighted ? ' access-highlighted' : ''}${sectionNextHighlighted ? ' next-highlighted' : ''}${showSingleLyricColumn ? ' single-column' : ''}`}
    >
        {/* Upon song change, scroll to element with this class name. */}
        {isAdmin ? <h2 className="lyrics-scroll-home">lyrics</h2> : null}
        {showSingleLyricColumn && hasDoubleColumns ?
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
                        showSingleLyricColumn={showSingleLyricColumn}
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
