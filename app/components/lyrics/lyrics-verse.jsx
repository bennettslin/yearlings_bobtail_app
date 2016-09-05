import React from 'react'
import TextBlock from '../text/text-block'
import LyricsPlayButton from './lyrics-play-button'
import { DOUBLESPEAKER_KEYS } from 'helpers/constants'

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

    <div className={`verse${isSelected ? ' selected' : ''}${isInteractable ? ' interactable' : ''}`}
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
                <div className={`line${isTitle ? '' : ' left'}`}>
                    <TextBlock {...other}
                        isLyric={true}
                        text={verseObject.lyric}
                    />
                </div>
            ) : (
                <div className="double-lines-block">
                    {DOUBLESPEAKER_KEYS.filter(key => {
                        if (key === hiddenLyricColumnKey) { return false }
                        return verseObject[key]
                    }).map((key, index) => {
                        return (
                            <div
                                key={index}
                                className={`line ${hiddenLyricColumnKey ? 'left' : key}`}
                            >
                                <TextBlock {...other}
                                    isLyric={true}
                                    text={verseObject[key]}
                                />
                            </div>
                        )
                    })}
                </div>
            )
        }
    </div>
)

export default LyricsVerse
