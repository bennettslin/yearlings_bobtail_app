import React from 'react'
import LyricsPlayButton from './lyrics-play-button'
import LyricsLine from './lyrics-line'
import { DOUBLESPEAKER_KEYS, TITLE, LEFT } from 'helpers/constants'

/*************
 * CONTAINER *
 *************/

const LyricsVerse = ({

    verseObject,
    selectedTime,
    hoveredLineIndex,
    onAnnotationClick,
    onTimeClick,
    onLineHover,

...other }) => {

    const { lyric,
            isTitle,
            time,
            nextTime,
            lineIndex } = verseObject,

        /**
         * It's selected if it's between time and nextTime.
         */
        isSelected = (time <= selectedTime && selectedTime < nextTime),

        /**
         * If there is no duration between time and nextTime, it can be
         * selected but not marked as selected.
         */
        isSameTimeSelected = time === selectedTime && time === nextTime,
        isHovered = lineIndex === hoveredLineIndex,
        isSingleSpeaker = !!lyric,
        isInteractable = !isNaN(time) && !isSameTimeSelected,
        onPlayButtonClick = isInteractable && !isSelected ? e => onTimeClick(e, time) : null,
        onAnchorClick = onAnnotationClick,
        onMouseEnter = onLineHover ? e => onLineHover(e, lineIndex) : null,
        onMouseLeave = onLineHover ? e => onLineHover(e) : null

    return (
        <LyricsVerseView {...other}
            verseObject={verseObject}
            time={time}
            isTitle={isTitle}
            isHovered={isHovered}
            isSelected={isSelected}
            isInteractable={isInteractable}
            isSingleSpeaker={isSingleSpeaker}
            onPlayButtonClick={onPlayButtonClick}
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
    isInteractable,
    isSelected,
    isHovered,
    isSingleSpeaker,
    isTitle,
    onPlayButtonClick,
    onMouseEnter,
    onMouseLeave,

...other }) => (

    <div className={`verse verse-${verseObject.lineIndex || 'timeless'}${isSelected ? ' selected' : ''}${isInteractable ? ' interactable' : ''}`}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
    >
        {isInteractable ?
            <LyricsPlayButton
                time={time}
                isHovered={isHovered}
                isSelected={isSelected}
                onClick={onPlayButtonClick}
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
