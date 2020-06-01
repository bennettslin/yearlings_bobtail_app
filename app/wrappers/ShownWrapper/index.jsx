import React from 'react'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { getSongTipType } from '../../album/api/tips'
import { WIKI, WORMHOLES } from '../../constants/tips'
import {
    mapReferenceDot,
    mapWormholeDot
} from '../../redux/dots/selectors'
import { CAN_LYRIC_CAROUSEL_ENTER_SELECTOR } from '../../redux/entrance/selectors'
import {
    mapIsLyricLogue,
    mapLyricSongIndex,
    mapLyricAnnotationIndex
} from '../../redux/lyric/selectors'
import {
    mapIsTipsShown,
    mapIsOverviewShown
} from '../../redux/option/selectors'
import {
    mapIsCarouselShown,
    mapIsNavShown,
    mapIsLyricExpanded,
    mapIsDotsSlideShown
} from '../../redux/toggle/selectors'
import { mapIsOverlayShown } from '../../redux/transient/selectors'

const ShownWrapper = ({ children }) => {
    const
        reference = useSelector(mapReferenceDot),
        wormhole = useSelector(mapWormholeDot),
        canLyricCarouselEnter = useSelector(CAN_LYRIC_CAROUSEL_ENTER_SELECTOR),
        isLyricLogue = useSelector(mapIsLyricLogue),
        lyricSongIndex = useSelector(mapLyricSongIndex),
        lyricAnnotationIndex = useSelector(mapLyricAnnotationIndex),
        overviewShown = useSelector(mapIsOverviewShown),
        tipsShown = useSelector(mapIsTipsShown),
        isCarouselShown = useSelector(mapIsCarouselShown),
        isNavShown = useSelector(mapIsNavShown),
        isLyricExpanded = useSelector(mapIsLyricExpanded),
        isDotsSlideShown = useSelector(mapIsDotsSlideShown),
        isOverlayShown = useSelector(mapIsOverlayShown),

        songOverviewShown =
            !isLyricLogue && overviewShown,
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
                    canLyricCarouselEnter && tipsShown && [
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
                    isLyricExpanded ?
                        'ShW__lyricExpanded' :
                        'ShW__lyricCollapsed',

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
