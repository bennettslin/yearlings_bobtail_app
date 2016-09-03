import React from 'react'
import TextBlock from '../text/text-block'
import { DOUBLESPEAKER_KEYS } from 'helpers/constants'

/*************
 * CONTAINER *
 *************/

const LyricsVerse = (props) => {

    const { verseObject,
            onTimeClick,
            activeTime } = props,
        { lyric,
          isTitle,
          time,
          nextTime } = verseObject,

        /**
         * It's active if it's between time and nextTime, or if all three times
         * are equal (such as in the title, when the verse starts at 0.)
         */
        isActive = (time <= activeTime && activeTime < nextTime) ||
                   (time === activeTime && nextTime === activeTime),
        isSingleSpeaker = !!lyric,
        onClick = !isNaN(time) ? () => onTimeClick(time) : null

    return (
        <LyricsVerseView {...props}
            isSingleSpeaker={isSingleSpeaker}
            isActive={isActive}
            isTitle={isTitle}
            onClick={onClick}
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
    isActive,
    isSingleSpeaker,
    isTitle,
    onClick

}) => (

    <div className={`verse${isActive ? ' active' : ''}${onClick ? ' enabled' : ''}`} onClick={onClick}>
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
