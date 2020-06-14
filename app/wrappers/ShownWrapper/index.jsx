import React from 'react'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { getSongTipType } from '../../api/album/tips'
import { WIKI, WORMHOLES } from '../../constants/tips'
import {
    mapReferenceDot,
    mapWormholeDot
} from '../../redux/dots/selector'
import { mapCanLyricCarouselEnter } from '../../redux/entrance/selector'
import {
    mapIsLyricLogue,
    mapLyricSongIndex,
    mapLyricAnnotationIndex
} from '../../redux/lyric/selector'
import { mapIsOverlayShown } from '../../redux/overlay/selector'
import { mapIsOverviewShown } from '../../redux/overview/selector'
import { mapIsTipsShown } from '../../redux/tips/selector'
import {
    mapIsCarouselShown,
    mapIsNavShown,
    mapIsLyricExpanded,
    mapIsDotsSlideShown
} from '../../redux/toggle/selector'

const ShownWrapper = ({ children }) => {
    const
        reference = useSelector(mapReferenceDot),
        wormhole = useSelector(mapWormholeDot),
        canLyricCarouselEnter = useSelector(mapCanLyricCarouselEnter),
        isLyricLogue = useSelector(mapIsLyricLogue),
        lyricSongIndex = useSelector(mapLyricSongIndex),
        lyricAnnotationIndex = useSelector(mapLyricAnnotationIndex),
        isOverviewShown = useSelector(mapIsOverviewShown),
        isTipsShown = useSelector(mapIsTipsShown),
        isCarouselShown = useSelector(mapIsCarouselShown),
        isNavShown = useSelector(mapIsNavShown),
        isLyricExpanded = useSelector(mapIsLyricExpanded),
        isDotsSlideShown = useSelector(mapIsDotsSlideShown),
        isOverlayShown = useSelector(mapIsOverlayShown),

        songOverviewShown =
            !isLyricLogue && isOverviewShown,
        tipType = getSongTipType(lyricSongIndex)

    return (
        <div
            {...{
                className: cx(
                    'ShownWrapper',
                    'abF',

                    lyricAnnotationIndex ?
                        'ShW__annotationShown' :
                        'ShW__annotationHidden',

                    songOverviewShown ?
                        'ShW__songOverviewShown' :
                        'ShW__songOverviewHidden',

                    // Don't show these class names between songs.
                    canLyricCarouselEnter && isTipsShown && [
                        'ShW__tipsShown',
                        `ShW__tips__${tipType}`,
                        (
                            /**
                             * If dot is not selected, render the tips hand
                             * that is pointed at dots toggle.
                             */
                            (tipType === WIKI && !reference) ||
                            (tipType === WORMHOLES && !wormhole)
                        ) ?
                            'ShW__tips__isPointedAtDots' :
                            'ShW__tips__isPointedAtLyrics'
                    ],

                    isCarouselShown &&
                        'ShW__carouselExpanded',
                    isNavShown &&
                        'ShW__navExpanded',

                    isDotsSlideShown ?
                        'ShW__dotsShown' :
                        'ShW__dotsHidden',

                    isLyricExpanded && 'ShW__lyricExpanded',

                    isOverlayShown ?
                        'ShW__overlayShown' :
                        'ShW__overlayHidden'
                )
            }}
        >
            {children}
        </div>
    )
}

ShownWrapper.propTypes = {
    children: PropTypes.any.isRequired
}

export default ShownWrapper
