// eslint-disable-next-line object-curly-newline
import React, { forwardRef, useImperativeHandle, useRef } from 'react'
import { useSelector } from 'react-redux'
import VerseDispatcher from '../../../dispatchers/Verse'
import AnnotationNavigation from './Annotation'
import DotsSlideNavigation from './DotsSlide'
import LyricNavigation from './Lyric'
import NavNavigation from './Nav'
import { ENTER } from '../../../constants/access'
import {
    mapActivatedVerseIndex,
    mapIsActivated
} from '../../../redux/activated/selectors'
import {
    mapSelectedAnnotationIndex,
    mapIsSelectedLogue
} from '../../../redux/selected/selectors'
import { mapIsWikiShown } from '../../../redux/session/selectors'
import {
    mapIsNavShown,
    mapIsDotsSlideShown,
    mapIsLyricExpanded,
    mapIsScoreShown
} from '../../../redux/toggle/selectors'
import { mapIsHeightlessLyric } from '../../../redux/viewport/selectors'

const NavigationManager = forwardRef((props, ref) => {
    const
        navigateAnnotation = useRef(),
        navigateDotsSlide = useRef(),
        navigateLyric = useRef(),
        navigateNav = useRef(),
        dispatchVerse = useRef(),
        isActivated = useSelector(mapIsActivated),
        activatedVerseIndex = useSelector(mapActivatedVerseIndex),
        isHeightlessLyric = useSelector(mapIsHeightlessLyric),
        selectedAnnotationIndex = useSelector(mapSelectedAnnotationIndex),
        isSelectedLogue = useSelector(mapIsSelectedLogue),
        isWikiShown = useSelector(mapIsWikiShown),
        isNavShown = useSelector(mapIsNavShown),
        isDotsSlideShown = useSelector(mapIsDotsSlideShown),
        isLyricExpanded = useSelector(mapIsLyricExpanded),
        isScoreShown = useSelector(mapIsScoreShown)

    const handleNavigation = keyName => {
        let annotationIndexWasAccessed = false,
            keyWasRegistered = false

        if (!isSelectedLogue && !isScoreShown && !isWikiShown) {

            // We're selecting the activated verse.
            if (isActivated && keyName === ENTER) {

                keyWasRegistered = dispatchVerse.current({
                    selectedVerseIndex: activatedVerseIndex,
                    scrollLog: `Key select activated verse ${activatedVerseIndex}.`
                })

                annotationIndexWasAccessed = true

            // We're in annotation.
            } else if (selectedAnnotationIndex) {
                ({
                    annotationIndexWasAccessed,
                    keyWasRegistered
                } = navigateAnnotation.current(keyName))

            // We're in dots section.
            } else if (isDotsSlideShown) {
                keyWasRegistered = navigateDotsSlide.current(keyName)

            // We're in nav section.
            } else if (
                isNavShown &&
                !isLyricExpanded &&
                !isActivated
            ) {

                ({
                    annotationIndexWasAccessed,
                    keyWasRegistered
                } = navigateNav.current(keyName))

            // We're in lyrics section.
            } else if (!isHeightlessLyric || isLyricExpanded) {
                keyWasRegistered = navigateLyric.current(keyName)

                // If key was registered, then annotation index was accessed.
                annotationIndexWasAccessed = keyWasRegistered
            }
        }

        return {
            annotationIndexWasAccessed,
            keyWasRegistered
        }
    }

    useImperativeHandle(ref, () => handleNavigation)
    return (
        <>
            <AnnotationNavigation {...{ ref: navigateAnnotation }} />
            <DotsSlideNavigation {...{ ref: navigateDotsSlide }} />
            <LyricNavigation {...{ ref: navigateLyric }} />
            <NavNavigation {...{ ref: navigateNav }} />
            <VerseDispatcher {...{ ref: dispatchVerse }} />
        </>
    )
})

export default NavigationManager
