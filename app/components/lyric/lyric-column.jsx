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

    constructor(props) {
        super(props)

        this._handleTransition = this._handleTransition.bind(this)
        this.completeHeightTransition = this.completeHeightTransition.bind(this)

        this.state = {
            handlingHeightTransition: false
        }
    }

    _handleTransition(e) {
        if (e.propertyName === 'height') {
            this.setState({
                handlingHeightTransition: true
            })
        }
    }

    completeHeightTransition(e) {
        this.setState({
            handlingHeightTransition: false
        })
    }

    render() {

                // From props.
        const { isLogue,
                selectedVerse,
                onLyricColumnClick,
                onVerseBarClick,

                lyricExpandButtonChild,

                // From controller.
                showEarButton,
                earButtonText,

                ...other } = this.props,

            verseBarProps = {
                verseObject: selectedVerse,
                showSingleLyricColumn: other.showSingleLyricColumn,
                hiddenLyricColumnKey: other.hiddenLyricColumnKey,
                onVerseBarClick
                // selectedDotKeys: other.selectedDotKeys,
                // onAnnotationClick: other.onAnnotationClick
            }

        return (
            <div
                className="column lyric-column"
                ref={(node) => (this.myLyricColumn = node)}
                onTransitionEnd={this._handleTransition}
            >
                <div className="lyric-column-animatable"
                    // onTransitionEnd={this._handleTransition}
                >
                    {!isLogue &&
                        <LyricVerseBar {...verseBarProps}
                            isAbove={true}
                        />
                    }
                    {!isLogue &&
                        <LyricVerseBar {...verseBarProps}
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
                        handlingHeightTransition={this.state.handlingHeightTransition}
                        completeHeightTransition={this.completeHeightTransition}
                    />
                </div>
            </div>
        )
    }
}

export default LyricColumn
