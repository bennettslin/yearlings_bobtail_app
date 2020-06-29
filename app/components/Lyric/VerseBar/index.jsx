// Component to show selected verse when scrolled above or below window height.
import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import cx from 'classnames'
import Transition from 'react-transition-group/Transition'
import VerseHoc from '../../Verse/Hoc'
import Verse from '../../Verse'
import { getVerse } from '../../../api/album/verses'
import { updateIsAutoScroll } from '../../../redux/toggle/action'
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
        dispatch = useDispatch(),
        lyricSongIndex = useSelector(mapLyricSongIndex),
        isLyricLogue = useSelector(mapIsLyricLogue),
        isVerseBarShown = useSelector(getMapIsVerseBarShown(isAbove)),
        verseCursorIndex = useSelector(mapVerseCursorIndex)

    const onClick = e => {
        logEvent({ e, componentName: 'VerseBar' })
        if (isVerseBarShown) {
            dispatch(updateIsAutoScroll(true))
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
        </div>
    )
}

VerseBar.propTypes = {
    isAbove: PropTypes.bool,
    onWheel: PropTypes.func.isRequired
}

export default memo(VerseBar)
