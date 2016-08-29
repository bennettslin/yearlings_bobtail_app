import React from 'react'
import TextBlock from '../text/text-block'
import { LYRIC_COLUMN_CLASSES } from 'helpers/constants'

/*************
 * CONTAINER *
 *************/

const LyricsVerse = (props) => {

    const { verseObject } = props,

        isSingleSpeaker = !!verseObject.lyric,
        isTitle = verseObject.isTitle

    return (
        <LyricsVerseView {...props}
            isSingleSpeaker={isSingleSpeaker}
            isTitle={isTitle}
        />
    )
}

/****************
 * PRESENTATION *
 ****************/

const LyricsVerseView = ({

    // From props.
    verseObject,
    activeDotKeys,
    onAnnotationClick,

    // From controller.
    isSingleSpeaker,
    isTitle

}) => (

    <div className="verse">
        {isSingleSpeaker ? (
                <div className={`line${isTitle ? '' : ' left'}`}>
                    <TextBlock
                        isLyric={true}
                        text={verseObject.lyric}
                        activeDotKeys={activeDotKeys}
                        onAnchorClick={onAnnotationClick}
                    />
                </div>
            ) : (
                <div className="double-lines-block">
                    {LYRIC_COLUMN_CLASSES.filter((keyClassPair) => {
                        return verseObject[keyClassPair.key]
                    }).map((keyClassPair, index) => {
                        return (
                            <div
                                key={index}
                                className={`line ${keyClassPair.className}`}
                            >
                                <TextBlock
                                    isLyric={true}
                                    text={verseObject[keyClassPair.key]}
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
