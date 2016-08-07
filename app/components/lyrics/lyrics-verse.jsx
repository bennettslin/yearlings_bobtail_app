import React from 'react'
import TextBlock from '../text/text-block'
import { LYRIC_COLUMN_CLASSES } from 'helpers/constants'

/*************
 * CONTAINER *
 *************/

const LyricsVerse = (props) => {

    const { verseObject } = props,

        isSingleSpeaker = !!verseObject.lyric

    return (
        <LyricsVerseView {...props}
            isSingleSpeaker={isSingleSpeaker}
        />
    )
}

/****************
 * PRESENTATION *
 ****************/

const LyricsVerseView = ({

    // From props.
    verseObject,
    verseIndex,
    onAnnotationClick,

    // From controller.
    isSingleSpeaker

}) => (

    <div className="verse">
        {isSingleSpeaker ? (
                <div className="line left">
                    <TextBlock
                        isLyric={true}
                        text={verseObject.lyric}
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
