import React from 'react';
import { LYRIC_COLUMN_CLASSES } from '../../constants/constants.js';
import TextBlock from '../text/text-block.jsx';

/*************
 * CONTAINER *
 *************/

const LyricsVerse = (props) => (
    <LyricsVerseView {...props} />
);

/****************
 * PRESENTATION *
 ****************/

const LyricsVerseView = ({

    // From props.
    verseObject,
    verseIndex,
    onAnnotationClick

}) => (

    <div className="verse">
        {verseObject.lyric ? (
                <TextBlock
                    isLyric={true}
                    text={verseObject.lyric}
                    onAnchorClick={onAnnotationClick}
                />
            ) : (
                <div className="double-lines-block">
                    {LYRIC_COLUMN_CLASSES.filter((keyClassPair) => {
                        return verseObject[keyClassPair.key];
                    }).map((keyClassPair, index) => {
                        return (
                            <div
                                key={index}
                                className={'line ' + keyClassPair.className}
                            >
                                <TextBlock
                                    isLyric={true}
                                    text={verseObject[keyClassPair.key]}
                                    onAnchorClick={onAnnotationClick}
                                />
                            </div>
                        );
                    })}
                </div>
            )
        }
    </div>
);

export default LyricsVerse;