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
        isSingleSpeaker = !!lyric,
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
            isSingleSpeaker={isSingleSpeaker}
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
    isSingleLyricColumn,
    hiddenLyricColumnKey,

    // From controller.
    accessHighlighted,
    isInteractable,
    isSelected,
    isSingleSpeaker,
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
        {isSingleSpeaker ? (
                <LyricsLine {...other}
                    text={verseObject.lyric}
                    columnKey={isTitle ? TITLE : LEFT}
                />
            ) : (
                <div className="double-lines-block">
                    {DOUBLESPEAKER_KEYS.filter(key => {
                        return key === hiddenLyricColumnKey && isSingleLyricColumn ? false : verseObject[key]
                    }).map((key, index) => {
                        return (
                            <LyricsLine {...other}
                                key={index}
                                text={verseObject[key]}
                                columnKey={hiddenLyricColumnKey ? LEFT : key}
                            />
                        )
                    })}
                </div>
            )
        }
    </div>
)

export default LyricsVerse
