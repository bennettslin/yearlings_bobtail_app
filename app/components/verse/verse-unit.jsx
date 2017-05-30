import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import VerseLine from './verse-line'
import VerseAudioButton from './verse-audio-button'
import { DOUBLESPEAKER_KEYS, TITLE, LEFT } from '../../helpers/constants'
import { getComponentShouldUpdate } from '../../helpers/general-helper'

/*************
 * CONTAINER *
 *************/

class VerseUnit extends Component {

    shouldComponentUpdate(nextProps) {
        const { props } = this,
            componentShouldUpdate = getComponentShouldUpdate({
                props,
                nextProps,
                updatingPropsArray: [
                    'deviceIndex',
                    'appMounted',
                    'isPortrait',
                    'verseBarHidden',
                    'sliderMousedOrTouched',
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

    render() {
        const { inMain,
                verseBarHidden,
                handleLyricAnnotationSelect,
                handleLyricPlay,
                handleLyricVerseSelect,
                handleVerseInteractivate,
                sliderMousedOrTouched,
                isSliderSelected,
                isAfterSliderSelected,

                ...other } = this.props,

            { inVerseBar,
              verseObject,
              isSelected,
              isInteractivated } = other,

            { lyric,
              isTitle,
              time,
              verseIndex } = verseObject,

            /**
             * Not interactable if technically selected, but currently not selected
             * due to verse bar shown.
             */
            isInteractable = !isNaN(time),

            // If verse bar is shown, selected verse is not hoverable or interactivatable.
            notVerseBarPrevented = verseBarHidden || !isSelected,

            // Allows clicks on selected or interactivated verse to deinteractivate it.
            handleInteractivatableClick = !inVerseBar && notVerseBarPrevented && !isInteractivated ? e => handleVerseInteractivate(e, verseIndex) : null,

            // If not an interactable verse, we'll count it as odd.
            isEven = isInteractable && verseIndex % 2 === 0,

            verseIndexClassName = `${inVerseBar ? 'bar-' : ''}${isInteractable ? 'verse-' + verseIndex : ''}`

        let sliderPlacementClassName = ''

        if (sliderMousedOrTouched && inMain && !isTitle) {
            if (isSliderSelected) {
                sliderPlacementClassName = 'on-slider'

            } else if (isAfterSliderSelected) {
                sliderPlacementClassName = 'after-slider'

            } else {
                sliderPlacementClassName = 'before-slider'
            }
        }

        let backgroundClassName = '',
            interactivatedClassName = ''

        if (!inVerseBar) {
            if (isTitle) {
                backgroundClassName = 'title'
            } else if (inMain) {
                backgroundClassName = isEven ? 'even' : 'odd'
            } else {
                backgroundClassName = 'in-side'
            }

            interactivatedClassName = isInteractivated ? 'interactivated' : 'not-interactivated'
        }

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
                verseIndexClassName={verseIndexClassName}
                backgroundClassName={backgroundClassName}
                isAudioButtonEnabled={isInteractivated}
                isTitle={isTitle}
                isSelected={isSelected}
                isSliderSelected={isSliderSelected}
                isInteractable={isInteractable}
                sliderPlacementClassName={sliderPlacementClassName}
                interactivatedClassName={interactivatedClassName}
                isDoubleSpeaker={!lyric}
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
    verseBarHidden: PropTypes.bool,
    sliderMousedOrTouched: PropTypes.bool,
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

class VerseUnitView extends Component {

    constructor(props) {
        super(props)

        this._checkIsSelectedVerse = this._checkIsSelectedVerse.bind(this)
        this._checkIsSliderSelectedVerse = this._checkIsSliderSelectedVerse.bind(this)
    }

    componentDidMount() {
        this._checkIsSelectedVerse(this.props)
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

    getVerseLine({ key, index, columnKey, other }) {

        const { isSelected,
                inVerseBar,
                verseObject } = this.props,

            lyricsLineProps = {
                inVerseBar,
                verseSelected: isSelected,
                text: key ? verseObject[key] : verseObject.lyric,
                firstVerseObject: verseObject.firstVerseObject,
                lastVerseObject: verseObject.lastVerseObject,
                columnKey
            }

        if (typeof index !== 'undefined') {
            lyricsLineProps.key = index
        }

        return <VerseLine {...other} {...lyricsLineProps} />
    }

    render() {

                // From props.
        const { verseObject,
                inVerseBar,

                // From controller.
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

            ...other } = this.props,

            { hiddenLyricColumnKey } = other

        return (
            <div
                ref={(node) => (this.myVerse = node)}
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
                        { 'hidden-left': hiddenLyricColumnKey === 'left' }
                    )}>
                        {DOUBLESPEAKER_KEYS.filter(key => {
                            return key === hiddenLyricColumnKey ? false : verseObject[key]
                        }).map((key, index) => {
                            return this.getVerseLine({
                                key,
                                index,
                                columnKey: key,
                                other
                            })
                        })}
                    </div>
                ) : (
                    this.getVerseLine({
                        columnKey: isTitle ? TITLE : LEFT,
                        other
                    })
                )}
            </div>
        )
    }
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
    handleLyricAudioButtonClick: PropTypes.func,
    handleInteractivatableClick: PropTypes.func
}

export default VerseUnit
