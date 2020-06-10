/**
 * This component separates a doublespeaker line into two separate lines, if
 * needed.
 */
import React, { forwardRef, memo } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import VerseColumnLine from './ColumnLine'
import { EAR_COLUMN_KEYS } from '../../../constants/lyrics'
import './style'

const VerseLines = forwardRef(({
    isDoublespeakerLine,
    ...other

}, ref) => {
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
                <VerseColumnLine
                    {...{
                        key: doublespeakerKey,
                        ref,
                        doublespeakerKey,
                        ...other
                    }}
                />
            ))}
        </div>

    ) : (
        <VerseColumnLine
            {...{
                ref,
                ...other
            }}
        />
    )
})

VerseLines.propTypes = {
    isDoublespeakerLine: PropTypes.bool,
    inVerseBar: PropTypes.bool
}

export default memo(VerseLines)
