import React, { memo } from 'react'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import AccessLetters from '../../Access/Letters'
import { mapSelectedDotsBit } from '../../../redux/dots/selector'
import { mapLyricAnnotationIndex } from '../../../redux/lyric/selector'
import {
    mapIsCarouselShown,
    mapIsNavShown,
    mapIsDotsSlideShown,
    mapIsLyricExpanded
} from '../../../redux/toggle/selector'
import { ARROW_LEFT, ARROW_RIGHT } from '../../../constants/access'
import './style'

const CarouselAccess = ({ inLyric }) => {

    const
        selectedDotsBit = useSelector(mapSelectedDotsBit),
        lyricAnnotationIndex = useSelector(mapLyricAnnotationIndex),
        isCarouselShown = useSelector(mapIsCarouselShown),
        isNavShown = useSelector(mapIsNavShown),
        isDotsSlideShown = useSelector(mapIsDotsSlideShown),
        isLyricExpanded = useSelector(mapIsLyricExpanded),

        showIfAccessOn = Boolean(
            /**
             * Must have at least one selected dot, and no selected
             * annotation.
             */
            selectedDotsBit &&
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
