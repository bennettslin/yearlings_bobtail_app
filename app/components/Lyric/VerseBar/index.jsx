// Component to show selected verse when scrolled above or below window height.
import React, { useRef, memo } from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import cx from 'classnames'
import Transition from 'react-transition-group/Transition'
import ScrollVerseDispatcher from '../../../dispatchers/ScrollVerse'
import VerseHoc from '../../Verse/Hoc'
import Verse from '../../Verse'
import { getVerse } from '../../../api/album/verses'
import { mapVerseCursorIndex } from '../../../redux/cursor/selector'
import {
    mapLyricSongIndex,
    mapIsLyricLogue
} from '../../../redux/lyric/selector'
import { getMapIsVerseBarShown } from '../../../redux/verseBars/selector'
import './style'

const VerseBar = ({
    isAbove = false,
    onWheel

}) => {
    const
        dispatchScrollVerse = useRef(),
        lyricSongIndex = useSelector(mapLyricSongIndex),
        isLyricLogue = useSelector(mapIsLyricLogue),
        isVerseBarShown = useSelector(getMapIsVerseBarShown(isAbove)),
        verseCursorIndex = useSelector(mapVerseCursorIndex)

    const onClick = e => {
        logEvent({ e, componentName: 'VerseBar' })
        if (isVerseBarShown) {
            dispatchScrollVerse.current()
        }
    }

    // Logue will not have verse object.
    return !isLyricLogue && (
        <div
            {...{
                className: cx(
                    'VerseBar',
                    'fontSize__verse',

                    isAbove ?
                        'VerseBar__above' :
                        'VerseBar__below',

                    isVerseBarShown && 'VerseBar__shown'
                ),
                onWheel,
                onClick
            }}
        >
            <div
                className={cx(
                    'VerseBar__animatable',
                    isAbove ?
                        'VerseBar__animatable__above' :
                        'VerseBar__animatable__below'
                )}
            >
                <Transition
                    {...{
                        in: isVerseBarShown,
                        timeout: 200
                    }}
                >
                    <VerseHoc
                        inVerseBar
                        {...{
                            verseIndex: verseCursorIndex,
                            verseObject: getVerse(
                                lyricSongIndex,
                                verseCursorIndex
                            ),
                            VerseComponent: Verse
                        }}
                    />
                </Transition>
            </div>
            <ScrollVerseDispatcher {...{ ref: dispatchScrollVerse }} />
        </div>
    )
}

VerseBar.propTypes = {
    isAbove: PropTypes.bool,
    onWheel: PropTypes.func.isRequired
}

export default memo(VerseBar)
