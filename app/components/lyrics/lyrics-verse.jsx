import React, { Component } from 'react'
import LyricsLine from './lyrics-line'
import LyricsAudioButton from './lyrics-audio-button'
import { DOUBLESPEAKER_KEYS, TITLE, LEFT, LYRIC_VERSE_ELEMENT } from 'helpers/constants'
import { getPropsAreSame } from 'helpers/general-helper'

/*************
 * CONTAINER *
 *************/

const LyricsVerse = ({

    // verseBarShown,
    inMain,
    accessedVerseIndex,
    selectedVerseIndex,
    interactivatedVerseIndex,
    lyricsStartAtZero,
    handleLyricAnnotationSelect,
    handleLyricAudioSelect,
    handleLyricVerseInteractivate,
    sliderMousedOrTouched,
    sliderVerseIndex,

...other }) => {

    const { inVerseBar,
            verseObject,
            sectionAccessHighlighted,
            accessedLyricElement } = other,
        { lyric,
          isTitle,
          time,
          verseIndex } = verseObject,

        isSelected = verseIndex === selectedVerseIndex,
        isSliderSelected = !isNaN(sliderVerseIndex) && verseIndex === sliderVerseIndex,

        /**
         * Not interactable if technically selected, but currently not selected
         * due to verse bar shown.
         */
        isInteractable = !isNaN(time) && !(verseIndex === 0 && lyricsStartAtZero) && !(isSelected && !isSelected),

        isInteractivated = interactivatedVerseIndex === verseIndex,
        isHoverable = inMain && !isInteractivated && interactivatedVerseIndex === -1,

        isAfterSelected = verseIndex > selectedVerseIndex,
        accessHighlighted = sectionAccessHighlighted && accessedVerseIndex === verseIndex && accessedLyricElement === LYRIC_VERSE_ELEMENT,
        isDoubleSpeaker = !lyric,
        onAnchorClick = handleLyricAnnotationSelect,

        // Allows clicks on selected or interactivated verse to deinteractivate it.
        onInteractivatableClick = !inVerseBar && !isInteractivated ? e => handleLyricVerseInteractivate(e, verseIndex) : null,

        /**
         * Audio button is enabled when it's the interactivated verse.
         */
        isAudioButtonEnabled = isInteractivated,

        hasVerseIndex = !isNaN(verseIndex),

        // If no verse index, we'll count it as odd.
        isEven = hasVerseIndex && verseIndex % 2 === 0,

        verseIndexClassName = ` ${inVerseBar ? 'bar-' : ''}${hasVerseIndex ? 'verse-' + verseIndex : ''}`

    let sliderPlacementClassName = ''

    if (sliderMousedOrTouched) {
        if (verseIndex < sliderVerseIndex) {
            sliderPlacementClassName = 'before-slider'
        } else if (verseIndex > sliderVerseIndex) {
            sliderPlacementClassName = 'after-slider'
        } else {
            sliderPlacementClassName = 'on-slider'
        }
    }

    let backgroundClassName = '',
        interactivatedClassName = ''

    if (!inVerseBar) {
        if (inMain) {
            backgroundClassName = isEven ? 'even' : 'odd'
        } else {
            backgroundClassName = 'in-side'
        }

        interactivatedClassName = isInteractivated ? 'interactivated' : 'not-interactivated'
    }

    let onLyricAudioClick = null

    if (isInteractable) {

        // If verse is selected, audio button will toggle play.
        if (isSelected) {
            onLyricAudioClick = handleLyricAudioSelect

        // Otherwise, audio button will select verse.
        } else {
            onLyricAudioClick = e => handleLyricAudioSelect(e, verseIndex)
        }
    }

    return (
        <LyricsVerseView {...other}
            verseIndexClassName={verseIndexClassName}
            backgroundClassName={backgroundClassName}
            accessHighlighted={accessHighlighted}
            isAudioButtonEnabled={isAudioButtonEnabled}
            isTitle={isTitle}
            isSelected={isSelected}
            isSliderSelected={isSliderSelected}
            isAfterSelected={isAfterSelected}
            isInteractable={isInteractable}
            isHoverable={isHoverable}
            sliderPlacementClassName={sliderPlacementClassName}
            interactivatedClassName={interactivatedClassName}
            isDoubleSpeaker={isDoubleSpeaker}
            onLyricAudioClick={onLyricAudioClick}
            onAnchorClick={onAnchorClick}
            onInteractivatableClick={onInteractivatableClick}
        />
    )
}

