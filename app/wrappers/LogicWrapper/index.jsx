import React from 'react'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import cx from 'classnames'
import {
    getDotKeysFromBitNumber,
    getPrefixedDotLetterClassNames
} from '../../helpers/dot'
import { getCursorIndex } from '../../helpers/verse'
import { getStanzaIndexForVerse } from '../../album/api/verses'
import {
    IS_ACTIVATED_SELECTOR,
    ACTIVATED_VERSE_INDEX_SELECTOR
} from '../../redux/activated/selectors'

const mapStateToProps = state => {
    const {
            audioStore: { isPlaying },
            dotsStore: { dotsBitNumber },
            verseBarsStore: {
                isVerseBarAbove,
                isVerseBarBelow
            },
            lyricStore: {
                isLyricLogue,
                lyricSongIndex,
                lyricVerseIndex
            },
            sliderStore: {
                isSliderMoving,
                sliderVerseIndex
            }
        } = state,
        isActivated = IS_ACTIVATED_SELECTOR(state),
        activatedVerseIndex = ACTIVATED_VERSE_INDEX_SELECTOR(state)

    return {
        isActivated,
        activatedVerseIndex,
        dotsBitNumber,
        isPlaying,
        isLyricLogue,
        lyricSongIndex,
        lyricVerseIndex,
        isSliderMoving,
        sliderVerseIndex,
        isVerseBarAbove,
        isVerseBarBelow
    }
}

const LogicWrapper = ({ children }) => {
    const {
            dotsBitNumber,
            isPlaying,
            isSliderMoving,
            isLyricLogue,
            lyricSongIndex,
            lyricVerseIndex,
            sliderVerseIndex,
            isActivated,
            activatedVerseIndex,
            isVerseBarAbove,
            isVerseBarBelow
        } = useSelector(mapStateToProps),

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

        isLyricsLocked = isSliderMoving || isActivated

    return (
        <div
            {...{
                className: cx(
                    'LogicWrapper',

                    !isLyricLogue && [

                        // "Root cursored stanza index."
                        `RcS${getStanzaIndexForVerse(
                            lyricSongIndex,
                            cursorVerseIndex
                        )}`,

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
                    ]
                )
            }}
        >
            {children}
        </div>
    )
}

LogicWrapper.propTypes = {
    children: PropTypes.any.isRequired
}

export default LogicWrapper
