import React, { forwardRef, memo } from 'react'
import PropTypes from 'prop-types'
import VerseLine from '../Line'
import {
    LYRIC_CENTRE,
    LYRIC,
} from '../../../../constants/lyrics'

const VerseColumnLine = forwardRef(({
    verseObject,
    doublespeakerKey,
    ...other

}, ref) => {
    const {
        lyricCentre,
        isWrappable,
    } = verseObject

    let columnKey = LYRIC

    if (doublespeakerKey) {
        columnKey = doublespeakerKey

    } else if (lyricCentre) {
        columnKey = LYRIC_CENTRE
    }

    return (
        <VerseLine
            {...{
                ref,
                text: (
                    verseObject[LYRIC_CENTRE] ||
                    verseObject[doublespeakerKey] ||
                    verseObject[LYRIC]
                ),
                columnKey,
                isWrappable,
                ...other,
            }}
        />
    )
})

VerseColumnLine.propTypes = {
    verseObject: PropTypes.object.isRequired,
    doublespeakerKey: PropTypes.string,
}

export default memo(VerseColumnLine)
