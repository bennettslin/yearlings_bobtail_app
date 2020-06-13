// eslint-disable-next-line object-curly-newline
import React, { forwardRef, useImperativeHandle, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateAccessStore } from '../../../redux/access/action'
import { updateActivatedStore } from '../../../redux/activated/action'
import { updateSelectedStore } from '../../../redux/selected/action'
import { updateToggleStore } from '../../../redux/toggle/action'
import { updateWikiIndices } from '../../../redux/session/action'
import AboutDispatcher from '../../../dispatchers/About'
import AudioOptionDispatcher from '../../../dispatchers/AudioOption'
import CarouselNavDispatcher from '../../../dispatchers/CarouselNav'
import DotsSlideDispatcher from '../../../handlers/DotsSlide/Dispatcher'
import EarColumnDispatcher from '../../../dispatchers/EarColumn'
import ActivatedSceneDispatcher from '../../../dispatchers/Activated/Scene'
import ActivatedVerseDispatcher from '../../../dispatchers/Activated/Verse'
import LyricDispatcher from '../../../handlers/Lyric/Dispatcher'
import OverviewDispatcher from '../../../handlers/Overview/Dispatcher'
import PlayDispatcher from '../../../dispatchers/Play'
import TipsDispatcher from '../../../handlers/Tips/Dispatcher'
import ScoreDispatcher from '../../../handlers/Score/Dispatcher'
import ScrollVerseDispatcher from '../../../dispatchers/ScrollVerse'
import SongDispatcher from '../../../handlers/Song/Dispatcher'
import {
    PREVIOUS_VERSE_KEY,
    NEXT_VERSE_KEY,
    AUDIO_PLAY_KEY,
    AUDIO_OPTIONS_TOGGLE_KEY,
    PREVIOUS_SONG_KEY,
    NEXT_SONG_KEY,
    CAROUSEL_TOGGLE_KEY,
    DOTS_SLIDE_TOGGLE_KEY,
    LYRIC_COLUMN_TOGGLE_KEY,
    LYRIC_EXPAND_KEY,
    LYRIC_SCROLL_TOGGLE_KEY,
    OVERVIEW_TOGGLE_KEY,
    SCORE_TOGGLE_KEY,
    PREVIOUS_SCENE_KEY,
    NEXT_SCENE_KEY,
    TIPS_TOGGLE_KEY,
    ABOUT_TOGGLE_KEY
} from '../../../constants/access'
import { HIDDEN } from '../../../constants/options'
import { mapIsOverviewShown } from '../../../redux/overview/selectors'
import { mapIsAnnotationShown } from '../../../redux/selected/selectors'
import { mapIsTipsShown } from '../../../redux/tips/selectors'
import {
    mapIsNavShown,
    mapIsDotsSlideShown,
    mapIsLyricExpanded,
    mapIsScoreShown,
    mapIsAboutShown
} from '../../../redux/toggle/selectors'
import { mapIsWikiShown } from '../../../redux/wiki/selectors'

