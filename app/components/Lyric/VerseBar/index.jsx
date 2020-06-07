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
import {
    mapLyricSongIndex,
    mapIsLyricLogue,
    mapCursorVerseIndex
} from '../../../redux/lyric/selectors'
import { getMapIsVerseBarShown } from '../../../redux/verseBars/selectors'
import './style'

const VerseBar = ({
    isAbove = false,
    handleVerseBarWheel

}) => {
    const
        dispatchScrollVerse = useRef(),
        lyricSongIndex = useSelector(mapLyricSongIndex),
        isLyricLogue = useSelector(mapIsLyricLogue),
        isVerseBarShown = useSelector(getMapIsVerseBarShown(isAbove)),
        cursorVerseIndex = useSelector(mapCursorVerseIndex)

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
                onWheel: handleVerseBarWheel,
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
                            isShownInVerseBar: isVerseBarShown,
                            verseIndex: cursorVerseIndex,
                            verseObject: getVerse(
                                lyricSongIndex,
                                cursorVerseIndex
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
    handleVerseBarWheel: PropTypes.func.isRequired
}

export default memo(VerseBar)
