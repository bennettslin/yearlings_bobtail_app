import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import classnames from 'classnames'
import VerseLine from './verse-line'
import VerseAudioButton from './verse-audio-button'
import { DOUBLESPEAKER_KEYS, TITLE, LEFT, CENTRE, LYRIC } from '../../constants/lyrics'
import { getComponentShouldUpdate } from '../../helpers/general-helper'

/*************
 * CONTAINER *
 *************/

class VerseUnit extends Component {

    constructor(props) {
        super(props)

        this._checkIsSelectedVerse = this._checkIsSelectedVerse.bind(this)
        this._checkIsSliderSelectedVerse = this._checkIsSliderSelectedVerse.bind(this)
    }

    componentDidMount() {
        this._checkIsSelectedVerse(this.props)
    }

    shouldComponentUpdate(nextProps) {
        const { props } = this,
            componentShouldUpdate = getComponentShouldUpdate({
                props,
                nextProps,
                updatingPropsArray: [
                    'deviceIndex',
                    'appMounted',
                    'isSliderTouched',
                    'isPlaying',
                    'accessedAnnotationIndex',
                    'selectedSongIndex',
                    'selectedAnnotationIndex',
                    'hiddenLyricColumnKey',
                    'inMain',
                    'isSelected',
                    'isAfterSelected',
                    'isSliderSelected',
                    'isAfterSliderSelected',
                    'isInteractivated',
                    {
                        onlyIfTrueInNextProps: 'inVerseBar',
                        subUpdatingKey: 'barVerseIndex'
                    }
                ]
            })

        return componentShouldUpdate
    }

    componentDidUpdate(prevProps) {
        const { props } = this

        this._checkIsSelectedVerse(props)

        if (props.isSliderSelected && !prevProps.isSliderSelected) {
            this._checkIsSliderSelectedVerse(props)
        }
    }

    _checkIsSelectedVerse(props) {
        if (props.isSelected) {
            props.handleVerseElementSelect(this.myVerse)
        }
    }

    _checkIsSliderSelectedVerse(props) {
        props.handleVerseElementSlide(this.myVerse)
    }

    _getBackgroundClassName(isEven) {
        const { inVerseBar,
                inMain,
                isTitle } = this.props

        if (!inVerseBar) {
            if (isTitle) {
                return 'title'
            } else if (inMain) {
                return isEven ? 'even' : 'odd'
            } else {
                return 'in-side'
            }
        }

        return ''
    }

    _getSliderPlacementClassName() {
        const { inMain,
                isTitle,
                isSliderTouched,
                isSliderSelected,
                isAfterSliderSelected } = this.props

        if (isSliderTouched && inMain && !isTitle) {
            if (isSliderSelected) {
                return 'on-slider'

            } else if (isAfterSliderSelected) {
                return 'after-slider'

            } else {
                return 'before-slider'
            }
        }

        return ''
    }

    render() {
        const { handleLyricAnnotationSelect,
                handleLyricPlay,
                handleLyricVerseSelect,
                handleVerseInteractivate,
                isSliderSelected,

                ...other } = this.props,

            { inVerseBar,
              verseObject,
              isSelected,
              isInteractivated } = other,

            { lyric,
              centre,
              isTitle,
              verseIndex } = verseObject,

            isInteractable = !isNaN(verseIndex),


            // If not an interactable verse, we'll count it as odd.
            isEven = isInteractable && verseIndex % 2 === 0,
            backgroundClassName = this._getBackgroundClassName(isEven),
            sliderPlacementClassName = this._getSliderPlacementClassName(),
            interactivatedClassName = isInteractivated ? 'interactivated' : 'not-interactivated',
            verseIndexClassName = `${inVerseBar ? 'bar-' : ''}${isInteractable ? 'verse-' + verseIndex : ''}`,

            // Allow clicks on interactable verses.
            handleInteractivatableClick = !inVerseBar && isInteractable ? e => handleVerseInteractivate(e, verseIndex) : null

        let handleLyricAudioButtonClick = null

        if (isInteractable) {
            // If verse is selected, audio button will toggle play.
            if (isSelected) {
                handleLyricAudioButtonClick = handleLyricPlay

            // Otherwise, audio button will select verse.
            } else {
                handleLyricAudioButtonClick = e => handleLyricVerseSelect(e, verseIndex)
            }
        }

        return (
            <VerseUnitView {...other}
                myRef={(node) => (this.myVerse = node)}
                verseIndexClassName={verseIndexClassName}
                backgroundClassName={backgroundClassName}
                isAudioButtonEnabled={isInteractivated}
                sliderPlacementClassName={sliderPlacementClassName}
                interactivatedClassName={interactivatedClassName}
                isTitle={isTitle}
                isSelected={isSelected}
                isSliderSelected={isSliderSelected}
                isInteractable={isInteractable}
                isDoubleSpeaker={!lyric && !centre}
                handleLyricAudioButtonClick={handleLyricAudioButtonClick}
                handleAnchorClick={handleLyricAnnotationSelect}
                handleInteractivatableClick={handleInteractivatableClick}
            />
        )
    }
}

