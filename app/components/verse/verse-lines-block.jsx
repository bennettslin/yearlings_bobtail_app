// Component to show all lines in a single verse.

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import classnames from 'classnames'
import VerseLine from './verse-line'
import { LYRIC_COLUMN_KEYS, TITLE, LEFT, CENTRE, LYRIC } from '../../constants/lyrics'
import { getHiddenLyricColumnKey } from '../../helpers/logic-helper'

/*************
 * CONTAINER *
 *************/

const VerseLinesBlock = ({

    // Parent gets these from Redux.
    selectedLyricColumnIndex,
    showOneOfTwoLyricColumns,

    // Recursed children get this from parent.
    hiddenLyricColumnKey,

    isDoubleSpeaker,
    truncatableMain,

...other }) => {

    hiddenLyricColumnKey = hiddenLyricColumnKey || getHiddenLyricColumnKey({
            showOneOfTwoLyricColumns,
            selectedLyricColumnIndex
        })

    if (isDoubleSpeaker) {
        return (
            <VerseLinesBlockView {...other}
                hiddenLyricColumnKey={hiddenLyricColumnKey}
            />
        )

    } else {
        const { verseObject,
                doublespeakerKey,
                isTitle } = other,

            lyricsLineProps = {
                text: doublespeakerKey ? verseObject[doublespeakerKey] : (verseObject[LYRIC] || verseObject[CENTRE]),
                isVerseBeginningSpan: verseObject.isVerseBeginningSpan,
                isVerseEndingSpan: verseObject.isVerseEndingSpan,
                isHidden: doublespeakerKey && hiddenLyricColumnKey === doublespeakerKey,
                columnKey: doublespeakerKey || (isTitle ? TITLE : LEFT)
            }

        /**
         * If it's truncatable, we will only ever show either the complete or the
         * truncated text.
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
    isDoubleSpeaker: false
}

VerseLinesBlock.propTypes = {
    // Through Redux.
    selectedLyricColumnIndex: PropTypes.number,
    showOneOfTwoLyricColumns: PropTypes.bool,

    // From parent.
    verseObject: PropTypes.object.isRequired,
    hiddenLyricColumnKey: PropTypes.string,
    isDoubleSpeaker: PropTypes.bool.isRequired,
    doublespeakerKey: PropTypes.string,
    truncatableMain: PropTypes.bool,
    isTitle: PropTypes.bool
}

/****************
 * PRESENTATION *
 ****************/

const VerseLinesBlockView = (props) => {
    const { hiddenLyricColumnKey } = props

    return (
        <div className={classnames(
            'double-lines-block',
            // FIXME: Take care of this in CSS.
            { 'hidden-left': hiddenLyricColumnKey === LEFT }
        )}>
            {LYRIC_COLUMN_KEYS.map((doublespeakerKey, index) => (
                <VerseLinesBlock {...props}
                    key={index}
                    doublespeakerKey={doublespeakerKey}
                />
            ))}
        </div>
    )
}

VerseLinesBlockView.propTypes = {
    // From parent.
    hiddenLyricColumnKey: PropTypes.string.isRequired
}

export default connect(({
    selectedLyricColumnIndex,
    showOneOfTwoLyricColumns
}) => ({
    selectedLyricColumnIndex,
    showOneOfTwoLyricColumns
}))(VerseLinesBlock)
