// Component to show all lines in a single verse.

import React from 'react'
import PropTypes from 'prop-types'
import VerseLine from './VerseLine'
import { LYRIC_COLUMN_KEYS, TITLE, CENTRE, LYRIC } from '../../constants/lyrics'

const verseLinesDefaultProps = {
    isTruncatable: false,
    isDoubleSpeaker: false
},

verseLinesPropTypes = {
    // From parent.
    verseObject: PropTypes.object.isRequired,
    isTruncatable: PropTypes.bool.isRequired,
    isDoubleSpeaker: PropTypes.bool.isRequired,
    doublespeakerKey: PropTypes.string,
    isTitle: PropTypes.bool
},

VerseLines = ({

    isDoubleSpeaker,

...other }) => {

    return isDoubleSpeaker ? (
        <VerseLinesDouble {...other} />

    ) : (
        <VerseLinesSingle {...other} />
    )
},

VerseLinesDouble = (props) => (
    <div className="VerseLines__double">
        {LYRIC_COLUMN_KEYS.map((doublespeakerKey, index) => (
            <VerseLinesSingle {...props}
                key={index}
                doublespeakerKey={doublespeakerKey}
            />
        ))}
    </div>
),

VerseLinesSingle = ({

    isTruncatable,

...other }) => {

    const { verseObject,
            doublespeakerKey,
            isTitle } = other,

        lyricsLineProps = {
            text: doublespeakerKey ?
                verseObject[doublespeakerKey] :
                (verseObject[LYRIC] || verseObject[CENTRE]),

            isVerseBeginningSpan: verseObject.isVerseBeginningSpan,
            isVerseEndingSpan: verseObject.isVerseEndingSpan
        }

    let columnKey = LYRIC

    if (doublespeakerKey) {
        columnKey = doublespeakerKey

    } else if (isTitle) {
        columnKey = TITLE

    } else if (verseObject[CENTRE]) {
        columnKey = CENTRE
    }

    lyricsLineProps.columnKey = columnKey

    /**
     * If it's truncatable, we will only ever show either the complete or the
     * truncated text. Applies to Golden Cord and Uncanny Valley.
     */
    return isTruncatable ? ([(
        <VerseLine {...other} {...lyricsLineProps}
            key="truncatable"
            isTruncatable
        />
    ), (
        <span
            key="truncated"
            className="VerseLine__truncated"
        >
            {'\u2026'}
        </span>
    )]) : (
        <VerseLine {...other} {...lyricsLineProps} />
    )
}

VerseLines.defaultProps = verseLinesDefaultProps
VerseLines.propTypes = verseLinesPropTypes

export default VerseLines
