import React, { memo, useEffect } from 'react'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import cx from 'classnames'
import getDidMountHoc from '../../hocs/DidMountHoc'
import { getSongTipType } from '../../api/album/tips'
import { ANNOTATION, WIKI, WORMHOLES } from '../../constants/tips'
import {
    mapBackstoryDot,
    mapReferenceDot,
    mapWormholeDot,
} from '../../redux/dots/selector'
import {
    mapIsSongChangeDone,
    mapCanTransitionAfterSongChange,
    mapCanTransitionAfterVerseChange,
} from '../../redux/entrance/selector'
import {
    mapIsLyricLogue,
    mapLyricSongIndex,
    mapLyricAnnotationIndex,
} from '../../redux/lyric/selector'
import { mapIsOverlayShown } from '../../redux/overlay/selector'
import { mapIsOverviewShown } from '../../redux/overview/selector'
import { mapIsTipsShown } from '../../redux/tips/selector'
import {
    mapIsCarouselShown,
    mapIsNavExpanded,
    mapIsLyricExpanded,
    mapIsDotsSlideShown,
} from '../../redux/toggle/selector'
import './style'

const ShownWrapper = ({ didMount, children }) => {
    const
        backstory = useSelector(mapBackstoryDot),
        reference = useSelector(mapReferenceDot),
        wormhole = useSelector(mapWormholeDot),
        isSongChangeDone = useSelector(mapIsSongChangeDone),
        canTransitionAfterSongChange =
            useSelector(mapCanTransitionAfterSongChange),
        canTransitionAfterVerseChange =
            useSelector(mapCanTransitionAfterVerseChange),
        isLyricLogue = useSelector(mapIsLyricLogue),
        lyricSongIndex = useSelector(mapLyricSongIndex),
        lyricAnnotationIndex = useSelector(mapLyricAnnotationIndex),
        isOverviewShown = useSelector(mapIsOverviewShown),
        isTipsShown = useSelector(mapIsTipsShown),
        isCarouselShown = useSelector(mapIsCarouselShown),
        isNavExpanded = useSelector(mapIsNavExpanded),
        isLyricExpanded = useSelector(mapIsLyricExpanded),
        isDotsSlideShown = useSelector(mapIsDotsSlideShown),
        isOverlayShown = useSelector(mapIsOverlayShown),
        songOverviewShown =
            !isLyricLogue && isOverviewShown,
        tipType = getSongTipType(lyricSongIndex)

    useEffect(() => {
        if (isCarouselShown) {
            logState('isCarouselShown')
        }
    }, [isCarouselShown])

    useEffect(() => {
        if (isDotsSlideShown) {
            logState('isDotsSlideShown')
        }
    }, [isDotsSlideShown])

    useEffect(() => {
        if (isLyricExpanded) {
            logState('isLyricExpanded')
        }
    }, [isLyricExpanded])

    useEffect(() => {
        if (isNavExpanded) {
            logState('isNavExpanded')
        }
    }, [isNavExpanded])

    return (
        <div
            {...{
                ...didMount && {
                    className: cx(
                        'ShownWrapper',

                        canTransitionAfterSongChange &&
                            'ShW__canTransitionAfterSongChange',

                        canTransitionAfterVerseChange &&
                            'ShW__canTransitionAfterVerseChange',

                        lyricAnnotationIndex ?
                            'ShW__annotationShown' :
                            'ShW__annotationHidden',

                        songOverviewShown ?
                            'ShW__songOverviewShown' :
                            'ShW__songOverviewHidden',

                        // Don't show these class names between songs.
                        isSongChangeDone && isTipsShown && [
                            'ShW__tipsShown',
                            `ShW__tips__${tipType}`,
                            (
                                /**
                                 * If dot is not selected, render the tips hand
                                 * that is pointed at dots toggle.
                                 */
                                (tipType === ANNOTATION && !backstory && !reference && !wormhole) ||
                                (tipType === WIKI && !reference) ||
                                (tipType === WORMHOLES && !wormhole)
                            ) ?
                                'ShW__tips__isPointedAtDots' :
                                'ShW__tips__isPointedAtLyrics',
                        ],

                        isCarouselShown && 'ShW__carouselShown',
                        isNavExpanded && 'ShW__navExpanded',

                        isDotsSlideShown ?
                            'ShW__dotsShown' :
                            'ShW__dotsHidden',

                        isLyricExpanded && 'ShW__lyricExpanded',

                        isOverlayShown ?
                            'ShW__overlayShown' :
                            'ShW__overlayHidden',
                        'abF',
                    ),
                },
            }}
        >
            {children}
        </div>
    )
}

ShownWrapper.propTypes = {
    didMount: PropTypes.bool.isRequired,
    children: PropTypes.any.isRequired,
}

export default memo(getDidMountHoc(ShownWrapper))
