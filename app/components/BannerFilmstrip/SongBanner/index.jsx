// eslint-disable-next-line object-curly-newline
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import cx from 'classnames'
import { updateBannerStore } from '../../../redux/banner/action'
import StopPropagationDispatcher from '../../../dispatchers/StopPropagation'
import Tracker from '../../Tracker'
import SongBannerTimer from './Timer'
import SongBannerTitle from './Title'
import { getSongIsLogue } from '../../../api/album/songs'
import { getStartTimeForVerse } from '../../../api/album/time'
import { getClientX } from '../../../helpers/dom'
import { getVerseIndexFromClientX } from './helper'
import { IS_USER_AGENT_DESKTOP } from '../../../constants/device'
import { mapIsPlaying } from '../../../redux/audio/selector'
import {
    mapIsBannerHovering,
    mapBannerHoverVerseIndex,
    mapIsSmallBannerText
} from '../../../redux/banner/selector'
import {
    mapSelectedSongIndex,
    mapIsSelectedLogue,
    mapSelectedTime
} from '../../../redux/selected/selector'
import { mapIsLyricsLocked } from '../../../redux/slider/selector'
import { mapSongTrackerWidth } from '../../../redux/tracker/selector'
import './style'
import { scrollLyricToVerseInCallback } from '../../../redux/scrollLyric/action'

const SongBanner = () => {
    const
        dispatch = useDispatch(),
        songBannerElement = useRef(),
        stopPropagation = useRef(),
        isSmallBannerText = useSelector(mapIsSmallBannerText),
        isPlaying = useSelector(mapIsPlaying),
        isBannerHovering = useSelector(mapIsBannerHovering),
        bannerHoverVerseIndex = useSelector(mapBannerHoverVerseIndex),
        songTrackerWidth = useSelector(mapSongTrackerWidth),
        selectedSongIndex = useSelector(mapSelectedSongIndex),
        isSelectedLogue = useSelector(mapIsSelectedLogue),
        selectedTime = useSelector(mapSelectedTime),
        isLyricsLocked = useSelector(mapIsLyricsLocked),
        [clientX, setClientX] = useState(0)

    const getVerseIndexFromEvent = e => {
        const nextClientX = e ? getClientX(e) : clientX

        if (Number.isFinite(nextClientX)) {
            setClientX(nextClientX)
            return getVerseIndexFromClientX({
                clientX,
                songBannerElement,
                selectedSongIndex
            })
        }

        return -1
    }

    const onMouseLeave = () => {
        dispatch(updateBannerStore())
    }

    const onMouseMove = e => {
        if (!isBannerHovering) {
            // Do not proceed if we are not in banner hovering state.
            return
        }

        const bannerHoverVerseIndex = getVerseIndexFromEvent(e)

        dispatch(updateBannerStore({
            bannerHoverVerseIndex,
            bannerHoverTime: getStartTimeForVerse(
                selectedSongIndex,
                bannerHoverVerseIndex
            )
        }))
    }

    const onMouseEnter = e => {
        if (
            isLyricsLocked ||
            getSongIsLogue(selectedSongIndex)
        ) {
            // Do not toggle banner hovering state.
            return
        }

        dispatch(updateBannerStore({
            isBannerHovering: true,

            // Begin from selected time to keep tracker animation smooth.
            bannerHoverTime: selectedTime
        }))
        onMouseMove(e)
    }

    const onClick = e => {
        if (
            // If user agent desktop, banner must be hovering.
            (IS_USER_AGENT_DESKTOP && !isBannerHovering) ||
            getSongIsLogue(selectedSongIndex)
        ) {
            // Do not register click in logue.
            return
        }

        stopPropagation.current(e)

        if (isLyricsLocked) {
            // Do nothing if lyrics locked, but still register click.
            return
        }

        const verseIndex =
            IS_USER_AGENT_DESKTOP ?
                // On desktop, get from banner hover.
                bannerHoverVerseIndex :

                // On mobile, get from click event.
                getVerseIndexFromEvent(e)

        dispatch(scrollLyricToVerseInCallback(
            'Banner selected',
            verseIndex
        ))

        // Once clicked, do not allow another click on the same hover.
        onMouseLeave()
    }

    useEffect(() => {
        // On the off chance that the song banner is still being hovered.
        onMouseMove()
    }, [selectedSongIndex])

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
                        isLyricsLocked
                    ) ?
                        'textShadow__light' :
                        'textShadow__dark',

                    'dropShadow',

                    isBannerHovering &&
                    !isLyricsLocked &&
                    !isSelectedLogue &&
                        'dropShadow__lightHover',

                    'ovH',
                    'Rancho'
                ),
                onClick,

                ...IS_USER_AGENT_DESKTOP && {
                    onMouseEnter,
                    onMouseMove,
                    onMouseLeave
                }
            }}
        >
            <Tracker {...{ trackerLength: songTrackerWidth }} />
            <SongBannerTitle />
            <SongBannerTimer />
            <StopPropagationDispatcher {...{ ref: stopPropagation }} />
        </div>
    )
}

export default SongBanner