VerseUnit.propTypes = {
    verseObject: PropTypes.object.isRequired,
    isSelected: PropTypes.bool.isRequired,
    isAfterSelected: PropTypes.bool.isRequired,
    isSliderSelected: PropTypes.bool.isRequired,
    isInteractivated: PropTypes.bool.isRequired,
    inMain: PropTypes.bool,
    inVerseBar: PropTypes.bool,
    isSliderTouched: PropTypes.bool,
    handleLyricAnnotationSelect: PropTypes.func,
    handleLyricPlay: PropTypes.func,
    handleLyricVerseSelect: PropTypes.func,
    handleVerseInteractivate: PropTypes.func
}

VerseUnit.defaultProps = {
    isSelected: false,
    isAfterSelected: false,
    isSliderSelected: false,
    isInteractivated: false
}

/****************
 * PRESENTATION *
 ****************/

const VerseUnitView = ({
    // From props.
    verseObject,
    inVerseBar,

    // From controller.
    myRef,
    verseIndexClassName,
    backgroundClassName,
    isAudioButtonEnabled,
    isInteractable,
    sliderPlacementClassName,
    interactivatedClassName,
    isSelected,
    isPlaying,
    isAfterSelected,
    isDoubleSpeaker,
    isTitle,
    handleLyricAudioButtonClick,
    handleInteractivatableClick,

...other }) => {
    // FIXME: Not ideal.
    const getVerseLine = ({ key, isHidden, index, columnKey, other }) => {

        const lyricsLineProps = {
                inVerseBar,
                verseSelected: isSelected,
                text: key ? verseObject[key] : verseObject[LYRIC] || verseObject[CENTRE],
                isVerseBeginningSpan: verseObject.isVerseBeginningSpan,
                isVerseEndingSpan: verseObject.isVerseEndingSpan,
                isHidden,
                columnKey
            }

        if (typeof index !== 'undefined') {
            lyricsLineProps.key = index
        }

        return <VerseLine {...other} {...lyricsLineProps} />
    }

    const { hiddenLyricColumnKey } = other

    return (
        <div
            ref={myRef}
            className={classnames(
                'verse',
                verseIndexClassName,
                backgroundClassName,
                interactivatedClassName,
                sliderPlacementClassName,
                { 'selected': isSelected,
                  'interactable': isInteractable }
            )}
            onClick={handleInteractivatableClick}
        >
            {isInteractable && !inVerseBar &&
                <VerseAudioButton
                    isAudioButtonEnabled={isAudioButtonEnabled}
                    isSelected={isSelected}
                    isPlaying={isPlaying}
                    isAfterSelected={isAfterSelected}
                    handleAudioButtonClick={handleLyricAudioButtonClick}
                />
            }
            {isDoubleSpeaker ? (
                <div className={classnames(
                    'double-lines-block',
                    { 'hidden-left': hiddenLyricColumnKey === LEFT }
                )}>
                    {DOUBLESPEAKER_KEYS.map((key, index) => {
                        return getVerseLine({
                            key,
                            isHidden: key === hiddenLyricColumnKey,
                            index,
                            columnKey: key,
                            other
                        })
                    })}
                </div>
            ) : (
                getVerseLine({
                    columnKey: isTitle ? TITLE : LEFT,
                    other
                })
            )}
        </div>
    )
}

VerseUnitView.propTypes = {
    verseObject: PropTypes.object.isRequired,
    hiddenLyricColumnKey: PropTypes.string,
    isTitle: PropTypes.bool,
    inVerseBar: PropTypes.bool,
    isPlaying: PropTypes.bool,
    isAudioButtonEnabled: PropTypes.bool.isRequired,
    isInteractable: PropTypes.bool.isRequired,
    isSelected: PropTypes.bool.isRequired,
    isAfterSelected: PropTypes.bool.isRequired,
    isDoubleSpeaker: PropTypes.bool.isRequired,
    verseIndexClassName: PropTypes.string.isRequired,
    backgroundClassName: PropTypes.string.isRequired,
    sliderPlacementClassName: PropTypes.string.isRequired,
    interactivatedClassName: PropTypes.string.isRequired,
    myRef: PropTypes.func.isRequired,
    handleLyricAudioButtonClick: PropTypes.func,
    handleInteractivatableClick: PropTypes.func
}

export default connect(({
    selectedSongIndex
}) => ({
    selectedSongIndex
}))(VerseUnit)
