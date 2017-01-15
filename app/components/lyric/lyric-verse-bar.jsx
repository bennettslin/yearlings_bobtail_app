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
        className={`verse-bar-block${isShown ? ' shown' : ' hidden'} ${isAbove ? 'above' : 'below'}`}
    >
        <div className="verse-bar"
            onClick={onVerseBarClick}
        >
            <LyricsVerse {...other}
                inVerseBar={true}
            />
        </div>
    </div>
)

export default LyricVerseBar
