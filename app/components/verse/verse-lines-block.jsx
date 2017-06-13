// Component to show all lines in a single verse.

import React from 'react'
import PropTypes from 'prop-types'
import VerseLine from './verse-line'
import { LYRIC_COLUMN_KEYS, TITLE, LEFT, CENTRE, LYRIC } from '../../constants/lyrics'

/*************
 * CONTAINER *
 *************/

const VerseLinesBlock = ({

    isDoubleSpeaker,
    truncatableMain,

...other }) => {

    if (isDoubleSpeaker) {
        return (
            <VerseLinesBlockView {...other} />
        )

    } else {
        const { verseObject,
                doublespeakerKey,
                isTitle } = other,

            lyricsLineProps = {
                text: doublespeakerKey ? verseObject[doublespeakerKey] : (verseObject[LYRIC] || verseObject[CENTRE]),
                isVerseBeginningSpan: verseObject.isVerseBeginningSpan,
                isVerseEndingSpan: verseObject.isVerseEndingSpan,
                columnKey: doublespeakerKey || (isTitle ? TITLE : LEFT)
            }

        /**
         * If it's truncatable, we will only ever show either the complete or the
         * truncated text. Applies to Golden Cord and Uncanny Valley.
         */
        return truncatableMain ? (
            <span>
                <span className="complete-main">
                    <VerseLine {...other} {...lyricsLineProps} />
                </span>
                <span className="truncated-main">
                    {'\u2026'}
                </span>
            </span>
        ) : (
            <VerseLine {...other} {...lyricsLineProps} />
        )
    }
}

VerseLinesBlock.defaultProps = {
    truncatableMain: false,
    isDoubleSpeaker: false
}

VerseLinesBlock.propTypes = {
    // From parent.
    verseObject: PropTypes.object.isRequired,
    truncatableMain: PropTypes.bool.isRequired,
    isDoubleSpeaker: PropTypes.bool.isRequired,
    doublespeakerKey: PropTypes.string,
    isTitle: PropTypes.bool
}

/****************
 * PRESENTATION *
 ****************/

const VerseLinesBlockView = (props) => (
    <div className="double-lines-block">
        {LYRIC_COLUMN_KEYS.map((doublespeakerKey, index) => (
            <VerseLinesBlock {...props}
                key={index}
                doublespeakerKey={doublespeakerKey}
            />
        ))}
    </div>
)

export default VerseLinesBlock
