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
        const { verseObject,
                hiddenLyricColumnKey,
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
    // From parent.
    isDoubleSpeaker: PropTypes.bool.isRequired,
    verseObject: PropTypes.object.isRequired,
    hiddenLyricColumnKey: PropTypes.string.isRequired,
    doublespeakerKey: PropTypes.string,
    isTitle: PropTypes.bool,
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
            {DOUBLESPEAKER_KEYS.map((doublespeakerKey, index) => (
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

export default VerseLinesBlock
