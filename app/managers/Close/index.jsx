/**
 * Handler for closing multiple sections. Because the logic is so similar for
 * each section, it is better for dev clarity to keep them together.
 */
// eslint-disable-next-line object-curly-newline
import { forwardRef, useImperativeHandle, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateActivatedStore } from '../../redux/activated/action'
import { updateOptionStore } from '../../redux/option/action'
import { updateWikiIndices } from '../../redux/session/action'
import { updateSelectedStore } from '../../redux/selected/action'
import {
    toggleIsLyricExpanded,
    updateIsAboutShown,
    toggleIsDotsSlideShown,
    toggleIsNavShown,
    toggleIsScoreShown
} from '../../redux/toggle/action'
import { HIDDEN } from '../../constants/options'
import { mapIsActivated } from '../../redux/activated/selector'
import { mapIsOverviewShown } from '../../redux/overview/selector'
import { mapIsAnnotationShown } from '../../redux/selected/selector'
import { mapIsSliderMoving } from '../../redux/slider/selector'
import { mapIsTipsShown } from '../../redux/tips/selector'
import {
    mapIsCarouselShown,
    mapIsDotsSlideShown,
    mapIsLyricExpanded,
    mapIsScoreShown,
    mapIsAboutShown
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
        isCarouselShown = useSelector(mapIsCarouselShown),
        isDotsSlideShown = useSelector(mapIsDotsSlideShown),
        isLyricExpanded = useSelector(mapIsLyricExpanded),
        isScoreShown = useSelector(mapIsScoreShown),
        isAboutShown = useSelector(mapIsAboutShown)

    const closeMainPopups = ({
        exemptScore,
        exemptAbout,
        exemptWiki

    } = {}) => {
        // If popup is open, close it and do nothing else.
        if (isWikiShown && !exemptWiki) {
            dispatch(updateWikiIndices())

        } else if (isScoreShown && !exemptScore) {
            dispatch(toggleIsScoreShown())

        } else if (isAboutShown && !exemptAbout) {
            dispatch(updateIsAboutShown())

        } else {
            return false
        }

        return true
    }

    const closeMainSections = ({
        exemptAnnotation,
        exemptDots,
        exemptLyric,
        exemptNav,
        exemptOverview,
        exemptTips,
        exemptActivatedVerse

    } = {}) => {
        if (!exemptAnnotation) {
            dispatch(updateSelectedStore({ selectedAnnotationIndex: 0 }))
        }

        if (!exemptDots) {
            dispatch(toggleIsDotsSlideShown())
        }

        if (!exemptLyric) {
            dispatch(toggleIsLyricExpanded())
        }

        if (!exemptNav) {
            dispatch(toggleIsNavShown())
        }

        if (!exemptOverview) {
            // Just hide overview when opening other sections.
            if (isOverviewShown) {
                dispatch(updateOptionStore({
                    selectedOverviewOption: HIDDEN
                }))
            }
        }

        if (!exemptTips) {
            // Just hide tips when opening other sections.
            if (isTipsShown) {
                dispatch(updateOptionStore({
                    selectedTipsOption: HIDDEN
                }))
            }
        }

        if (!exemptActivatedVerse) {
            dispatch(updateActivatedStore())
        }
    }

    useEffect(() => {
        if (isAnnotationShown) {
            closeMainPopups()
            closeMainSections({
                exemptAnnotation: true,
                exemptLyric: true
            })
        }
    }, [isAnnotationShown])

    useEffect(() => {
        closeMainPopups()
        closeMainSections({
            exemptAnnotation: true,
            exemptDots: true,
            exemptNav: true
        })
    }, [isCarouselShown])

    useEffect(() => {
        if (isDotsSlideShown) {
            closeMainPopups()
            closeMainSections({
                exemptDots: true
            })
        }
    }, [isDotsSlideShown])

    useEffect(() => {
        if (isLyricExpanded) {
            closeMainPopups()
            closeMainSections({
                // Continue to show selected annotation in overlay.
                exemptAnnotation: true,
                exemptLyric: true,
                exemptActivatedVerse: true
            })
        }
    }, [isLyricExpanded])

    useEffect(() => {
        if (isSliderMoving || isActivated) {
            closeMainPopups()
            closeMainSections({
                exemptActivatedVerse: true,
                exemptLyric: true
            })
        }
    }, [isActivated, isSliderMoving])

    useEffect(() => {
        if (isOverviewShown) {
            closeMainPopups()
            closeMainSections({
                exemptOverview: true,
                exemptTips: true
            })
        }
    }, [isOverviewShown])

    useEffect(() => {
        if (isTipsShown) {
            closeMainPopups()
            closeMainSections({
                exemptTips: true,
                exemptOverview: true
            })
        }
    }, [isTipsShown])

    useEffect(() => {
        if (isScoreShown) {
            closeMainPopups({ exemptScore: true })
            closeMainSections({ exemptAnnotation: true })
        }
    }, [isScoreShown])

    useEffect(() => {
        if (isAboutShown) {
            closeMainPopups({ exemptAbout: true })
            closeMainSections({ exemptAnnotation: true })
        }
    }, [isAboutShown])

    useEffect(() => {
        if (isWikiShown) {
            closeMainPopups({ exemptWiki: true })
            closeMainSections({ exemptAnnotation: true })
        }
    }, [isWikiShown])

    const closeForBodyClick = () => {
        if (!closeMainPopups()) {
            closeMainSections({
                exemptLyric: true,

                // If clicking to dismiss tips, leave overview shown.
                exemptOverview: isTipsShown
            })
        }
    }

    useImperativeHandle(ref, () => closeForBodyClick)
    return null
})

export default CloseHandler
