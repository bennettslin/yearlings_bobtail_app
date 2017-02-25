import React, { Component } from 'react'
import LyricsLine from './lyrics-line'
import LyricsAudioButton from './lyrics-audio-button'
import { DOUBLESPEAKER_KEYS, TITLE, LEFT, LYRIC_VERSE_ELEMENT } from 'helpers/constants'
import { getPropsAreSame } from 'helpers/general-helper'

/*************
 * CONTAINER *
 *************/

const LyricsVerse = ({

    verseBarShown,
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

        isTechnicallySelected = verseIndex === selectedVerseIndex,

        // FIXME: Not sure why this doesn't work:
        // isSelected = isTechnicallySelected && !(verseBarShown && !inVerseBar),
        isSelected = isTechnicallySelected,

        /**
         * Not interactable if technically selected, but currently not selected
         * due to verse bar shown.
         */
        isInteractable = !isNaN(time) && !(verseIndex === 0 && lyricsStartAtZero) && !(isTechnicallySelected && !isSelected),

        isInteractivated = !isTechnicallySelected && interactivatedVerseIndex === verseIndex,
        isHoverable = !isTechnicallySelected && !isInteractivated && interactivatedVerseIndex === -1,

        isAfterSelected = verseIndex > selectedVerseIndex,
        accessHighlighted = sectionAccessHighlighted && accessedVerseIndex === verseIndex && accessedLyricElement === LYRIC_VERSE_ELEMENT,
        isDoubleSpeaker = !lyric,
        onAnchorClick = onAnnotationClick,

        // Allows clicks on selected or interactivated verse to deinteractivate it.
        onInteractivatableClick = !isTechnicallySelected && !isInteractivated ? e => onInteractivatedVerseClick(e, verseIndex) : null

    let onLyricPlayClick = null

    // console.error('verseBarShown', verseBarShown);

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
                        isSelected={isSelected}
                        isPlaying={isPlaying}
                        isAfterSelected={isAfterSelected}
                        onClick={onLyricPlayClick}
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
