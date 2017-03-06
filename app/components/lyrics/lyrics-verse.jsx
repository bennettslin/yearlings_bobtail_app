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
    accessedVerseIndex,
    selectedVerseIndex,
    interactivatedVerseIndex,
    lyricsStartAtZero,
    onAnnotationClick,
    onVerseClick,
    onPlayClick,
    onInteractivatedVerseClick,

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

        /**
         * Not interactable if technically selected, but currently not selected
         * due to verse bar shown.
         */
        isInteractable = !isNaN(time) && !(verseIndex === 0 && lyricsStartAtZero) && !(isSelected && !isSelected),

        isInteractivated = interactivatedVerseIndex === verseIndex,
        isHoverable = !isInteractivated && interactivatedVerseIndex === -1,

        isAfterSelected = verseIndex > selectedVerseIndex,
        accessHighlighted = sectionAccessHighlighted && accessedVerseIndex === verseIndex && accessedLyricElement === LYRIC_VERSE_ELEMENT,
        isDoubleSpeaker = !lyric,
        onAnchorClick = onAnnotationClick,

        // Allows clicks on selected or interactivated verse to deinteractivate it.
        onInteractivatableClick = !inVerseBar && !isInteractivated ? e => onInteractivatedVerseClick(e, verseIndex) : null,

        /**
         * Audio button is enabled when it's the interactivated verse, or when
         * there is no interactivated verse
         */
        isAudioButtonEnabled = interactivatedVerseIndex === -1 || isInteractivated

    let onLyricPlayClick = null

    if (isInteractable) {

        // If verse is selected, play button will toggle play.
        if (isSelected) {
            onLyricPlayClick = onPlayClick

        // Otherwise, play button will select verse.
        } else {
            onLyricPlayClick = e => onVerseClick(e, verseIndex)
        }
    }

    return (
        <LyricsVerseView {...other}
            accessHighlighted={accessHighlighted}
            isAudioButtonEnabled={isAudioButtonEnabled}
            isTitle={isTitle}
            isSelected={isSelected}
            isAfterSelected={isAfterSelected}
            isInteractable={isInteractable}
            isInteractivated={isInteractivated}
            isHoverable={isHoverable}
            isDoubleSpeaker={isDoubleSpeaker}
            onLyricPlayClick={onLyricPlayClick}
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
    }

    componentDidMount() {
        // Ref is only available after mounting.
        this._checkIsSelectedVerse(this.props)
    }

    shouldComponentUpdate(nextProps) {
        return !getPropsAreSame(this.props, nextProps)
    }

    componentWillUpdate(nextProps) {
        this._checkIsSelectedVerse(nextProps)
    }

    _checkIsSelectedVerse(props) {
        if (props.isSelected) {
            props.onSelectVerseElement(this.myVerse)
        }
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
                accessHighlighted,
                isAudioButtonEnabled,
                isInteractable,
                isInteractivated,
                isHoverable,
                isSelected,
                isPlaying,
                isAfterSelected,
                isDoubleSpeaker,
                isTitle,
                onLyricPlayClick,
                onInteractivatableClick,

            ...other } = this.props,

            { verseIndex } = verseObject,

            hasVerseIndex = !isNaN(verseIndex),

            // If no verse index, we'll count it as odd.
            isEven = hasVerseIndex && verseIndex % 2 === 0,

            verseIndexClass = ` ${inVerseBar ? 'bar-' : ''}${hasVerseIndex ? 'verse-' + verseIndex : ''}`,

            audioStatusClassName = isSelected ? 'audio-colour' : ''

        return (
            <div
                ref={(node) => (this.myVerse = node)}
                className={`
                    verse
                    ${verseIndexClass}
                    ${isEven ? 'even' : 'odd'}
                    ${isSelected ? 'selected' : ''}
                    ${audioStatusClassName}
                    ${accessHighlighted ? 'access-highlighted' : ''}
                    ${isInteractable ? 'interactable' : ''}
                    ${isInteractivated ? 'interactivated' : ''}
                    ${isHoverable ? 'hoverable' : ''}
                `}
                onClick={onInteractivatableClick}
            >
                {isInteractable && !inVerseBar &&
                    <LyricsAudioButton
                        isAudioButtonEnabled={isAudioButtonEnabled}
                        isSelected={isSelected}
                        isPlaying={isPlaying}
                        isAfterSelected={isAfterSelected}
                        onAudioButtonClick={onLyricPlayClick}
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
