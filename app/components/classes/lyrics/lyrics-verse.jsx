import React from 'react';
import Constants from '../../constants/constants.js';
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
                    clickHandler={onAnnotationClick}
                />
            ) : (
                <div className="double-lines-block">
                    {Constants.lyricColumnKeyClassPairs.filter((keyClassPair) => {
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
                                    clickHandler={onAnnotationClick}
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