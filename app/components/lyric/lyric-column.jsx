import React from 'react'
import LyricsSection from '../lyrics/lyrics-section'
import LyricVerseBar from './lyric-verse-bar'

/*************
 * CONTAINER *
 *************/

const LyricColumn = ({

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
    isSelectedVerseAbove,
    isSelectedVerseBelow,
    selectedVerse,
    onLyricExpandClick,
    onLyricColumnClick,

    // From controller.
    showEarButton,
    earButtonText,

...other }) => {

    const verseBarProps = {
        verseObject: selectedVerse,
        showSingleLyricColumn: other.showSingleLyricColumn,
        hiddenLyricColumnKey: other.hiddenLyricColumnKey,
        selectedDotKeys: other.selectedDotKeys,
        onAnnotationClick: other.onAnnotationClick
    }

    return (
        <div className="column lyric-column">
            <div className="lyric-column-animatable">
                <LyricVerseBar {...verseBarProps}
                    isShown={isSelectedVerseAbove}
                    isAbove={true}
                />
                <LyricVerseBar {...verseBarProps}
                    isShown={isSelectedVerseBelow}
                />
                {showEarButton &&
                    <div className="lyric-button-block ear-button-block">
                        <a
                            className="lyric-button enabled"
                            onClick={e => onLyricColumnClick(e)}
                        >
                            <div className="large button-icon lyric-icon">
                                {earButtonText}
                            </div>
                        </a>
                    </div>
                }
                {isLyricExpandable &&
                    <div className="lyric-button-block expand-button-block in-lyric">
                        <a
                            className="lyric-button enabled"
                            onClick={e => onLyricExpandClick(e)}
                        >
                            <div className="large button-icon lyric-icon">
                                {isLyricExpanded ? '-' : '+'}
                            </div>
                        </a>
                    </div>
                }
                <LyricsSection {...other}
                    isLyricExpanded={isLyricExpanded}
                />
            </div>
        </div>
    )
}

export default LyricColumn
