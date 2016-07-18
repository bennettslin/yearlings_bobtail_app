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
                    {Constants.lyricColumnKeyClassPairs.map((keyClassPair, index) => {
                        return verseObject[keyClassPair.key] ?
                        <div
                            key={index}
                            className={'line ' + keyClassPair.className}
                        >
                            <FormattedText
                                isLyric={true}
                                text={verseObject[keyClassPair.key]}
                                clickHandler={onAnnotationClick}
                            />
                        </div> : null
                    })}
                </div>
            )
        }
    </div>

);

export default LyricsVerse;