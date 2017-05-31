import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Button from '../button/button'
import LyricSection from '../lyric/lyric-section'
import VerseBar from '../verse/verse-bar'
import { LYRIC_COLUMN_KEYS } from '../../helpers/constants'
import { LYRIC_COLUMN_TOGGLE_KEY } from '../../constants/access'
import { getHiddenLyricColumnKey } from '../../helpers/logic-helper'
import { getComponentShouldUpdate } from '../../helpers/general-helper'

const passReduxStateToProps = ({
    selectedSongIndex,
    selectedAnnotationIndex,
    selectedLyricColumnIndex,
    selectedVerseIndex
}) => ({
// Pass Redux state into component props.
    selectedSongIndex,
    selectedAnnotationIndex,
    selectedLyricColumnIndex,
    selectedVerseIndex
})

/*************
 * CONTAINER *
 *************/

class LyricColumn extends Component {

    constructor(props) {
        super(props)

        this._handleTransition = this._handleTransition.bind(this)
        this._handleAnimatableTransition = this._handleAnimatableTransition.bind(this)
        this.completeHeightTransition = this.completeHeightTransition.bind(this)

        this.state = {
            handlingHeightTransition: false
        }
    }

    shouldComponentUpdate(nextProps) {
        const { props } = this,
            componentShouldUpdate = getComponentShouldUpdate({
                props,
                nextProps,
                updatingPropsArray: [
                    'appMounted',
                    'deviceIndex',
                    'isLogue',
                    'isPlaying',
                    'isPortrait',
                    'selectedSongIndex',
                    'accessedAnnotationIndex',
                    'selectedAnnotationIndex',
                    'sliderVerseIndex',
                    'interactivatedVerseIndex',
                    'selectedLyricColumnIndex',
                    'selectedVerseIndex',
                    'showOneOfTwoLyricColumns',
                    'sliderMousedOrTouched',

                    // For lyric expand button.
                    'isLyricExpanded'
                ]
            })

        return componentShouldUpdate
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
        return (
            <LyricColumnView {...this.props}
                myRef={(node) => (this.myLyricColumn = node)}
                handlingHeightTransition={this.state.handlingHeightTransition}
                handleTransition={this._handleTransition}
                handleAnimatableTransition={this._handleAnimatableTransition}
                completeHeightTransition={this.completeHeightTransition}
            />
        )
    }
}

LyricColumn.propTypes = {
    appMounted: PropTypes.bool.isRequired,
    deviceIndex: PropTypes.number.isRequired,
    isLogue: PropTypes.bool.isRequired,
    showOneOfTwoLyricColumns: PropTypes.bool.isRequired,
    sliderMousedOrTouched: PropTypes.bool.isRequired,
    isPlaying: PropTypes.bool.isRequired,
    isPortrait: PropTypes.bool.isRequired,

    isLyricExpanded: PropTypes.bool.isRequired,

    selectedSongIndex: PropTypes.number.isRequired,
    accessedAnnotationIndex: PropTypes.number,
    selectedAnnotationIndex: PropTypes.number.isRequired,
    sliderVerseIndex: PropTypes.number.isRequired,
    interactivatedVerseIndex: PropTypes.number.isRequired,
    selectedLyricColumnIndex: PropTypes.number.isRequired,
    selectedVerseIndex: PropTypes.number.isRequired,

    handleLyricColumnSelect: PropTypes.func.isRequired,
    handleVerseBarSelect: PropTypes.func.isRequired,
    handleVerseBarWheel: PropTypes.func.isRequired,
    lyricExpandButtonChild: PropTypes.element
}

/****************
 * PRESENTATION *
 ****************/

const LyricColumnView = ({

    // From props.
    isLogue,
    showOneOfTwoLyricColumns,
    selectedLyricColumnIndex,

    handleLyricColumnSelect,
    handleVerseBarSelect,
    handleVerseBarWheel,

    lyricExpandButtonChild,

    // From controller.
    myRef,
    handlingHeightTransition,
    handleTransition,
    handleAnimatableTransition,
    completeHeightTransition,

...other }) => {

    const { selectedSongIndex,
            selectedVerseIndex,
            sliderVerseIndex } = other,

        // Show the slider verse if there is one.
        verseIndex = sliderVerseIndex > -1 ? sliderVerseIndex : selectedVerseIndex,
        hiddenLyricColumnKey = getHiddenLyricColumnKey({
            showOneOfTwoLyricColumns,
            selectedLyricColumnIndex
        }),

        verseBarProps = {
            selectedSongIndex,
            verseIndex,
            hiddenLyricColumnKey,
            handleVerseBarSelect,
            handleVerseBarWheel
        }

    return (
        <div
            className="column lyric-column"
            ref={myRef}
            onTransitionEnd={handleTransition}
        >
            <div className="lyric-column-animatable"
                onTransitionEnd={handleAnimatableTransition}
            >
                {!isLogue &&
                    <VerseBar {...verseBarProps}
                        isAbove={true}
                    />
                }
                {!isLogue &&
                    <VerseBar {...verseBarProps}
                    />
                }
                {showOneOfTwoLyricColumns &&
                    <div className="lyric-button-block ear-button-block">
                        <Button
                            accessKey={LYRIC_COLUMN_TOGGLE_KEY}
                            iconText={LYRIC_COLUMN_KEYS[selectedLyricColumnIndex]}
                            isLarge={true}
                            handleClick={handleLyricColumnSelect}
                        />
                    </div>
                }
                {lyricExpandButtonChild}
                <LyricSection {...other}
                    hiddenLyricColumnKey={hiddenLyricColumnKey}
                    handlingHeightTransition={handlingHeightTransition}
                    completeHeightTransition={completeHeightTransition}
                />
            </div>
        </div>
    )
}

LyricColumnView.propTypes = {
    selectedVerse: PropTypes.object,
    isLogue: PropTypes.bool.isRequired,
    showOneOfTwoLyricColumns: PropTypes.bool.isRequired,
    handleLyricColumnSelect: PropTypes.func.isRequired,
    handleVerseBarSelect: PropTypes.func.isRequired,
    handleVerseBarWheel: PropTypes.func.isRequired,
    lyricExpandButtonChild: PropTypes.element,

    myRef: PropTypes.func.isRequired,
    handlingHeightTransition: PropTypes.bool.isRequired,
    handleTransition: PropTypes.func.isRequired,
    handleAnimatableTransition: PropTypes.func.isRequired,
    completeHeightTransition: PropTypes.func.isRequired
}

export default connect(passReduxStateToProps)(LyricColumn)
