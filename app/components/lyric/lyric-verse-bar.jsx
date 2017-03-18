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
    isAbove,
    handleVerseBarSelect,

...other }) => (
    <div
        className={`verse-bar-block ${isAbove ? 'above' : 'below'}`}
    >
        <div className="verse-bar"
            onClick={handleVerseBarSelect}
        >
            <LyricsVerse {...other}
                inVerseBar={true}
            />
        </div>
    </div>
)

export default LyricVerseBar
