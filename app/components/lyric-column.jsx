import React from 'react'
import LyricsSection from './lyrics/lyrics-section'

/*************
 * CONTAINER *
 *************/

const LyricColumn = ({

    selectedSongIndex,
    hasDoubleColumns,

...other }) => {

    const {
        showSingleLyricColumn,
        selectedLyricColumnIndex
    } = other,

    showEarButton = showSingleLyricColumn && hasDoubleColumns,
    earButtonText = selectedLyricColumnIndex === 0 ? 'left' : 'right'

    return (
        <LyricColumnView {...other}
            showEarButton={showEarButton}
            earButtonText={earButtonText}
        />
    )
}

/****************
 * PRESENTATION *
 ****************/

const LyricColumnView = ({

    // From props.
    isLyricExpandable,
    isLyricExpanded,
    onLyricExpandClick,
    onLyricColumnClick,

    // From controller.
    showEarButton,
    earButtonText,

...other }) => (
    <div className="column lyric-column">
        <div className="lyric-column-animatable">
            {showEarButton ?
                <div className="lyric-button-block ear-button-block">
                    <a
                        className="lyric-button enabled"
                        onClick={onLyricColumnClick}
                    >
                        <div className="large button-icon lyric-icon">
                            {earButtonText}
                        </div>
                    </a>
                </div> : null
            }
            {isLyricExpandable ?
                <div className="lyric-button-block expand-button-block">
                    <a
                        className="lyric-button enabled"
                        onClick={onLyricExpandClick}
                    >
                        <div className="large button-icon lyric-icon">
                            {isLyricExpanded ? '-' : '+'}
                        </div>
                    </a>
                </div> : null
            }
            <LyricsSection {...other} />
        </div>
    </div>
)

export default LyricColumn
