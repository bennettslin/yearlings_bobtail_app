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
    isShown,
    isAbove,
    onVerseBarClick,

...other }) => (
    <div
        className={`selected-verse-bar${isShown ? ' shown' : ' hidden'} ${isAbove ? 'above' : 'below'}`}
        onClick={onVerseBarClick}
    >
        <LyricsVerse {...other}
            inVerseBar={true}
        />
    </div>
)

export default LyricVerseBar
