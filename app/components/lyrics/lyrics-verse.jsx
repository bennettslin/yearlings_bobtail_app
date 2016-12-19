import React from 'react'
import LyricsPlayButton from './lyrics-play-button'
import LyricsLine from './lyrics-line'
import { DOUBLESPEAKER_KEYS, TITLE, LEFT } from 'helpers/constants'
import { LYRIC_VERSE_ELEMENT } from 'helpers/constants'

/*************
 * CONTAINER *
 *************/

const LyricsVerse = ({

    verseObject,
    sectionAccessHighlighted,
    accessedLyricElement,
    accessedVerseIndex,
    selectedVerseIndex,
    lyricsStartAtZero,
    onAnnotationClick,
    onVerseClick,

...other }) => {

    const { lyric,
            isTitle,
            time,
            verseIndex } = verseObject,

        isSelected = verseIndex === selectedVerseIndex,
        accessHighlighted = sectionAccessHighlighted && accessedVerseIndex === verseIndex && accessedLyricElement === LYRIC_VERSE_ELEMENT,
        isDoubleSpeaker = !lyric,
        isInteractable = !isNaN(time) && !(verseIndex === 0 && lyricsStartAtZero),
        onPlayClick = isInteractable && !isSelected ? e => onVerseClick(e, verseIndex) : null,
        onAnchorClick = onAnnotationClick

    return (
        <LyricsVerseView {...other}
            verseObject={verseObject}
            accessHighlighted={accessHighlighted}
            sectionAccessHighlighted={sectionAccessHighlighted}
            accessedLyricElement={accessedLyricElement}
            isTitle={isTitle}
            isSelected={isSelected}
            isInteractable={isInteractable}
            isDoubleSpeaker={isDoubleSpeaker}
            onPlayClick={onPlayClick}
            onAnchorClick={onAnchorClick}
        />
    )
}

/****************
 * PRESENTATION *
 ****************/

const LyricsVerseView = ({

    // From props.
    verseObject,
    hiddenLyricColumnKey,

    // From controller.
    accessHighlighted,
    isInteractable,
    isSelected,
    isDoubleSpeaker,
    isTitle,
    onPlayClick,
    onMouseEnter,
    onMouseLeave,

...other }) => (

    <div className={`verse verse-${verseObject.verseIndex}${isSelected ? ' selected' : ''}${accessHighlighted ? ' access-highlighted' : ''}${isInteractable ? ' interactable' : ''}`}
    >
        {isInteractable ?
            <LyricsPlayButton
                isSelected={isSelected}
                onClick={onPlayClick}
            /> : null
        }
        {isDoubleSpeaker ? (
            <div className={`double-lines-block${hiddenLyricColumnKey ? ' hidden-' + hiddenLyricColumnKey : ''}`}>
                {DOUBLESPEAKER_KEYS.filter(key => {
                    return key === hiddenLyricColumnKey && other.showSingleLyricColumn ? false : verseObject[key]
                }).map((key, index) => {
                    return (
                        <LyricsLine {...other}
                            key={index}
                            verseIndexForDebugging={verseObject.verseIndex}
                            text={verseObject[key]}
                            columnKey={key}
                        />
                    )
                })}
            </div>
            ) : (
                <LyricsLine {...other}
                    text={verseObject.lyric}
                    verseIndexForDebugging={verseObject.verseIndex}
                    columnKey={isTitle ? TITLE : LEFT}
                />
            )
        }
    </div>
)

export default LyricsVerse
