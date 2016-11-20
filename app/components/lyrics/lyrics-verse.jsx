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
    hoveredLineIndex,
    lyricsStartAtZero,
    onAnnotationClick,
    onVerseClick,
    onLineHover,

...other }) => {

    const { lyric,
            isTitle,
            time,
            verseIndex } = verseObject,

        isSelected = verseIndex === selectedVerseIndex,
        accessHighlighted = sectionAccessHighlighted && accessedVerseIndex === verseIndex && accessedLyricElement === LYRIC_VERSE_ELEMENT,

        /**
         * TODO: If there is no duration between time and nextTime, it can be
         * selected but not marked as selected. This feature was previously
         * implemented, but was dependent on the next time value, so was
         * removed.
         */
        isHovered = verseIndex === hoveredLineIndex,
        isSingleSpeaker = !!lyric,
        isInteractable = !isNaN(time) && !(verseIndex === 0 && lyricsStartAtZero),
        onPlayClick = isInteractable && !isSelected ? e => onVerseClick(e, verseIndex) : null,
        onAnchorClick = onAnnotationClick,
        onMouseEnter = onLineHover ? e => onLineHover(e, verseIndex) : null,
        onMouseLeave = onLineHover ? e => onLineHover(e) : null

    return (
        <LyricsVerseView {...other}
            verseObject={verseObject}
            time={time}
            accessHighlighted={accessHighlighted}
            sectionAccessHighlighted={sectionAccessHighlighted}
            accessedLyricElement={accessedLyricElement}
            isTitle={isTitle}
            isHovered={isHovered}
            isSelected={isSelected}
            isInteractable={isInteractable}
            isSingleSpeaker={isSingleSpeaker}
            onPlayClick={onPlayClick}
            onAnchorClick={onAnchorClick}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
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
    time,
    accessHighlighted,
    isInteractable,
    isSelected,
    isHovered,
    isSingleSpeaker,
    isTitle,
    onPlayClick,
    onMouseEnter,
    onMouseLeave,

...other }) => (

    <div className={`verse verse-${verseObject.verseIndex}${isSelected ? ' selected' : ''}${accessHighlighted ? ' access-highlighted' : ''}${isInteractable ? ' interactable' : ''}`}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
    >
        {isInteractable ?
            <LyricsPlayButton
                time={time}
                isHovered={isHovered}
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
                        if (key === hiddenLyricColumnKey) { return false }
                        return verseObject[key]
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
