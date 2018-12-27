/**
 * This component separates a doublespeaker line into two separate lines, if
 * needed.
 */

import React, { memo } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import VerseLine from './Line'

import {
    EAR_COLUMN_KEYS, CENTRE, LYRIC
} from 'constants/lyrics'

const verseLinesPropTypes = {
    // From parent.
        isDoublespeakerLine: PropTypes.bool,
        inVerseBar: PropTypes.bool
    },

    VerseLines = memo(({

        isDoublespeakerLine,

        ...other
    }) => {

        const { inVerseBar } = other

        return isDoublespeakerLine ? (

        // Only wrap in this parent container if it's a doublespeaker line.
            <div className={cx(
                'VerseLines',

                // Allow anchor in a verse line to know it's in a cursor verse.
                !inVerseBar && 'sibling__verseCursor',

                'fontSize__lyricMultipleColumns'
            )}>
                {EAR_COLUMN_KEYS.map((doublespeakerKey, index) => (
                    <VerseLinesChild {...other}
                        key={index}
                        doublespeakerKey={doublespeakerKey}
                    />
                ))}
            </div>

        ) : (
            <VerseLinesChild {...other} />
        )
    }),

    verseLinesChildPropTypes = {
    // From parent.
        verseObject: PropTypes.object.isRequired,
        doublespeakerKey: PropTypes.string
    },

    VerseLinesChild = memo((props) => {

        const {
                verseObject,
                doublespeakerKey,
                ...other
            } = props,

            lyricsLineProps = {
                text:
                    verseObject[doublespeakerKey]
                    || verseObject[LYRIC],

                isVerseBeginningSpan: verseObject.isVerseBeginningSpan,
                isVerseEndingSpan: verseObject.isVerseEndingSpan
            }

        let columnKey = LYRIC

        if (doublespeakerKey) {
            columnKey = doublespeakerKey

        } else if (verseObject.isCentre) {
            columnKey = CENTRE
        }

        lyricsLineProps.columnKey = columnKey

        return (
            <VerseLine {...other} {...lyricsLineProps} />
        )
    })

VerseLines.propTypes = verseLinesPropTypes

VerseLinesChild.propTypes = verseLinesChildPropTypes

export default VerseLines
