import React, { useEffect, useRef, useState, memo } from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import cx from 'classnames'
import PlayerTimeContext from '../../../contexts/PlayerTime'
import { updateBannerStore } from '../../../redux/banner/action'
import StopPropagationDispatcher from '../../../dispatchers/StopPropagation'
import VerseDispatcher from '../../../dispatchers/Verse'
import Tracker from '../../Tracker'
import SongBannerTimer from './Timer'
import SongBannerTitle from './Title'
import { getSongIsLogue } from '../../../api/album/songs'
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
    mapIsSelectedLogue
} from '../../../redux/selected/selector'
import { mapIsLyricsLocked } from '../../../redux/slider/selector'
import { mapSongTrackerWidth } from '../../../redux/tracker/selector'
import './style'

const SongBanner = ({ playerTime }) => {
    const
        dispatch = useDispatch(),
        songBannerElement = useRef(),
        stopPropagation = useRef(),
        dispatchVerse = useRef(),
        isSmallBannerText = useSelector(mapIsSmallBannerText),
        isPlaying = useSelector(mapIsPlaying),
        isBannerHovering = useSelector(mapIsBannerHovering),
        bannerHoverVerseIndex = useSelector(mapBannerHoverVerseIndex),
        songTrackerWidth = useSelector(mapSongTrackerWidth),
        selectedSongIndex = useSelector(mapSelectedSongIndex),
        isSelectedLogue = useSelector(mapIsSelectedLogue),
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

    const _updateBannerHoverStatus = e => {
        dispatch(updateBannerStore({
            bannerHoverVerseIndex: getVerseIndexFromEvent(e)
        }))
    }

    const onMouseMove = e => {
        if (!isBannerHovering) {
            // Do not proceed if we are not in banner hovering state.
            return
        }

        _updateBannerHoverStatus(e)
    }

    const onMouseEnter = e => {
        if (isLyricsLocked || getSongIsLogue(selectedSongIndex)) {
            // Do not toggle banner hovering state.
            return
        }

        _updateBannerHoverStatus(e)
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

        dispatchVerse.current({
            scrollLog: 'Banner selected',
            verseIndex
        })

        // Once clicked, do not allow another click on the same hover.
        onMouseLeave()
    }

    useEffect(() => {
        // On the off chance that the song banner is still being hovered.
        onMouseMove()
    }, [selectedSongIndex])

    console.log('selectedTime', playerTime)

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
            <VerseDispatcher {...{ ref: dispatchVerse }} />
        </div>
    )
}

SongBanner.propTypes = {
    playerTime: PropTypes.number.isRequired
}

const SongBannerContainer = () => (
    <PlayerTimeContext.Consumer>
        {playerTime => (
            <SongBanner {...{ playerTime }} />
        )}
    </PlayerTimeContext.Consumer>
)

export default memo(SongBannerContainer)
