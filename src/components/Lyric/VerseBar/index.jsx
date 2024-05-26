// Component to show selected verse when scrolled above or below window height.
import React, { memo, useRef } from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import cx from 'classnames'
import getDidMountHoc from '../../../hocs/DidMountHoc'
import StopPropagationDispatcher from '../../../dispatchers/StopPropagation'
import Verse from '../../Verse'
import { getVerse } from '../../../endpoint/album/verses'
import { updateIsAutoScroll } from '../../../redux/toggle/action'
import { getMapVerseCursorIndex } from '../../../redux/cursor/selector'
import {
    mapLyricSongIndex,
    mapIsLyricLogue,
} from '../../../redux/lyric/selector'
import { getMapIsVerseBarShown } from '../../../redux/verseBars/selector'
import './style'

const VerseBar = () => {
    const
        lyricSongIndex = useSelector(mapLyricSongIndex),
        verseCursorIndex = useSelector(getMapVerseCursorIndex(true))

    return (
        <Verse
            inVerseBar
            {...{
                verseIndex: verseCursorIndex,
                verseObject: getVerse(
                    lyricSongIndex,
                    verseCursorIndex,
                ),
            }}
        />
    )
}

const VerseBarContainer = ({
    didMount,
    isAbove = false,
    onWheel,

}) => {
    const
        dispatch = useDispatch(),
        stopPropagation = useRef(),
        isLyricLogue = useSelector(mapIsLyricLogue),
        isVerseBarShown = useSelector(getMapIsVerseBarShown(isAbove))

    const onClick = e => {
        logEvent('VerseBar')
        if (isVerseBarShown) {
            stopPropagation.current(e)
            dispatch(updateIsAutoScroll(true))
        }
    }

    // Logue will not have verse object.
    return didMount && !isLyricLogue && (
        <div
            {...{
                className: cx(
                    'VerseBar',
                    'fontSize__verse',

                    isAbove ?
                        'VerseBar__above' :
                        'VerseBar__below',

                    isVerseBarShown && 'VerseBar__shown',
                ),
                onWheel,
                onClick,
            }}
        >
            <div
                className={cx(
                    'VerseBar__animatable',
                    isAbove ?
                        'VerseBar__animatable__above' :
                        'VerseBar__animatable__below',
                )}
            >
                <VerseBar />
            </div>
            <StopPropagationDispatcher {...{ ref: stopPropagation }} />
        </div>
    )
}

VerseBarContainer.propTypes = {
    didMount: PropTypes.bool.isRequired,
    isAbove: PropTypes.bool,
    onWheel: PropTypes.func.isRequired,
}

export default memo(getDidMountHoc(VerseBarContainer))
