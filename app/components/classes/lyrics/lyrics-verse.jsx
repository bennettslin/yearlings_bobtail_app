import React from 'react';
import Constants from '../../constants/constants.js';
import FormattedText from '../text/formatted-text.jsx';

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
                <FormattedText
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
                                <FormattedText
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