import React, { memo, useContext, useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import cx from 'classnames'
import AudioPlayerContext from '../../../contexts/AudioPlayer'
import { updateBannerStore } from '../../../redux/banner/action'
import StopPropagationDispatcher from '../../../dispatchers/StopPropagation'
import VerseDispatcher from '../../../dispatchers/Verse'
import Tracker from '../../Tracker'
import SongBannerTimer from './Timer'
import SongBannerTitle from './Title'
import { getSongIsLogue } from '../../../endpoint/album/songs'
import { getClientX } from '../../../helpers/dom'
import { getVerseIndexFromClientX } from './helper'
import { IS_USER_AGENT_DESKTOP } from '../../../constants/device'
import { mapIsPlaying } from '../../../redux/audio/selector'
import {
    mapIsBannerHovering,
    mapBannerHoverVerseIndex,
    mapIsSmallBannerText,
} from '../../../redux/banner/selector'
import { updateEntranceStore } from '../../../redux/entrance/action'
import { mapCanTransitionAfterVerseChange } from '../../../redux/entrance/selector'
import {
    mapSelectedSongIndex,
    mapIsSelectedLogue,
} from '../../../redux/selected/selector'
import { mapShowPastFutureLyrics } from '../../../redux/slider/selector'
import { getMapSongTrackerWidth } from '../../../redux/tracker/selector'
import { CAROUSEL_LYRICS_ENTERED_AFTER_SONG_CHANGE_DONE_DURATION } from '../../../constants/entrance'
import './style'

const SongBanner = () => {
    const
        { audioTime } = useContext(AudioPlayerContext),
        dispatch = useDispatch(),
        songBannerElement = useRef(),
        stopPropagation = useRef(),
        dispatchVerse = useRef(),
        isSmallBannerText = useSelector(mapIsSmallBannerText),
        isPlaying = useSelector(mapIsPlaying),
        isBannerHovering = useSelector(mapIsBannerHovering),
        bannerHoverVerseIndex = useSelector(mapBannerHoverVerseIndex),
        songTrackerWidth = useSelector(getMapSongTrackerWidth(audioTime)),
        selectedSongIndex = useSelector(mapSelectedSongIndex),
        isSelectedLogue = useSelector(mapIsSelectedLogue),
        showPastFutureLyrics = useSelector(mapShowPastFutureLyrics),
        canTransitionAfterVerseChange =
            useSelector(mapCanTransitionAfterVerseChange),
        [clientX, setClientX] = useState(0),
        [transitionTimeoutId, setTransitionTimeoutId] = useState(-1)

    const getVerseIndexFromEvent = e => {
        const nextClientX = e ? getClientX(e) : clientX

        if (Number.isFinite(nextClientX)) {
            setClientX(nextClientX)
            return getVerseIndexFromClientX({
                clientX,
                songBannerElement,
                selectedSongIndex,
            })
        }

        return -1
    }

    const onMouseLeave = () => {
        /**
         * This timeout is needed to prevent the display time from briefly
         * reverting back to the previous time when a new verse is selected
         * from the banner but not yet updated in the store.
         */
        setTimeout(() => dispatch(updateBannerStore()), 0)
    }

    const _updateBannerHoverStatus = e => {
        const nextVerseIndex = getVerseIndexFromEvent(e)

        if (bannerHoverVerseIndex !== nextVerseIndex) {
            dispatch(updateBannerStore({
                bannerHoverVerseIndex: nextVerseIndex,
            }))
        }
    }

    const onMouseMove = e => {
        if (!isBannerHovering) {
            // Do not proceed if we are not in banner hovering state.
            return
        }

        _updateBannerHoverStatus(e)
    }

    const onMouseEnter = e => {
        // Do not toggle banner hovering state.
        if (showPastFutureLyrics || getSongIsLogue(selectedSongIndex)) {
            return
        }

        _updateBannerHoverStatus(e)
    }

    const onClick = e => {
        if (
            // If user agent desktop, banner must be hovering.
            (IS_USER_AGENT_DESKTOP && !isBannerHovering) ||

            // Do not register click in logue.
            getSongIsLogue(selectedSongIndex)
        ) {
            return
        }

        stopPropagation.current(e)

        // Just register click if showing past and future lyrics.
        if (showPastFutureLyrics) {
            return
        }

        logEvent('SongBanner')

        const verseIndex =
            IS_USER_AGENT_DESKTOP ?
                // On desktop, get from banner hover.
                bannerHoverVerseIndex :

                // On mobile, get from click event.
                getVerseIndexFromEvent(e)

        dispatchVerse.current({
            scrollLog: 'Banner selected',
            verseIndex,
        })

        // Once clicked, do not allow another click on the same hover.
        onMouseLeave()
    }

    useEffect(() => {
        // On the off chance that the song banner is still being hovered.
        onMouseMove()
    }, [selectedSongIndex])

    useEffect(() => {
        if (!canTransitionAfterVerseChange) {
            // Clear previous timeout.
            clearTimeout(transitionTimeoutId)

            setTransitionTimeoutId(
                setTimeout(() => {
                    dispatch(updateEntranceStore({
                        canTransitionAfterVerseChange: true,
                    }))

                // Arbitrary value that's not too short or long.
                }, CAROUSEL_LYRICS_ENTERED_AFTER_SONG_CHANGE_DONE_DURATION),
            )
        }
    }, [canTransitionAfterVerseChange])

    return (
        <div
            {...{
                ref: songBannerElement,
                className: cx(
                    'SongBanner',
                    'BannerFilmstrip__child',
                    isSmallBannerText &&
                        'Cursor__smallText',

                    (
                        isPlaying ||
                        showPastFutureLyrics
                    ) ?
                        'textShadow__light' :
                        'textShadow__dark',

                    'dropShadow',

                    isBannerHovering &&
                    !showPastFutureLyrics &&
                    !isSelectedLogue &&
                        'dropShadow__lightHover',

                    'ovH',
                    'font__heading',
                ),
                onClick,

                ...IS_USER_AGENT_DESKTOP && {
                    onMouseEnter,
                    onMouseMove,
                    onMouseLeave,
                },
            }}
        >
            <Tracker {...{ trackerLength: songTrackerWidth }} />
            <SongBannerTitle />
            <SongBannerTimer />
            <StopPropagationDispatcher {...{ ref: stopPropagation }} />
            <VerseDispatcher {...{ ref: dispatchVerse }} />
        </div>
    )
}

export default memo(SongBanner)
