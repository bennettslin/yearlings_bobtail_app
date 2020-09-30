import React, { forwardRef, useImperativeHandle, useRef, memo } from 'react'
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
} from '../../../redux/activated/selector'
import {
    mapSelectedAnnotationIndex,
    mapIsSelectedLogue
} from '../../../redux/selected/selector'
import {
    mapIsNavExpanded,
    mapIsDotsSlideShown,
    mapIsLyricExpanded,
    mapIsScoreShown
} from '../../../redux/toggle/selector'
import { mapIsHeightlessLyric } from '../../../redux/viewport/selector'
import { mapIsWikiShown } from '../../../redux/wiki/selector'

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
        isNavExpanded = useSelector(mapIsNavExpanded),
        isDotsSlideShown = useSelector(mapIsDotsSlideShown),
        isLyricExpanded = useSelector(mapIsLyricExpanded),
        isScoreShown = useSelector(mapIsScoreShown)

    const handleNavigation = keyName => {
        let annotationIndexWasAccessed = false,
            keyWasRegistered = false

        if (!isSelectedLogue && !isScoreShown && !isWikiShown) {

            // We're selecting the activated verse.
            if (isActivated && keyName === ENTER) {
                keyWasRegistered = true

                dispatchVerse.current({
                    scrollLog: 'Key selected',
                    verseIndex: activatedVerseIndex,
                    fromActivated: true
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
                isNavExpanded &&
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

export default memo(NavigationManager)
