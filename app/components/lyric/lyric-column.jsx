import React, { Component } from 'react'
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

class LyricColumnView extends Component {

    render() {

                // From props.
        const { isLogue,
                isSelectedVerseAbove,
                isSelectedVerseBelow,
                selectedVerse,
                onLyricColumnClick,
                onVerseBarClick,

                lyricExpandButtonChild,

                // From controller.
                showEarButton,
                earButtonText,

                ...other } = this.props,

            verseBarShown = isSelectedVerseAbove || isSelectedVerseBelow,

            verseBarProps = {
                verseBarShown,
                verseObject: selectedVerse,
                showSingleLyricColumn: other.showSingleLyricColumn,
                hiddenLyricColumnKey: other.hiddenLyricColumnKey,
                onVerseBarClick
                // selectedDotKeys: other.selectedDotKeys,
                // onAnnotationClick: other.onAnnotationClick
            }

        return (
            <div className="column lyric-column">
                <div className="lyric-column-animatable">
                    {!isLogue &&
                        <LyricVerseBar {...verseBarProps}
                            isShown={isSelectedVerseAbove}
                            isAbove={true}
                        />
                    }
                    {!isLogue &&
                        <LyricVerseBar {...verseBarProps}
                            isShown={isSelectedVerseBelow}
                        />
                    }
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
                    {lyricExpandButtonChild}
                    <LyricsSection {...other}
                        verseBarShown={verseBarShown}
                    />
                </div>
            </div>
        )
    }
}

export default LyricColumn
