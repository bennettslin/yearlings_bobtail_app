import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Button from '../button/button'
import LyricsSection from '../lyrics/lyrics-section'
import LyricVerseBar from './lyric-verse-bar'
import { LYRIC_COLUMN_TOGGLE_KEY, LYRIC_COLUMN_KEYS } from '../../helpers/constants'
import { getHiddenLyricColumnKey } from '../../helpers/logic-helper'

/*************
 * CONTAINER *
 *************/

const LyricColumn = (props) => {
    return (
        <LyricColumnView {...props} />
    )
}

/****************
 * PRESENTATION *
 ****************/

class LyricColumnView extends Component {

    constructor(props) {
        super(props)

        this._handleTransition = this._handleTransition.bind(this)
        this._handleAnimatableTransition = this._handleAnimatableTransition.bind(this)
        this.completeHeightTransition = this.completeHeightTransition.bind(this)

        this.state = {
            handlingHeightTransition: false
        }
    }

    componentDidUpdate(prevProps) {
        if (prevProps.selectedSongIndex !== this.props.selectedSongIndex) {
            this.props.handleScrollAfterLyricRerender()
        }
    }

    _handleTransition(e) {
        if (e.propertyName === 'height') {
            this.setState({
                handlingHeightTransition: true
            })
        }
    }

    _handleAnimatableTransition(e) {
        if (e.propertyName === 'opacity') {
            this.setState({
                handlingHeightTransition: true
            })
        }
    }

    completeHeightTransition() {
        this.setState({
            handlingHeightTransition: false
        })
    }

    render() {

                // From props.
        const { isLogue,
                selectedVerse,
                handleLyricColumnSelect,
                handleVerseBarSelect,
                handleVerseBarWheel,

                lyricExpandButtonChild,

                ...other } = this.props,

            hiddenLyricColumnKey = getHiddenLyricColumnKey({
                showOneOfTwoLyricColumns: other.showOneOfTwoLyricColumns,
                selectedLyricColumnIndex: other.selectedLyricColumnIndex
            }),

            verseBarProps = {
                verseObject: selectedVerse,
                showOneOfTwoLyricColumns: other.showOneOfTwoLyricColumns,
                hiddenLyricColumnKey,
                handleVerseBarSelect,
                handleVerseBarWheel
            }

        console.error(`hiddenLyricColumnKey`, hiddenLyricColumnKey);

        return (
            <div
                className="column lyric-column"
                ref={(node) => (this.myLyricColumn = node)}
                onTransitionEnd={this._handleTransition}
            >
                <div className="lyric-column-animatable"
                    onTransitionEnd={this._handleAnimatableTransition}
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
                    {other.showOneOfTwoLyricColumns &&
                        <div className="lyric-button-block ear-button-block">
                            <Button
                                accessKey={LYRIC_COLUMN_TOGGLE_KEY}
                                iconText={LYRIC_COLUMN_KEYS[other.selectedLyricColumnIndex]}
                                isLarge={true}
                                handleClick={handleLyricColumnSelect}
                            />
                        </div>
                    }
                    {lyricExpandButtonChild}
                    <LyricsSection {...other}
                        hiddenLyricColumnKey={hiddenLyricColumnKey}
                        handlingHeightTransition={this.state.handlingHeightTransition}
                        completeHeightTransition={this.completeHeightTransition}
                    />
                </div>
            </div>
        )
    }
}

LyricColumnView.propTypes = {
    selectedVerse: PropTypes.object,
    isLogue: PropTypes.bool.isRequired,
    showOneOfTwoLyricColumns: PropTypes.bool.isRequired,
    handleLyricColumnSelect: PropTypes.func.isRequired,
    handleVerseBarSelect: PropTypes.func.isRequired,
    handleVerseBarWheel: PropTypes.func.isRequired,
    lyricExpandButtonChild: PropTypes.element
}

export default LyricColumn