/****************
 * PRESENTATION *
 ****************/

class LyricsVerseView extends Component {

    constructor(props) {
        super(props)

        this._checkIsSelectedVerse = this._checkIsSelectedVerse.bind(this)
        this._checkIsSliderSelectedVerse = this._checkIsSliderSelectedVerse.bind(this)
        // this._handleMouseOver = this._handleMouseOver.bind(this)
        // this._handleMouseLeave = this._handleMouseLeave.bind(this)
    }

    shouldComponentUpdate(nextProps) {
        return !getPropsAreSame(this.props, nextProps)
    }

    componentWillUpdate(nextProps) {
        this._checkIsSelectedVerse(nextProps)

        if (nextProps.isSliderSelected && !this.props.isSliderSelected) {
            this._checkIsSliderSelectedVerse(nextProps)
        }
    }

    _checkIsSelectedVerse(props) {
        if (props.isSelected) {
            props.onSelectVerseElement(this.myVerse)
        }
    }

    _checkIsSliderSelectedVerse(props) {
        props.onSliderSelectVerseElement(this.myVerse)
    }

    getLyricsLine({ key, index, columnKey, other }) {

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

        return <LyricsLine {...other} {...lyricsLineProps} />
    }

    render() {

                // From props.
        const { verseObject,
                hiddenLyricColumnKey,
                inVerseBar,

                // From controller.
                verseIndexClassName,
                backgroundClassName,
                accessHighlighted,
                isAudioButtonEnabled,
                isInteractable,
                isHoverable,
                sliderPlacementClassName,
                interactivatedClassName,
                isSelected,
                isPlaying,
                isAfterSelected,
                isDoubleSpeaker,
                isTitle,
                onLyricAudioClick,
                onInteractivatableClick,

            ...other } = this.props

        return (
            <div
                ref={(node) => (this.myVerse = node)}
                className={`
                    verse
                    ${verseIndexClassName}
                    ${backgroundClassName}
                    ${isSelected ? 'selected' : ''}
                    ${accessHighlighted ? 'access-highlighted' : ''}
                    ${isInteractable ? 'interactable' : ''}
                    ${interactivatedClassName}
                    ${isHoverable ? 'hoverable' : ''}
                    ${sliderPlacementClassName}
                `}
                onClick={onInteractivatableClick}
                // onMouseOver={this._handleMouseOver}
                // onMouseLeave={this._handleMouseLeave}
            >
                {isInteractable && !inVerseBar &&
                    <LyricsAudioButton
                        isAudioButtonEnabled={isAudioButtonEnabled}
                        isSelected={isSelected}
                        isPlaying={isPlaying}
                        isAfterSelected={isAfterSelected}
                        onAudioButtonClick={onLyricAudioClick}
                    />
                }
                {isDoubleSpeaker ? (
                    <div className={`double-lines-block${hiddenLyricColumnKey ? ' hidden-' + hiddenLyricColumnKey : ''}`}>
                        {DOUBLESPEAKER_KEYS.filter(key => {
                            return key === hiddenLyricColumnKey && other.showSingleLyricColumn ? false : verseObject[key]
                        }).map((key, index) => {
                            return this.getLyricsLine({
                                key,
                                index,
                                columnKey: key,
                                other
                            })
                        })}
                    </div>
                ) : (
                    this.getLyricsLine({
                        columnKey: isTitle ? TITLE : LEFT,
                        other
                    })
                )}
            </div>
        )
    }
}

export default LyricsVerse
