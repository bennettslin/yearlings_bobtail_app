import React from 'react'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { getPrefixedDotLetterClassNames } from '../../helpers/dot'
import { getCursorIndex } from '../../helpers/verse'
import { getStanzaIndexForVerse } from '../../api/album/verses'
import {
    mapIsActivated,
    mapActivatedVerseIndex
} from '../../redux/activated/selectors'
import { mapIsPlaying } from '../../redux/audio/selectors'
import { mapDotsBitNumber } from '../../redux/dots/selectors'
import {
    mapIsLyricLogue,
    mapLyricSongIndex,
    mapLyricVerseIndex
} from '../../redux/lyric/selectors'
import {
    mapIsSliderMoving,
    mapSliderVerseIndex
} from '../../redux/slider/selectors'
import {
    mapIsVerseBarAbove,
    mapIsVerseBarBelow
} from '../../redux/verseBars/selectors'

const LogicWrapper = ({ children }) => {
    const
        isActivated = useSelector(mapIsActivated),
        activatedVerseIndex = useSelector(mapActivatedVerseIndex),
        isPlaying = useSelector(mapIsPlaying),
        dotsBitNumber = useSelector(mapDotsBitNumber),
        isLyricLogue = useSelector(mapIsLyricLogue),
        lyricSongIndex = useSelector(mapLyricSongIndex),
        lyricVerseIndex = useSelector(mapLyricVerseIndex),
        isSliderMoving = useSelector(mapIsSliderMoving),
        sliderVerseIndex = useSelector(mapSliderVerseIndex),
        isVerseBarAbove = useSelector(mapIsVerseBarAbove),
        isVerseBarBelow = useSelector(mapIsVerseBarBelow),
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
                            dotsBitNumber,
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
