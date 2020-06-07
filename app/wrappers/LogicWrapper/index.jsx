import React from 'react'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { mapIsActivated } from '../../redux/activated/selectors'
import { mapIsPlaying } from '../../redux/audio/selectors'
import {
    mapIsLyricLogue,
    mapLyricVerseIndex,
    mapCursorVerseIndex
} from '../../redux/lyric/selectors'
import { mapIsSliderMoving } from '../../redux/slider/selectors'
import {
    mapIsVerseBarAbove,
    mapIsVerseBarBelow
} from '../../redux/verseBars/selectors'

const LogicWrapper = ({ children }) => {
    const
        isActivated = useSelector(mapIsActivated),
        isPlaying = useSelector(mapIsPlaying),
        isLyricLogue = useSelector(mapIsLyricLogue),
        lyricVerseIndex = useSelector(mapLyricVerseIndex),
        cursorVerseIndex = useSelector(mapCursorVerseIndex),
        isSliderMoving = useSelector(mapIsSliderMoving),
        isVerseBarAbove = useSelector(mapIsVerseBarAbove),
        isVerseBarBelow = useSelector(mapIsVerseBarBelow),

        // TODO: Make this a selector.
        areVerseBarsHidden = !isVerseBarAbove && !isVerseBarBelow,
        isLyricsLocked = isSliderMoving || isActivated

    return (
        <div
            {...{
                className: cx(
                    'LogicWrapper',

                    !isLyricLogue && [

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
                            `RlV${cursorVerseIndex}`
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
