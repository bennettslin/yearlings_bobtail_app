/**
 * This component separates a doublespeaker line into two separate lines, if
 * needed.
 */

import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import VerseLine from './Line'

import { LYRIC_COLUMN_KEYS, TITLE, CENTRE, LYRIC } from 'constants/lyrics'

const verseLinesPropTypes = {
    // From parent.
    isDoubleSpeaker: PropTypes.bool,
    inVerseBar: PropTypes.bool,
},

VerseLines = ({

    isDoubleSpeaker,

...other }) => {

    const { inVerseBar } = other

    return isDoubleSpeaker ? (

        // Only wrap in this parent container if it's a doublespeaker line.
        <div className={cx(
            'VerseLines',

            // Allow anchor in a verse line to know it's in a cursor verse.
            !inVerseBar && 'sibling__verseCursor',

            'fontSize__lyricMultipleColumns'
        )}>
            {LYRIC_COLUMN_KEYS.map((doublespeakerKey, index) => (
                <VerseLinesChild {...other}
                    key={index}
                    doublespeakerKey={doublespeakerKey}
                />
            ))}
        </div>

    ) : (
        <VerseLinesChild {...other} />
    )
},

verseLinesChildPropTypes = {
    // From parent.
    verseObject: PropTypes.object.isRequired,
    doublespeakerKey: PropTypes.string,
    isTitle: PropTypes.bool
},

VerseLinesChild = (props) => {

    const {
            verseObject,
            doublespeakerKey,
            isTitle,
            ...other
        } = props,

        lyricsLineProps = {
            text:
                verseObject[doublespeakerKey]
                || verseObject[LYRIC]
                || verseObject[CENTRE],

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

    return (
        <VerseLine {...other} {...lyricsLineProps} />
    )
}

VerseLines.propTypes = verseLinesPropTypes

VerseLinesChild.propTypes = verseLinesChildPropTypes

export default VerseLines
