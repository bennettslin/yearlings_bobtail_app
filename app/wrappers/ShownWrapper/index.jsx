import React from 'react'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { getSongTipType } from '../../album/api/tips'
import { WIKI, WORMHOLES } from '../../constants/tips'
import {
    REFERENCE_SELECTOR,
    WORMHOLE_SELECTOR
} from '../../redux/dots/selectors'
import { CAN_LYRIC_CAROUSEL_ENTER_SELECTOR } from '../../redux/entrance/selectors'
import {
    IS_LYRIC_LOGUE_SELECTOR,
    LYRIC_SONG_INDEX_SELECTOR,
    LYRIC_ANNOTATION_INDEX_SELECTOR
} from '../../redux/lyric/selectors'
import {
    TIPS_SHOWN_SELECTOR,
    OVERVIEW_SHOWN_SELECTOR
} from '../../redux/option/selectors'
import {
    IS_CAROUSEL_SHOWN_SELECTOR,
    IS_NAV_SHOWN_SELECTOR,
    IS_LYRIC_EXPANDED_SELECTOR,
    IS_DOTS_SLIDE_SHOWN_SELECTOR
} from '../../redux/toggle/selectors'
import { IS_OVERLAY_SHOWN_SELECTOR } from '../../redux/transient/selectors'

const ShownWrapper = ({ children }) => {
    const
        reference = useSelector(REFERENCE_SELECTOR),
        wormhole = useSelector(WORMHOLE_SELECTOR),
        canLyricCarouselEnter = useSelector(CAN_LYRIC_CAROUSEL_ENTER_SELECTOR),
        isLyricLogue = useSelector(IS_LYRIC_LOGUE_SELECTOR),
        lyricSongIndex = useSelector(LYRIC_SONG_INDEX_SELECTOR),
        lyricAnnotationIndex = useSelector(LYRIC_ANNOTATION_INDEX_SELECTOR),
        overviewShown = useSelector(OVERVIEW_SHOWN_SELECTOR),
        tipsShown = useSelector(TIPS_SHOWN_SELECTOR),
        isCarouselShown = useSelector(IS_CAROUSEL_SHOWN_SELECTOR),
        isNavShown = useSelector(IS_NAV_SHOWN_SELECTOR),
        isLyricExpanded = useSelector(IS_LYRIC_EXPANDED_SELECTOR),
        isDotsSlideShown = useSelector(IS_DOTS_SLIDE_SHOWN_SELECTOR),
        isOverlayShown = useSelector(IS_OVERLAY_SHOWN_SELECTOR),

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
