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
import { IS_PLAYING_SELECTOR } from '../../redux/audio/selectors'
import { DOTS_BIT_NUMBER_SELECTOR } from '../../redux/dots/selectors'
import {
    IS_LYRIC_LOGUE_SELECTOR,
    LYRIC_SONG_INDEX_SELECTOR,
    LYRIC_VERSE_INDEX_SELECTOR
} from '../../redux/lyric/selectors'
import {
    IS_SLIDER_MOVING_SELECTOR,
    SLIDER_VERSE_INDEX_SELECTOR
} from '../../redux/slider/selectors'
import {
    IS_VERSE_BAR_ABOVE_SELECTOR,
    IS_VERSE_BAR_BELOW_SELECTOR
} from '../../redux/verseBars/selectors'

const LogicWrapper = ({ children }) => {
    const
        isActivated = useSelector(IS_ACTIVATED_SELECTOR),
        activatedVerseIndex = useSelector(ACTIVATED_VERSE_INDEX_SELECTOR),
        isPlaying = useSelector(IS_PLAYING_SELECTOR),
        dotsBitNumber = useSelector(DOTS_BIT_NUMBER_SELECTOR),
        isLyricLogue = useSelector(IS_LYRIC_LOGUE_SELECTOR),
        lyricSongIndex = useSelector(LYRIC_SONG_INDEX_SELECTOR),
        lyricVerseIndex = useSelector(LYRIC_VERSE_INDEX_SELECTOR),
        isSliderMoving = useSelector(IS_SLIDER_MOVING_SELECTOR),
        sliderVerseIndex = useSelector(SLIDER_VERSE_INDEX_SELECTOR),
        isVerseBarAbove = useSelector(IS_VERSE_BAR_ABOVE_SELECTOR),
        isVerseBarBelow = useSelector(IS_VERSE_BAR_BELOW_SELECTOR),

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
