import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import cx from 'classnames'

import {
    getDotKeysFromBitNumber,
    getPrefixedDotLetterClassNames
} from '../../helpers/dot'
import { getCursorIndex } from '../../helpers/verse'
import { getStanzaIndexForVerse } from '../../album/api/verses'

class LogicWrapper extends PureComponent {

    static propTypes = {
        // Through Redux.

        isVerseBarAbove: PropTypes.bool.isRequired,
        isVerseBarBelow: PropTypes.bool.isRequired,

        isPlaying: PropTypes.bool.isRequired,
        isSliderMoving: PropTypes.bool.isRequired,
        isActivated: PropTypes.bool.isRequired,
        activatedVerseIndex: PropTypes.number.isRequired,
        lyricSongIndex: PropTypes.number.isRequired,
        lyricVerseIndex: PropTypes.number.isRequired,
        sliderVerseIndex: PropTypes.number.isRequired,
        dotsBitNumber: PropTypes.number.isRequired,

        // From parent.
        children: PropTypes.any.isRequired
    }

    render() {
        const {
                dotsBitNumber,
                isPlaying,
                isSliderMoving,
                lyricSongIndex,
                lyricVerseIndex,
                sliderVerseIndex,
                isActivated,
                activatedVerseIndex,
                isVerseBarAbove,
                isVerseBarBelow,
                children
            } = this.props,

            selectedDotKeys = getDotKeysFromBitNumber(dotsBitNumber),

            areVerseBarsHidden = !isVerseBarAbove && !isVerseBarBelow,

            /**
             * If slider touched, compare stanza to slider verse. Otherwise,
             * compare it to selected verse.
             */
            cursorVerseIndex = getCursorIndex(
                sliderVerseIndex,
                activatedVerseIndex,
                lyricVerseIndex
            ),

            cursorStanzaIndex = getStanzaIndexForVerse(
                lyricSongIndex, cursorVerseIndex
            ),

            isLyricsLocked = isSliderMoving || isActivated

        return (
            <div
                {...{
                    className: cx(
                        'LogicWrapper',

                        // "Root cursored stanza index."
                        `RcS${cursorStanzaIndex}`,

                        isLyricsLocked ?
                            // "Root slider (or activated) verse index."
                            `RsV${cursorVerseIndex}` :
                            // "Root default verse index."
                            `RdV${cursorVerseIndex}`,

                        isLyricsLocked &&
                            // "Root selected verse index."
                            `RxV${lyricVerseIndex}`,

                        isPlaying && !isLyricsLocked &&
                            // "Root playing verse index."
                            `RpV${cursorVerseIndex}`,

                        !isActivated &&
                            // "Root non-activated verse index."
                            `RnV${cursorVerseIndex}`,

                        areVerseBarsHidden && !isActivated &&
                            // "Root cursored lyric verse."
                            `RlV${cursorVerseIndex}`,

                        getPrefixedDotLetterClassNames(
                            selectedDotKeys,
                            // "Root selected dot letter."
                            'RsD'
                        ),

                        !dotsBitNumber && 'LW__noSelectedDots'
                    )
                }}
            >
                {children}
            </div>
        )
    }
}

const mapStateToProps = ({
    activatedStore: {
        isActivated,
        activatedVerseIndex
    },
    audioStore: { isPlaying },
    dotsStore: { dotsBitNumber },
    verseBarsStore: {
        isVerseBarAbove,
        isVerseBarBelow
    },
    lyricStore: {
        lyricSongIndex,
        lyricVerseIndex
    },
    sliderStore: {
        isSliderMoving,
        sliderVerseIndex
    }
}) => ({
    isActivated,
    activatedVerseIndex,
    dotsBitNumber,
    isPlaying,
    lyricSongIndex,
    lyricVerseIndex,
    isSliderMoving,
    sliderVerseIndex,
    isVerseBarAbove,
    isVerseBarBelow
})

export default connect(mapStateToProps)(LogicWrapper)
