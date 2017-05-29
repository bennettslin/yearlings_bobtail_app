import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Button from '../button/button'
import LyricsSection from '../lyrics/lyrics-section'
import LyricVerseBar from './lyric-verse-bar'
import { LYRIC_COLUMN_TOGGLE_KEY } from '../../helpers/constants'

/*************
 * CONTAINER *
 *************/

const LyricColumn = ({

    hasDoubleColumns,

...other }) => {

    const {
        showOneOfTwoLyricColumns,
        selectedLyricColumnIndex
    } = other,

    showEarButton = !!showOneOfTwoLyricColumns && !!hasDoubleColumns,
    earButtonText = selectedLyricColumnIndex === 0 ? 'left' : 'right'

    return (
        <LyricColumnView {...other}
            showEarButton={showEarButton}
            earButtonText={earButtonText}
        />
    )
}

LyricColumn.propTypes = {
    hasDoubleColumns: PropTypes.bool,
    showOneOfTwoLyricColumns: PropTypes.bool.isRequired,
    selectedLyricColumnIndex: PropTypes.number.isRequired
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

                // From controller.
                showEarButton,
                earButtonText,

                ...other } = this.props,

            verseBarProps = {
                verseObject: selectedVerse,
                showOneOfTwoLyricColumns: other.showOneOfTwoLyricColumns,
                hiddenLyricColumnKey: other.hiddenLyricColumnKey,
                handleVerseBarSelect,
                handleVerseBarWheel
            }

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
                    {showEarButton &&
                        <div className="lyric-button-block ear-button-block">
                            <Button
                                accessKey={LYRIC_COLUMN_TOGGLE_KEY}
                                iconText={earButtonText}
                                isLarge={true}
                                handleClick={handleLyricColumnSelect}
                            />
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

LyricColumnView.propTypes = {
    selectedVerse: PropTypes.object,
    earButtonText: PropTypes.string.isRequired,
    isLogue: PropTypes.bool.isRequired,
    showEarButton: PropTypes.bool.isRequired,
    handleLyricColumnSelect: PropTypes.func.isRequired,
    handleVerseBarSelect: PropTypes.func.isRequired,
    handleVerseBarWheel: PropTypes.func.isRequired,
    lyricExpandButtonChild: PropTypes.element
}

export default LyricColumn
