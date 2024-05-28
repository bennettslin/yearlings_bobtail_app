import React, { forwardRef, useImperativeHandle, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CarouselNavDispatcher from '../../../dispatchers/CarouselNav'
import DotsSlideDispatcher from '../../../dispatchers/DotsSlide'
import EarColumnDispatcher from '../../../dispatchers/EarColumn'
import ActivatedSceneDispatcher from '../../../dispatchers/Activated/Scene'
import ActivatedVerseDispatcher from '../../../dispatchers/Activated/Verse'
import LyricExpandDispatcher from '../../../dispatchers/LyricExpand'
import OverviewDispatcher from '../../../dispatchers/Overview'
import PlayDispatcher from '../../../dispatchers/Play'
import AlbumPromoDispatcher from '../../../dispatchers/Promo/Album'
import ScoreDispatcher from '../../../dispatchers/Score'
import SongDispatcher from '../../../dispatchers/Song'
import TipsDispatcher from '../../../dispatchers/Tips'
import { updateAccessStore } from '../../../redux/access/action'
import { updateActivatedVerseIndex } from '../../../redux/activated/action'
import { updateSelectedStore } from '../../../redux/selected/action'
import {
    updateIsCarouselExpanded,
    updateIsNavExpanded,
    toggleIsAboutShown,
    updateIsAboutShown,
    updateIsAutoScroll,
    updateIsAudioOptionsExpanded,
} from '../../../redux/toggle/action'
import {
    updateWikiIndices,
    toggleIsSongRepeatOn,
    incrementVolumeIndex,
    decrementVolumeIndex,
} from '../../../redux/session/action'
import {
    PREVIOUS_VERSE_KEY,
    NEXT_VERSE_KEY,
    AUDIO_PLAY_KEY,
    SONG_REPEAT_TOGGLE_KEY,
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
    ABOUT_ALBUM_TOGGLE_KEY,
    PROMO_TOGGLE_KEY,
    SPACE,
    META_ARROW_UP,
    META_ARROW_DOWN,
    ANNOTATION_TOGGLE_KEY,
} from '../../../constants/access'
import { HIDDEN } from '../../../constants/options'
import { mapIsOverviewShown } from '../../../redux/overview/selector'
import { mapIsAnnotationShown } from '../../../redux/selected/selector'
import { mapIsTipsShown } from '../../../redux/tips/selector'
import {
    mapIsNavExpanded,
    mapIsDotsSlideShown,
    mapIsLyricExpanded,
    mapIsScoreShown,
    mapIsAboutShown,
    mapIsPromoShown,
    mapIsAudioOptionsExpanded,
} from '../../../redux/toggle/selector'
import { mapIsWikiShown } from '../../../redux/wiki/selector'

const LetterManager = forwardRef((props, ref) => {
    const
        dispatch = useDispatch(),
        dispatchCarouselNav = useRef(),
        dispatchDotsSlide = useRef(),
        dispatchEarColumn = useRef(),
        activateSceneDirection = useRef(),
        activateVerse = useRef(),
        dispatchLyricExpand = useRef(),
        dispatchOverview = useRef(),
        dispatchPlay = useRef(),
        dispatchPromo = useRef(),
        dispatchSong = useRef(),
        dispatchTips = useRef(),
        dispatchScore = useRef(),
        isOverviewShown = useSelector(mapIsOverviewShown),
        isTipsShown = useSelector(mapIsTipsShown),
        isAnnotationShown = useSelector(mapIsAnnotationShown),
        isWikiShown = useSelector(mapIsWikiShown),
        isAudioOptionsExpanded = useSelector(mapIsAudioOptionsExpanded),
        isNavExpanded = useSelector(mapIsNavExpanded),
        isDotsSlideShown = useSelector(mapIsDotsSlideShown),
        isLyricExpanded = useSelector(mapIsLyricExpanded),
        isScoreShown = useSelector(mapIsScoreShown),
        isAboutShown = useSelector(mapIsAboutShown),
        isPromoShown = useSelector(mapIsPromoShown)

    const handleLetter = keyName => {
        let annotationIndexWasAccessed = false,
            keyWasRegistered

        switch (keyName) {
            case SONG_REPEAT_TOGGLE_KEY:
                dispatch(toggleIsSongRepeatOn())
                keyWasRegistered = true
                break
            case AUDIO_PLAY_KEY:
            case SPACE:
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
            case META_ARROW_UP:
                // Prevent propagation even if volume reached limit.
                keyWasRegistered = true
                dispatch(incrementVolumeIndex())
                break
            case META_ARROW_DOWN:
                // Prevent propagation even if volume reached limit.
                keyWasRegistered = true
                dispatch(decrementVolumeIndex())
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
            case ANNOTATION_TOGGLE_KEY:
                keyWasRegistered = dispatchCarouselNav.current(true)
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
                dispatch(updateIsAutoScroll(true))
                keyWasRegistered = true
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
            case ABOUT_ALBUM_TOGGLE_KEY:
                dispatch(toggleIsAboutShown())
                keyWasRegistered = true
                break
            case PROMO_TOGGLE_KEY:
                dispatchPromo.current({ isAdminToggle: true })
                keyWasRegistered = true
                break
            default:
                keyWasRegistered = false
                break
        }

        return {
            annotationIndexWasAccessed,
            keyWasRegistered,
        }
    }

    const handleEscape = () => {
        // Audio options.
        if (isAudioOptionsExpanded) {
            dispatch(updateIsAudioOptionsExpanded())

        // Close score popup.
        } else if (isScoreShown) {
            dispatchScore.current(false)

        // Close about popup.
        } else if (isAboutShown) {
            dispatch(updateIsAboutShown())

        // Close pitch popup.
        } else if (isPromoShown) {
            dispatchPromo.current()

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
        } else if (isNavExpanded) {
            // When nav is expanded, collapse both carousel and nav.
            dispatch(updateIsCarouselExpanded())
            dispatch(updateIsNavExpanded())

        // Turn access off.
        } else {
            dispatch(updateAccessStore({ isAccessOn: false }))
            dispatch(updateActivatedVerseIndex())
        }
    }

    useImperativeHandle(ref, () => ({
        escape: handleEscape,
        letter: handleLetter,
    }))
    return (
        <>
            <CarouselNavDispatcher {...{ ref: dispatchCarouselNav }} />
            <DotsSlideDispatcher {...{ ref: dispatchDotsSlide }} />
            <EarColumnDispatcher {...{ ref: dispatchEarColumn }} />
            <ActivatedSceneDispatcher {...{ ref: activateSceneDirection }} />
            <ActivatedVerseDispatcher {...{ ref: activateVerse }} />
            <LyricExpandDispatcher {...{ ref: dispatchLyricExpand }} />
            <OverviewDispatcher {...{ ref: dispatchOverview }} />
            <PlayDispatcher {...{ ref: dispatchPlay }} />
            <AlbumPromoDispatcher {...{ ref: dispatchPromo }} />
            <SongDispatcher {...{ ref: dispatchSong }} />
            <TipsDispatcher {...{ ref: dispatchTips }} />
            <ScoreDispatcher {...{ ref: dispatchScore }} />
        </>
    )

})

export default LetterManager
