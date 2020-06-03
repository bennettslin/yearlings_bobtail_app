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
import { getCursorIndex } from '../../../helpers/verse'
import { mapActivatedVerseIndex } from '../../../redux/activated/selectors'
import {
    mapLyricSongIndex,
    mapLyricVerseIndex,
    mapIsLyricLogue
} from '../../../redux/lyric/selectors'
import { mapSliderVerseIndex } from '../../../redux/slider/selectors'
import {
    mapIsVerseBarAbove,
    mapIsVerseBarBelow
} from '../../../redux/verseBars/selectors'
import './style'

const VerseBar = ({
    isAbove = false,
    handleVerseBarWheel

}) => {
    const
        dispatchScrollVerse = useRef(),
        activatedVerseIndex = useSelector(mapActivatedVerseIndex),
        lyricSongIndex = useSelector(mapLyricSongIndex),
        lyricVerseIndex = useSelector(mapLyricVerseIndex),
        isLyricLogue = useSelector(mapIsLyricLogue),
        sliderVerseIndex = useSelector(mapSliderVerseIndex),
        isVerseBarAbove = useSelector(mapIsVerseBarAbove),
        isVerseBarBelow = useSelector(mapIsVerseBarBelow),

        // TODO: Make this a selector.
        verseIndex = getCursorIndex(
            sliderVerseIndex,
            activatedVerseIndex,
            lyricVerseIndex
        ),

        // TODO: Make this a selector.
        isShownInVerseBar = (
            isAbove &&
            isVerseBarAbove
        ) || (
            !isAbove &&
            isVerseBarBelow
        )

    const onClick = e => {
        logEvent({ e, componentName: 'VerseBar' })
        if (isShownInVerseBar) {
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

                    isShownInVerseBar && 'VerseBar__shown'
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
                        in: isShownInVerseBar,
                        timeout: 200
                    }}
                >
                    <VerseHoc
                        inVerseBar
                        {...{
                            isShownInVerseBar,
                            verseIndex,
                            verseObject: getVerse(
                                lyricSongIndex,
                                verseIndex
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
