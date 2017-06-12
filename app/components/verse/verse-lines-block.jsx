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

    // Subsequent children get these from parent.
    hiddenLyricColumnKey,

    isDoubleSpeaker,

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

        return <VerseLine {...other} {...lyricsLineProps} />
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
    hiddenLyricColumnKey: PropTypes.string,
    isDoubleSpeaker: PropTypes.bool.isRequired,
    verseObject: PropTypes.object.isRequired,
    doublespeakerKey: PropTypes.string,
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
