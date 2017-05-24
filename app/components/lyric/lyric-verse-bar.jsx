import React from 'react'
import PropTypes from 'prop-types'
import LyricsVerse from '../lyrics/lyrics-verse'

/*************
 * CONTAINER *
 *************/

const LyricVerseBar = (props) => (
    <LyricVerseBarView {...props} />
)

LyricVerseBar.propTypes = {
    isAbove: PropTypes.bool,
    handleVerseBarSelect: PropTypes.func.isRequired,
    handleVerseBarWheel: PropTypes.func.isRequired
}

/****************
 * PRESENTATION *
 ****************/

const LyricVerseBarView = ({

    // From props.
    isAbove,
    handleVerseBarSelect,
    handleVerseBarWheel,

...other }) => (
    <div
        className={`verse-bar-block ${isAbove ? 'above' : 'below'}`}
        onWheel={handleVerseBarWheel}
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
