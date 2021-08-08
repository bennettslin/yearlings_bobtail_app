import React, { forwardRef, useImperativeHandle, useRef } from 'react'
import { useSelector } from 'react-redux'
import VerseDispatcher from '../../../dispatchers/Verse'
import AnnotationNavigation from './Annotation'
import DotsSlideNavigation from './DotsSlide'
import LyricNavigation from './Lyric'
import PromoNavigation from './Promo'
import NavNavigation from './Nav'
import { ENTER } from '../../../constants/access'
import {
    mapActivatedVerseIndex,
    mapIsActivated,
} from '../../../redux/activated/selector'
import {
    mapCanNavigateByKey,
    mapShouldNavigateLyric,
    mapShouldNavigateNav,
} from '../../../redux/focus/selector'
import { mapSelectedAnnotationIndex } from '../../../redux/selected/selector'
import {
    mapIsDotsSlideShown,
    mapIsPromoShown,
} from '../../../redux/toggle/selector'

const NavigationManager = forwardRef((props, ref) => {
    const
        navigateAnnotation = useRef(),
        navigateDotsSlide = useRef(),
        navigateLyric = useRef(),
        navigateNav = useRef(),
        navigatePromo = useRef(),
        dispatchVerse = useRef(),
        isActivated = useSelector(mapIsActivated),
        activatedVerseIndex = useSelector(mapActivatedVerseIndex),
        selectedAnnotationIndex = useSelector(mapSelectedAnnotationIndex),
        isDotsSlideShown = useSelector(mapIsDotsSlideShown),
        isPromoShown = useSelector(mapIsPromoShown),
        canNavigateByKey = useSelector(mapCanNavigateByKey),
        shouldNavigateLyric = useSelector(mapShouldNavigateLyric),
        shouldNavigateNav = useSelector(mapShouldNavigateNav)

    const handleNavigation = keyName => {
        let annotationIndexWasAccessed = false,
            keyWasRegistered = false

        if (canNavigateByKey) {
            // We're in promo popup.
            if (isPromoShown) {
                keyWasRegistered = navigatePromo.current(keyName)

            // We're selecting the activated verse.
            } else if (isActivated && keyName === ENTER) {
                keyWasRegistered = true

                dispatchVerse.current({
                    scrollLog: 'Key selected',
                    verseIndex: activatedVerseIndex,
                    fromActivated: true,
                })

                annotationIndexWasAccessed = true

            // We're in annotation.
            } else if (selectedAnnotationIndex) {
                ({
                    annotationIndexWasAccessed,
                    keyWasRegistered,
                } = navigateAnnotation.current(keyName))

            // We're in dots section.
            } else if (isDotsSlideShown) {
                keyWasRegistered = navigateDotsSlide.current(keyName)

            // We're in nav section.
            } else if (shouldNavigateNav) {

                ({
                    annotationIndexWasAccessed,
                    keyWasRegistered,
                } = navigateNav.current(keyName))

            // We're in lyrics section.
            } else if (shouldNavigateLyric) {
                keyWasRegistered = navigateLyric.current(keyName)

                // If key was registered, then annotation index was accessed.
                annotationIndexWasAccessed = keyWasRegistered
            }
        }

        return {
            annotationIndexWasAccessed,
            keyWasRegistered,
        }
    }

    useImperativeHandle(ref, () => handleNavigation)
    return (
        <>
            <AnnotationNavigation {...{ ref: navigateAnnotation }} />
            <DotsSlideNavigation {...{ ref: navigateDotsSlide }} />
            <LyricNavigation {...{ ref: navigateLyric }} />
            <NavNavigation {...{ ref: navigateNav }} />
            <PromoNavigation {...{ ref: navigatePromo }} />
            <VerseDispatcher {...{ ref: dispatchVerse }} />
        </>
    )
})

export default NavigationManager
