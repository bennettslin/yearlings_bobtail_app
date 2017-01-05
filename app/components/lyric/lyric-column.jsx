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

    shouldComponentUpdate(nextProps) {

        // console.error('this.props.isSelectedVerseAbove', this.props.isSelectedVerseAbove);
        console.error('nextProps.isSelectedVerseAbove', nextProps.isSelectedVerseAbove);
        // console.error('this.props.isSelectedVerseBelow', this.props.isSelectedVerseBelow);
        // console.error('nextProps.isSelectedVerseBelow', nextProps.isSelectedVerseBelow);

        const shouldUpdate = this.props.isSelectedVerseAbove !== nextProps.isSelectedVerseAbove || this.props.isSelectedVerseBelow !== nextProps.isSelectedVerseBelow

        console.error('shouldUpdate column', shouldUpdate);

        return shouldUpdate
    }

    render() {

                // From props.
        const { isLyricExpandable,
                isLyricExpanded,
                isSelectedVerseAbove,
                isSelectedVerseBelow,
                selectedVerse,
                onLyricExpandClick,
                onLyricColumnClick,

                // From controller.
                showEarButton,
                earButtonText,

                ...other } = this.props,

            verseBarProps = {
                verseObject: selectedVerse,
                showSingleLyricColumn: other.showSingleLyricColumn,
                hiddenLyricColumnKey: other.hiddenLyricColumnKey,
                selectedDotKeys: other.selectedDotKeys,
                onAnnotationClick: other.onAnnotationClick
            }

        console.error('render column');

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
                        isSelectedVerseAbove={isSelectedVerseAbove}
                        isSelectedVerseBelow={isSelectedVerseBelow}
                    />
                </div>
            </div>
        )
    }
}

export default LyricColumn
