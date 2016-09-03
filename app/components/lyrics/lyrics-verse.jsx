import React from 'react'
import TextBlock from '../text/text-block'
import { DOUBLESPEAKER_KEYS } from 'helpers/constants'

/*************
 * CONTAINER *
 *************/

const LyricsVerse = (props) => {

    const { verseObject,
            onTimeClick } = props,
        { lyric,
          isTitle,
          time } = verseObject,

        // TODO: Get nextTime from verseObject.

        isSingleSpeaker = !!lyric,
        onClick = !isNaN(time) ? () => onTimeClick(time) : null

    return (
        <LyricsVerseView {...props}
            isSingleSpeaker={isSingleSpeaker}
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
    isSingleSpeaker,
    isTitle,
    onClick

}) => (

    <div className="verse" onClick={onClick}>
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
