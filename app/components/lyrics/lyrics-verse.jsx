import React from 'react'
import TextBlock from '../text/text-block'
import LyricsPlayButton from './lyrics-play-button'
import { DOUBLESPEAKER_KEYS } from 'helpers/constants'

/*************
 * CONTAINER *
 *************/

const LyricsVerse = (props) => {

    const { verseObject,
            selectedTime,
            hoveredLineIndex,
            onTimeClick,
            onLineHover } = props,
        { lyric,
          isTitle,
          time,
          nextTime,
          lineIndex } = verseObject,

        /**
         * It's selected if it's between time and nextTime, or if all three
         * times are equal (such as in the title, when the verse starts at 0.)
         */
        isSelected = (time <= selectedTime && selectedTime < nextTime) ||
                   (time === selectedTime && nextTime === selectedTime),
        isHovered = lineIndex === hoveredLineIndex && !isSelected,
        isSingleSpeaker = !!lyric,
        isInteractable = !isNaN(time),
        onClick = isInteractable ? e => onTimeClick(e, time) : null,
        onMouseEnter = onLineHover ? e => onLineHover(e, lineIndex) : null,
        onMouseLeave = onLineHover ? e => onLineHover(e) : null

    return (
        <LyricsVerseView {...props}
            time={time}
            isTitle={isTitle}
            isHovered={isHovered}
            isSelected={isSelected}
            isInteractable={isInteractable}
            isSingleSpeaker={isSingleSpeaker}
            onClick={onClick}
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
    selectedAnnotationIndex,
    selectedDotKeys,
    onAnnotationClick,

    // From controller.
    time,
    isInteractable,
    isSelected,
    isHovered,
    isSingleSpeaker,
    isTitle,
    onClick,
    onMouseEnter,
    onMouseLeave

}) => (

    <div className={`verse${isSelected ? ' selected' : ''}${isInteractable ? ' interactable' : ''}`}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
    >
        <LyricsPlayButton
            time={time}
            isHovered={isHovered}
            isSelected={isSelected}
            onClick={onClick}
        />
        {isSingleSpeaker ? (
                <div className={`line${isTitle ? '' : ' left'}`}>
                    <TextBlock
                        isLyric={true}
                        text={verseObject.lyric}
                        selectedAnnotationIndex={selectedAnnotationIndex}
                        selectedDotKeys={selectedDotKeys}
                        onAnchorClick={onAnnotationClick}
                    />
                </div>
            ) : (
                <div className="double-lines-block">
                    {DOUBLESPEAKER_KEYS.filter(key => {
                        return verseObject[key]
                    }).map((key, index) => {
                        return (
                            <div
                                key={index}
                                className={`line ${key}`}
                            >
                                <TextBlock
                                    isLyric={true}
                                    text={verseObject[key]}
                                    selectedAnnotationIndex={selectedAnnotationIndex}
                                    selectedDotKeys={selectedDotKeys}
                                    onAnchorClick={onAnnotationClick}
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
