import React from 'react'
import TextBlock from '../text/text-block'
import LyricsPlayButton from './lyrics-play-button'
import { DOUBLESPEAKER_KEYS } from 'helpers/constants'

/*************
 * CONTAINER *
 *************/

const LyricsVerse = (props) => {

    const { verseObject,
            activeTime,
            hoveredLineIndex,
            onTimeClick,
            onLineHover } = props,
        { lyric,
          isTitle,
          time,
          nextTime,
          lineIndex } = verseObject,

        /**
         * It's active if it's between time and nextTime, or if all three times
         * are equal (such as in the title, when the verse starts at 0.)
         */
        isActive = (time <= activeTime && activeTime < nextTime) ||
                   (time === activeTime && nextTime === activeTime),
        isSingleSpeaker = !!lyric,
        isEnabled = lineIndex === hoveredLineIndex,
        onClick = !isNaN(time) ? e => onTimeClick(e, time) : null,
        onMouseEnter = onLineHover ? e => onLineHover(e, lineIndex) : null,
        onMouseLeave = onLineHover ? e => onLineHover(e) : null

    return (
        <LyricsVerseView {...props}
            isSingleSpeaker={isSingleSpeaker}
            time={time}
            isActive={isActive}
            isEnabled={isEnabled}
            isTitle={isTitle}
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
    activeAnnotationIndex,
    activeDotKeys,
    onAnnotationClick,

    // From controller.
    time,
    isActive,
    isEnabled,
    isSingleSpeaker,
    isTitle,
    onClick,
    onMouseEnter,
    onMouseLeave

}) => (

    <div className={`verse${isActive ? ' active' : ''}${isEnabled ? ' enabled' : ''}${onClick ? ' interactable' : ''}`}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
    >
        <LyricsPlayButton
            time={time}
            isEnabled={isEnabled}
            onClick={onClick}
        />
        {isSingleSpeaker ? (
                <div className={`line${isTitle ? '' : ' left'}`}>
                    <TextBlock
                        isLyric={true}
                        text={verseObject.lyric}
                        activeAnnotationIndex={activeAnnotationIndex}
                        activeDotKeys={activeDotKeys}
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
                                    activeAnnotationIndex={activeAnnotationIndex}
                                    activeDotKeys={activeDotKeys}
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
