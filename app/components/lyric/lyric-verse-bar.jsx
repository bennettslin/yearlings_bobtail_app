import React from 'react'
import LyricsVerse from '../lyrics/lyrics-verse'

/*************
 * CONTAINER *
 *************/

const LyricVerseBar = (props) => (
    <LyricVerseBarView {...props} />
)

/****************
 * PRESENTATION *
 ****************/

const LyricVerseBarView = ({

    // From props.
    isAbove

}) => (
    <div className={`selected-verse-bar ${isAbove ? 'above' : 'below'}`}>
        <LyricsVerse />
    </div>
)

export default LyricVerseBar
