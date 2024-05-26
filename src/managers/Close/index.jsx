/**
 * Handler for closing multiple sections. Because the logic is so similar for
 * each section, it is better for dev clarity to keep them together.
 */
import React, { forwardRef, useImperativeHandle, useEffect, useState, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AlbumPromoDispatcher from '../../dispatchers/Promo/Album'
import { updateActivatedVerseIndex } from '../../redux/activated/action'
import { updateOptionStore } from '../../redux/option/action'
import { updateWikiIndices } from '../../redux/session/action'
import { updateSelectedStore } from '../../redux/selected/action'
import {
    updateIsAboutShown,
    updateIsAudioOptionsExpanded,
    updateIsCarouselExpanded,
    updateIsDotsSlideShown,
    updateIsLyricExpanded,
    updateIsNavExpanded,
    updateIsScoreShown,
} from '../../redux/toggle/action'
import { HIDDEN } from '../../constants/options'
import { mapIsActivated } from '../../redux/activated/selector'
import { mapIsOverviewShown } from '../../redux/overview/selector'
import { mapIsAnnotationShown } from '../../redux/selected/selector'
import { mapIsSliderMoving } from '../../redux/slider/selector'
import { mapIsTipsShown } from '../../redux/tips/selector'
import {
    mapIsAboutShown,
    mapIsAudioOptionsExpanded,
    mapIsCarouselExpanded,
    mapIsDotsSlideShown,
    mapIsLyricExpanded,
    mapIsNavExpanded,
    mapIsPromoShown,
    mapIsScoreShown,
} from '../../redux/toggle/selector'
import { mapIsWikiShown } from '../../redux/wiki/selector'

const CloseHandler = forwardRef((props, ref) => {
    const
        dispatch = useDispatch(),
        dispatchPromo = useRef(),
        isActivated = useSelector(mapIsActivated),
        isOverviewShown = useSelector(mapIsOverviewShown),
        isTipsShown = useSelector(mapIsTipsShown),
        isAnnotationShown = useSelector(mapIsAnnotationShown),
        isWikiShown = useSelector(mapIsWikiShown),
        isSliderMoving = useSelector(mapIsSliderMoving),
        isAboutShown = useSelector(mapIsAboutShown),
        isAudioOptionsExpanded = useSelector(mapIsAudioOptionsExpanded),
        isCarouselExpanded = useSelector(mapIsCarouselExpanded),
        isDotsSlideShown = useSelector(mapIsDotsSlideShown),
        isLyricExpanded = useSelector(mapIsLyricExpanded),
        isNavExpanded = useSelector(mapIsNavExpanded),
        isPromoShown = useSelector(mapIsPromoShown),
        isScoreShown = useSelector(mapIsScoreShown),
        [didMount, setDidMount] = useState(false)

    const closeJustTopmost = ({
        exemptAudioOptions,
        exemptAbout,
        exemptPromo,
        exemptScore,
        exemptWiki,

    } = {}) => {
        // Close or collapse just one and do nothing else.
        if (!exemptAudioOptions && isAudioOptionsExpanded) {
            dispatch(updateIsAudioOptionsExpanded())

        } else if (!exemptWiki && isWikiShown) {
            dispatch(updateWikiIndices())

        } else if (!exemptScore && isScoreShown) {
            dispatch(updateIsScoreShown())

        } else if (!exemptAbout && isAboutShown) {
            dispatch(updateIsAboutShown())

        } else if (!exemptPromo && isPromoShown) {
            dispatchPromo.current()

        } else {
            return false
        }

        return true
    }

    const closeMainSections = ({
        exemptAnnotation,
        exemptCarousel = true, // Only body click closes carousel.
        exemptDots,
        exemptLyric,
        exemptNav,
        exemptOverview,
        exemptTips,
        exemptActivatedVerse,

    } = {}) => {
        if (!exemptAnnotation && isAnnotationShown) {
            dispatch(updateSelectedStore({ selectedAnnotationIndex: 0 }))
        }

        if (!exemptCarousel && isCarouselExpanded) {
            dispatch(updateIsCarouselExpanded())
        }

        if (!exemptDots && isDotsSlideShown) {
            dispatch(updateIsDotsSlideShown())
        }

        if (!exemptLyric && isLyricExpanded) {
            dispatch(updateIsLyricExpanded())
        }

        if (!exemptNav && isNavExpanded) {
            dispatch(updateIsNavExpanded())
        }

        if (!exemptOverview && isOverviewShown) {
            dispatch(updateOptionStore({
                selectedOverviewOption: HIDDEN,
            }))
        }

        if (!exemptTips && isTipsShown) {
            dispatch(updateOptionStore({
                selectedTipsOption: HIDDEN,
            }))
        }

        if (!exemptActivatedVerse && isActivated) {
            dispatch(updateActivatedVerseIndex())
        }
    }

    useEffect(() => {
        if (didMount) {
            if (isAnnotationShown) {
                closeJustTopmost()
                closeMainSections({
                    exemptAnnotation: true,
                    exemptLyric: true,
                })
            }
        } else {
            setDidMount(true)
        }
    }, [isAnnotationShown])

    useEffect(() => {
        if (didMount) {
            if (isCarouselExpanded) {
                closeJustTopmost()
                closeMainSections({
                    exemptAnnotation: true,
                    exemptDots: true,

                    /**
                     * Doesn't actually matter, since carousel can only expand
                     * when nav is collapsed.
                     */
                    exemptNav: true,
                })
            }
        } else {
            setDidMount(true)
        }
    }, [isCarouselExpanded])

    useEffect(() => {
        if (isDotsSlideShown) {
            closeJustTopmost()
            closeMainSections({
                exemptDots: true,
            })
        }
    }, [isDotsSlideShown])

    useEffect(() => {
        if (isLyricExpanded) {
            closeJustTopmost()
            closeMainSections({
                // Continue to show selected annotation in overlay.
                exemptAnnotation: true,
                exemptLyric: true,
                exemptActivatedVerse: true,
            })
        }
    }, [isLyricExpanded])

    useEffect(() => {
        if (isSliderMoving || isActivated) {
            closeJustTopmost()
            closeMainSections({
                exemptAnnotation: true,
                exemptActivatedVerse: true,
                exemptLyric: true,
            })
        }
    }, [isActivated, isSliderMoving])

    useEffect(() => {
        if (isNavExpanded) {
            closeJustTopmost()
            closeMainSections({
                exemptNav: true,
            })
        } else {
            setDidMount(true)
        }
    }, [isNavExpanded])

    useEffect(() => {
        if (isOverviewShown) {
            closeJustTopmost()
            closeMainSections({
                exemptOverview: true,
                exemptTips: true,
            })
        }
    }, [isOverviewShown])

    useEffect(() => {
        if (isTipsShown) {
            closeJustTopmost()
            closeMainSections({
                exemptTips: true,
                exemptOverview: true,
            })
        }
    }, [isTipsShown])

    useEffect(() => {
        if (isScoreShown) {
            closeJustTopmost({ exemptScore: true })
            closeMainSections({ exemptAnnotation: true })
        }
    }, [isScoreShown])

    useEffect(() => {
        if (isAboutShown) {
            closeJustTopmost({ exemptAbout: true })
            closeMainSections({ exemptAnnotation: true })
        }
    }, [isAboutShown])

    useEffect(() => {
        if (isPromoShown) {
            closeJustTopmost({ exemptPromo: true })
            closeMainSections({ exemptAnnotation: true })
        }
    }, [isPromoShown])

    useEffect(() => {
        if (isWikiShown) {
            closeJustTopmost({ exemptWiki: true })
            closeMainSections({ exemptAnnotation: true })
        }
    }, [isWikiShown])

    const closeForBodyClick = () => {
        if (!closeJustTopmost()) {
            closeMainSections({
                // When nav is expanded, collapse both carousel and nav.
                exemptCarousel: !isNavExpanded,
                exemptLyric: true,

                // If clicking to dismiss tips, leave overview shown.
                exemptOverview: isTipsShown,
            })
        }
    }

    useImperativeHandle(ref, () => closeForBodyClick)
    return (
        <AlbumPromoDispatcher {...{ ref: dispatchPromo }} />
    )
})

export default CloseHandler
