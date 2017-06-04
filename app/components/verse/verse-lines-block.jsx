// Component to show all lines in a single verse.
import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import VerseLine from './verse-line'
import { DOUBLESPEAKER_KEYS, TITLE, LEFT, CENTRE, LYRIC } from '../../constants/lyrics'

/*************
 * CONTAINER *
 *************/

const VerseLinesBlock = ({

    isDoubleSpeaker,

...other }) => {

    if (isDoubleSpeaker) {
        return (
            <VerseLinesBlockView {...other} />
        )

    } else {
        const { inVerseBar,
                isSelected,
                verseObject,
                hiddenLyricColumnKey,
                columnKey,
                isTitle } = other,

            lyricsLineProps = {
                inVerseBar,
                verseSelected: isSelected,
                text: columnKey ? verseObject[columnKey] : verseObject[LYRIC] || verseObject[CENTRE],
                isVerseBeginningSpan: verseObject.isVerseBeginningSpan,
                isVerseEndingSpan: verseObject.isVerseEndingSpan,
                isHidden: !!hiddenLyricColumnKey,
                columnKey: columnKey || isTitle ? TITLE : LEFT
            }

        return <VerseLine {...other} {...lyricsLineProps} />
    }
}

VerseLinesBlock.defaultProps = {
    isDoubleSpeaker: false
}

VerseLinesBlock.propTypes = {
    isDoubleSpeaker: PropTypes.bool.isRequired
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
            {DOUBLESPEAKER_KEYS.map((columnKey, index) => {
                return (
                    <VerseLinesBlock {...props}
                        key={index}
                        columnKey={columnKey}
                    />
                )
            })}
        </div>
    )
}

VerseLinesBlockView.propTypes = {
    hiddenLyricColumnKey: PropTypes.string.isRequired
}

export default VerseLinesBlock
