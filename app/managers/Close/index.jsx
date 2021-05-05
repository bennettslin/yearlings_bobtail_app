/**
 * Handler for closing multiple sections. Because the logic is so similar for
 * each section, it is better for dev clarity to keep them together.
 */
import { forwardRef, useImperativeHandle, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
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
    updateIsMarketingShown,
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
    mapIsMarketingShown,
    mapIsScoreShown,
} from '../../redux/toggle/selector'
import { mapIsWikiShown } from '../../redux/wiki/selector'

const CloseHandler = forwardRef((props, ref) => {
    const
        dispatch = useDispatch(),
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
        isMarketingShown = useSelector(mapIsMarketingShown),
        isScoreShown = useSelector(mapIsScoreShown),
        [didMount, setDidMount] = useState(false)

    const closeJustTopmost = ({
        exemptAudioOptions,
        exemptAbout,
        exemptPitch,
        exemptScore,
        exemptWiki,

    } = {}) => {
        // Close or collapse just one and do nothing else.
        if (isAudioOptionsExpanded && !exemptAudioOptions) {
            dispatch(updateIsAudioOptionsExpanded())

        } else if (isWikiShown && !exemptWiki) {
            dispatch(updateWikiIndices())

        } else if (isScoreShown && !exemptScore) {
            dispatch(updateIsScoreShown())

        } else if (isAboutShown && !exemptAbout) {
            dispatch(updateIsAboutShown())

        } else if (isMarketingShown && !exemptPitch) {
            dispatch(updateIsMarketingShown())

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
        if (!exemptAnnotation) {
            dispatch(updateSelectedStore({ selectedAnnotationIndex: 0 }))
        }

        if (!exemptCarousel) {
            dispatch(updateIsCarouselExpanded())
        }

        if (!exemptDots) {
            dispatch(updateIsDotsSlideShown())
        }

        if (!exemptLyric) {
            dispatch(updateIsLyricExpanded())
        }

        if (!exemptNav) {
            dispatch(updateIsNavExpanded())
        }

        if (!exemptOverview) {
            // Just hide overview when opening other sections.
            if (isOverviewShown) {
                dispatch(updateOptionStore({
                    selectedOverviewOption: HIDDEN,
                }))
            }
        }

        if (!exemptTips) {
            // Just hide tips when opening other sections.
            if (isTipsShown) {
                dispatch(updateOptionStore({
                    selectedTipsOption: HIDDEN,
                }))
            }
        }

        if (!exemptActivatedVerse) {
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
        if (isMarketingShown) {
            closeJustTopmost({ exemptPitch: true })
            closeMainSections({ exemptAnnotation: true })
        }
    }, [isMarketingShown])

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
    return null
})

export default CloseHandler
