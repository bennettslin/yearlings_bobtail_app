/**
 * Handler for closing multiple sections. Because the logic is so similar for
 * each section, it is better for dev clarity to keep them together.
 */
// eslint-disable-next-line object-curly-newline
import { forwardRef, useImperativeHandle, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateActivatedStore } from '../../redux/activated/action'
import { updateOptionStore } from '../../redux/option/action'
import { resetWiki } from '../../redux/session/action'
import { updateSelectedStore } from '../../redux/selected/action'
import {
    updateToggleStore,
    updateIsAboutShown
} from '../../redux/toggle/action'
import { HIDDEN } from '../../constants/options'
import { mapIsActivated } from '../../redux/activated/selectors'
import {
    mapIsSongShownOverview,
    mapIsTipsShown
} from '../../redux/option/selectors'
import { mapIsOverviewShown } from '../../redux/overview/selectors'
import { mapIsAnnotationShown } from '../../redux/selected/selectors'
import { mapIsWikiShown } from '../../redux/session/selectors'
import { mapIsSliderMoving } from '../../redux/slider/selectors'
import {
    mapIsCarouselShown,
    mapIsDotsSlideShown,
    mapIsLyricExpanded,
    mapIsScoreShown,
    mapIsAboutShown
} from '../../redux/toggle/selectors'

const CloseHandler = forwardRef((props, ref) => {
    const
        dispatch = useDispatch(),
        isActivated = useSelector(mapIsActivated),
        isOverviewShown = useSelector(mapIsOverviewShown),
        isTipsShown = useSelector(mapIsTipsShown),
        isSongShownOverview = useSelector(mapIsSongShownOverview),
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
            dispatch(resetWiki())

        } else if (isScoreShown && !exemptScore) {
            dispatch(updateToggleStore({ isScoreShown: false }))

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
            dispatch(updateToggleStore({ isDotsSlideShown: false }))
        }

        if (!exemptLyric) {
            dispatch(updateToggleStore({ isLyricExpanded: false }))
        }

        if (!exemptNav) {
            dispatch(updateToggleStore({ isNavShown: false }))
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
            // Cheesy way to ignore when overview is shown from song change.
            if (isSongShownOverview) {
                dispatch(updateOptionStore({ isSongShownOverview: false }))
            }

            closeMainPopups()
            closeMainSections({
                exemptOverview: true,
                ...isSongShownOverview && {
                    exemptTips: true
                }
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
