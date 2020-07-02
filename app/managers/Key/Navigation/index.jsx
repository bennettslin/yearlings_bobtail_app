// eslint-disable-next-line object-curly-newline
import React, { forwardRef, useImperativeHandle, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import AnnotationNavigation from './Annotation'
import DotsSlideNavigation from './DotsSlide'
import LyricNavigation from './Lyric'
import NavNavigation from './Nav'
import { ENTER } from '../../../constants/access'
import {
    mapActivatedVerseIndex,
    mapIsActivated
} from '../../../redux/activated/selector'
import { scrollLyricToVerseInCallback } from '../../../redux/scrollLyric/action'
import {
    mapSelectedAnnotationIndex,
    mapIsSelectedLogue
} from '../../../redux/selected/selector'
import {
    mapIsNavShown,
    mapIsDotsSlideShown,
    mapIsLyricExpanded,
    mapIsScoreShown
} from '../../../redux/toggle/selector'
import { mapIsHeightlessLyric } from '../../../redux/viewport/selector'
import { mapIsWikiShown } from '../../../redux/wiki/selector'

const NavigationManager = forwardRef((props, ref) => {
    const
        dispatch = useDispatch(),
        navigateAnnotation = useRef(),
        navigateDotsSlide = useRef(),
        navigateLyric = useRef(),
        navigateNav = useRef(),
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
                keyWasRegistered = true

                dispatch(scrollLyricToVerseInCallback(
                    'Key selected',
                    activatedVerseIndex
                ))

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
        </>
    )
})

export default NavigationManager
