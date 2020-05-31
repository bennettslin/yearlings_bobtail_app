/**
 * This component separates a doublespeaker line into two separate lines, if
 * needed.
 */
import React, { memo } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import VerseLine from './Line'
import {
    EAR_COLUMN_KEYS, LYRIC_CENTRE, LYRIC
} from '../../../constants/lyrics'
import './style'

const VerseLines = ({
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
            {EAR_COLUMN_KEYS.map(doublespeakerKey => (
                <VerseLinesChild {...other}
                    {...{
                        key: doublespeakerKey,
                        doublespeakerKey
                    }}
                />
            ))}
        </div>

    ) : (
        <VerseLinesChild {...other} />
    )
}

const VerseLinesChild = memo(({
    verseObject,
    doublespeakerKey,
    ...other

}) => {
    let columnKey = LYRIC

    if (doublespeakerKey) {
        columnKey = doublespeakerKey

    } else if (verseObject.lyricCentre) {
        columnKey = LYRIC_CENTRE
    }

    return (
        <VerseLine {...other}
            {...{
                text: (
                    verseObject[LYRIC_CENTRE] ||
                    verseObject[doublespeakerKey] ||
                    verseObject[LYRIC]
                ),
                columnKey
            }}
        />
    )
})

VerseLines.propTypes = {
    isDoublespeakerLine: PropTypes.bool,
    inVerseBar: PropTypes.bool
}

VerseLinesChild.propTypes = {
    verseObject: PropTypes.object.isRequired,
    doublespeakerKey: PropTypes.string
}

export default memo(VerseLines)