const LetterManager = forwardRef((props, ref) => {
    const
        dispatch = useDispatch(),
        dispatchAbout = useRef(),
        dispatchAudioOption = useRef(),
        dispatchCarouselNav = useRef(),
        dispatchDotsSlide = useRef(),
        dispatchEarColumn = useRef(),
        activateSceneDirection = useRef(),
        activateVerse = useRef(),
        dispatchLyricExpand = useRef(),
        dispatchOverview = useRef(),
        dispatchPlay = useRef(),
        dispatchScrollVerse = useRef(),
        dispatchSong = useRef(),
        dispatchTips = useRef(),
        dispatchScore = useRef(),
        isOverviewShown = useSelector(mapIsOverviewShown),
        isTipsShown = useSelector(mapIsTipsShown),
        isAnnotationShown = useSelector(mapIsAnnotationShown),
        isWikiShown = useSelector(mapIsWikiShown),
        isNavShown = useSelector(mapIsNavShown),
        isDotsSlideShown = useSelector(mapIsDotsSlideShown),
        isLyricExpanded = useSelector(mapIsLyricExpanded),
        isScoreShown = useSelector(mapIsScoreShown),
        isAboutShown = useSelector(mapIsAboutShown)

    const handleLetter = keyName => {
        let annotationIndexWasAccessed = false,
            keyWasRegistered

        switch (keyName) {
            case AUDIO_OPTIONS_TOGGLE_KEY:
                keyWasRegistered = dispatchAudioOption.current()
                break
            case AUDIO_PLAY_KEY:
                keyWasRegistered = dispatchPlay.current()
                break
            case PREVIOUS_SONG_KEY:
                keyWasRegistered = dispatchSong.current({ direction: -1 })
                annotationIndexWasAccessed = keyWasRegistered
                break
            case NEXT_SONG_KEY:
                keyWasRegistered = dispatchSong.current({ direction: 1 })
                annotationIndexWasAccessed = keyWasRegistered
                break
            case PREVIOUS_VERSE_KEY:
                keyWasRegistered = activateVerse.current.direction(-1)
                break
            case NEXT_VERSE_KEY:
                keyWasRegistered = activateVerse.current.direction(1)
                break
            case CAROUSEL_TOGGLE_KEY:
                keyWasRegistered = dispatchCarouselNav.current()
                break
            case DOTS_SLIDE_TOGGLE_KEY:
                keyWasRegistered = dispatchDotsSlide.current()
                break
            case LYRIC_COLUMN_TOGGLE_KEY:
                keyWasRegistered = dispatchEarColumn.current()
                annotationIndexWasAccessed = keyWasRegistered
                break
            case LYRIC_EXPAND_KEY:
                keyWasRegistered = dispatchLyricExpand.current()
                break
            case LYRIC_SCROLL_TOGGLE_KEY:
                keyWasRegistered = dispatchScrollVerse.current(true)
                break
            case OVERVIEW_TOGGLE_KEY:
                keyWasRegistered = dispatchOverview.current()
                break
            case PREVIOUS_SCENE_KEY:
                keyWasRegistered = activateSceneDirection.current(-1)
                break
            case NEXT_SCENE_KEY:
                keyWasRegistered = activateSceneDirection.current(1)
                break
            case SCORE_TOGGLE_KEY:
                keyWasRegistered = dispatchScore.current()
                break
            case TIPS_TOGGLE_KEY:
                keyWasRegistered = dispatchTips.current()
                break
            case ABOUT_TOGGLE_KEY:
                keyWasRegistered = dispatchAbout.current()
                break
            default:
                keyWasRegistered = false
                break
        }

        logAccess({
            log: `Key "${keyName}" was ${keyWasRegistered ? '' : 'NOT '}registered.`,
            ...keyWasRegistered && { label: keyName }
        })

        return {
            annotationIndexWasAccessed,
            keyWasRegistered
        }
    }

    const handleEscape = () => {

        // Close score popup.
        if (isScoreShown) {
            dispatchScore.current(false)

        // Close about popup.
        } else if (isAboutShown) {
            dispatchAbout.current(false)

        // Close wiki popup.
        } else if (isWikiShown) {
            dispatch(updateWikiIndices())

        // Close tips popup.
        } else if (isTipsShown) {
            dispatchTips.current({ tipsOption: HIDDEN })

        // Close overview popup.
        } else if (isOverviewShown) {
            dispatchOverview.current({ overviewOption: HIDDEN })

        // Close dots popup.
        } else if (isDotsSlideShown) {
            dispatchDotsSlide.current(false)

        // Close annotation popup.
        } else if (isAnnotationShown) {
            dispatch(updateSelectedStore({ selectedAnnotationIndex: 0 }))

        // Collapse lyric.
        } else if (isLyricExpanded) {
            dispatchLyricExpand.current(false)

        // Hide nav.
        } else if (isNavShown) {
            dispatch(updateToggleStore({ isNavShown: false }))

        // Turn access off.
        } else {
            dispatch(updateAccessStore({ isAccessOn: false }))
            dispatch(updateActivatedStore())
        }
    }

    useImperativeHandle(ref, () => ({
        escape: handleEscape,
        letter: handleLetter
    }))
    return (
        <>
            <AboutDispatcher {...{ ref: dispatchAbout }} />
            <AudioOptionDispatcher {...{ ref: dispatchAudioOption }} />
            <CarouselNavDispatcher {...{ ref: dispatchCarouselNav }} />
            <DotsSlideDispatcher {...{ ref: dispatchDotsSlide }} />
            <EarColumnDispatcher {...{ ref: dispatchEarColumn }} />
            <ActivatedSceneDispatcher {...{ ref: activateSceneDirection }} />
            <ActivatedVerseDispatcher {...{ ref: activateVerse }} />
            <LyricDispatcher {...{ ref: dispatchLyricExpand }} />
            <OverviewDispatcher {...{ ref: dispatchOverview }} />
            <PlayDispatcher {...{ ref: dispatchPlay }} />
            <ScrollVerseDispatcher {...{ ref: dispatchScrollVerse }} />
            <SongDispatcher {...{ ref: dispatchSong }} />
            <TipsDispatcher {...{ ref: dispatchTips }} />
            <ScoreDispatcher {...{ ref: dispatchScore }} />
        </>
    )

})

export default LetterManager
