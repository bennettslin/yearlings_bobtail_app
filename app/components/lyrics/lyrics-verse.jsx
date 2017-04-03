import React, { Component } from 'react'
import classnames from 'classnames'

import LyricsLine from './lyrics-line'
import LyricsAudioButton from './lyrics-audio-button'
import { DOUBLESPEAKER_KEYS, TITLE, LEFT } from '../../helpers/constants'
import { getPropsAreSame } from '../../helpers/general-helper'

/*************
 * CONTAINER *
 *************/

const LyricsVerse = ({

    inMain,
    verseBarHidden,
    accessedVerseIndex,
    selectedVerseIndex,
    interactivatedVerseIndex,
    handleLyricAnnotationSelect,
    handleLyricPlay,
    handleLyricVerseSelect,
    handleVerseInteractivate,
    sliderMousedOrTouched,
    sliderVerseIndex,

...other }) => {

    const { inVerseBar,
            verseObject } = other,
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
        isInteractable = !isNaN(time),

        // If verse bar is shown, selected verse is not hoverable or interactivatable.
        notVerseBarPrevented = verseBarHidden || !isSelected,

        isInteractivated = interactivatedVerseIndex === verseIndex,
        isHoverable = inMain &&
            !isInteractivated &&
            !isTitle &&
            interactivatedVerseIndex === -1 &&
            notVerseBarPrevented,

        isAfterSelected = verseIndex > selectedVerseIndex,
        accessHighlighted = accessedVerseIndex === verseIndex,
        isDoubleSpeaker = !lyric,
        handleAnchorClick = handleLyricAnnotationSelect,

        // Allows clicks on selected or interactivated verse to deinteractivate it.
        handleInteractivatableClick = !inVerseBar && notVerseBarPrevented && !isInteractivated ? e => handleVerseInteractivate(e, verseIndex) : null,

        /**
         * Audio button is enabled when it's the interactivated verse.
         */
        isAudioButtonEnabled = isInteractivated,

        hasVerseIndex = !isNaN(verseIndex),

        // If no verse index, we'll count it as odd.
        isEven = hasVerseIndex && verseIndex % 2 === 0,

        verseIndexClassName = `${inVerseBar ? 'bar-' : ''}${hasVerseIndex ? 'verse-' + verseIndex : ''}`

    let sliderPlacementClassName = ''

    if (sliderMousedOrTouched && inMain && !isTitle) {
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
            handleLyricAudioButtonClick={handleLyricAudioButtonClick}
            handleAnchorClick={handleAnchorClick}
            handleInteractivatableClick={handleInteractivatableClick}
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
    }

    componentDidMount() {
        this._checkIsSelectedVerse(this.props)
    }

    shouldComponentUpdate(nextProps) {
        return !getPropsAreSame(this.props, nextProps)
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
                handleLyricAudioButtonClick,
                handleInteractivatableClick,

            ...other } = this.props

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
                      'access-highlighted': accessHighlighted && !isSelected,
                      'interactable': isInteractable,
                      'hoverable': isHoverable }
                )}
                onClick={handleInteractivatableClick}
            >
                {isInteractable && !inVerseBar &&
                    <LyricsAudioButton
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
                        hiddenLyricColumnKey && `hidden-${hiddenLyricColumnKey}`
                    )}>
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
