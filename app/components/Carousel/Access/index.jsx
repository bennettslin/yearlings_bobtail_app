import React, { memo } from 'react'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import AccessLetters from '../../Access/Letters'
import { DOTS_BIT_NUMBER_SELECTOR } from '../../../redux/dots/selectors'
import { LYRIC_ANNOTATION_INDEX_SELECTOR } from '../../../redux/lyric/selectors'
import {
    IS_CAROUSEL_SHOWN_SELECTOR,
    IS_NAV_SHOWN_SELECTOR,
    IS_DOTS_SLIDE_SHOWN_SELECTOR,
    IS_LYRIC_EXPANDED_SELECTOR
} from '../../../redux/toggle/selectors'
import { ARROW_LEFT, ARROW_RIGHT } from '../../../constants/access'
import './style'

const CarouselAccess = ({ inLyric }) => {

    const
        dotsBitNumber = useSelector(DOTS_BIT_NUMBER_SELECTOR),
        lyricAnnotationIndex = useSelector(LYRIC_ANNOTATION_INDEX_SELECTOR),
        isCarouselShown = useSelector(IS_CAROUSEL_SHOWN_SELECTOR),
        isNavShown = useSelector(IS_NAV_SHOWN_SELECTOR),
        isDotsSlideShown = useSelector(IS_DOTS_SLIDE_SHOWN_SELECTOR),
        isLyricExpanded = useSelector(IS_LYRIC_EXPANDED_SELECTOR),

        showIfAccessOn = Boolean(
            /**
             * Must have at least one selected dot, and no selected
             * annotation.
             */
            dotsBitNumber &&
            !lyricAnnotationIndex &&

            // Don't show in carousel if carousel is not shown.
            (inLyric || isCarouselShown) && (
                (
                    // Must not show nav or have dots section open...
                    !isNavShown &&
                    !isDotsSlideShown
                ) || (
                    // ... or else have lyric expanded.
                    isLyricExpanded
                )
            )
        )

    return (
        <AccessLetters
            {...{
                accessIconsName: inLyric ? 'lyricAnnotation' : 'carousel',
                ...inLyric && { className: 'top__lyricChild' },
                showIfAccessOn,
                accessKeys: [
                    ARROW_LEFT,
                    ARROW_RIGHT
                ]
            }}
        />
    )
}

CarouselAccess.propTypes = {
    inLyric: PropTypes.bool
}

export default memo(CarouselAccess)
