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
    <div className={`lyric-column${isLyricExpandable ? ' expandable' : ''}`}>
        {isLyricExpandable ?
            <div className="button-block expand-button-block">
                <a
                    className="enabled"
                    onClick={onLyricExpandClick}
                >
                    {isLyricExpanded ? '-' : '+'}
                </a>
            </div> : null
        }
        {showEarButton ?
            <div className="button-block ear-button-block">
                <a
                    className="enabled"
                    onClick={onLyricColumnClick}
                >
                    {earButtonText}
                </a>
            </div> : null
        }
        <LyricsSection {...other} />
    </div>
)

export default LyricColumn
