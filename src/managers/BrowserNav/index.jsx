import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import SongDispatcher from '../../dispatchers/Song'
import PromoDispatcher from '../../dispatchers/Promo'
import { mapLyricAnnotationIndex, mapLyricSongIndex, mapLyricVerseIndex } from '../../redux/lyric/selector'
import { updatePromo } from '../../redux/promo/action'
import { mapIsPromoShown } from '../../redux/toggle/selector'
import { getWindow } from '../../utils/browser'
import { getIsAlbumSongPath } from '../../utils/gatsby/album'
import { getTrimmedPathname } from '../../utils/gatsby/path'
import { getIsPromoPath } from '../../utils/gatsby/promo'
import { getRoutingAnnotationIndex, getRoutingPitchIndex, getRoutingPromoKey, getRoutingSongIndex, getRoutingVerseIndex } from '../../utils/gatsby/routing'
import { navigateToAlbumPage } from '../../helpers/navigate'

const BrowserNavManager = () => {
    const
        dispatch = useDispatch(),
        onPopStateRef = useRef(),
        dispatchSong = useRef(),
        dispatchPromo = useRef(),
        lyricSongIndex = useSelector(mapLyricSongIndex),
        lyricVerseIndex = useSelector(mapLyricVerseIndex),
        lyricAnnotationIndex = useSelector(mapLyricAnnotationIndex),
        isPromoShown = useSelector(mapIsPromoShown)

    // For window event listener.
    onPopStateRef.current = {
        currentSongIndex: lyricSongIndex,
        currentVerseIndex: lyricVerseIndex,
        currentAnnotationIndex: lyricAnnotationIndex,
        currentIsPromoShown: isPromoShown,
    }

    const navigateToAlbum = () => {
        const {
            currentSongIndex,
            currentVerseIndex,
            currentAnnotationIndex,
        } = onPopStateRef.current

        navigateToAlbumPage(
            currentSongIndex,
            currentVerseIndex,
            currentAnnotationIndex,
        )
    }

    const browseBackToAlbum = (pathname, search) => {
        const
            routingSongIndex = getRoutingSongIndex(pathname),
            routingVerseIndex = getRoutingVerseIndex(
                search,
                routingSongIndex,
            ),
            routingAnnotationIndex = getRoutingAnnotationIndex(
                search,
                routingSongIndex,
            ),
            {
                currentSongIndex,
                currentVerseIndex,
                currentAnnotationIndex,
            } = onPopStateRef.current

        if (
            routingSongIndex !== currentSongIndex || (
                Number.isFinite(routingVerseIndex) &&
                routingVerseIndex !== currentVerseIndex
            ) || (
                Number.isFinite(routingAnnotationIndex) &&
                routingAnnotationIndex !== currentAnnotationIndex
            )
        ) {
            dispatchSong.current({
                selectedSongIndex: routingSongIndex,
                selectedVerseIndex: routingVerseIndex || 0,
                selectedAnnotationIndex: routingAnnotationIndex || 0,
            })
        }
    }

    const browseBackToPromo = pathname => {
        const
            routingPromoKey = getRoutingPromoKey(pathname),
            routingPitchIndex = getRoutingPitchIndex(
                routingPromoKey,
                pathname,
            )
        dispatch(updatePromo({
            selectedPromoKey: routingPromoKey,
            pitchSlideIndex: routingPitchIndex,
            bypassNavigation: true,
        }))
    }

    useEffect(() => {
        getWindow().onpopstate = () => {
            const
                { pathname: rawPathname, search } = getWindow().location,
                pathname = getTrimmedPathname(rawPathname),
                { currentIsPromoShown } = onPopStateRef.current

            logAdmin(`Browser navigated back to path: ${pathname}${search ? `/${search}` : ''}`)

            if (getIsAlbumSongPath(pathname)) {
                if (currentIsPromoShown) {
                    // If promo page is shown, toggle off.
                    dispatchPromo.current({
                        isPromoShown: false,
                        bypassNavigation: true,
                    })

                    /**
                     * If promo page is shown, just navigate without changing
                     * state. Otherwise, navigation will be handled once state
                     * is changed.
                     */
                    navigateToAlbum()
                } else {
                    browseBackToAlbum(pathname, search)
                }

            } else if (getIsPromoPath(pathname)) {
                if (!currentIsPromoShown) {
                    // If promo page is not shown, toggle on.
                    dispatchPromo.current({
                        isPromoShown: true,
                        bypassNavigation: true,
                    })
                }

                browseBackToPromo(pathname)
            }
        }

        return () => {
            getWindow().onpopstate = null
        }
    }, [])

    return (
        <>
            <SongDispatcher {...{ ref: dispatchSong }} />
            <PromoDispatcher {...{ ref: dispatchPromo }} />
        </>
    )
}

export default BrowserNavManager
