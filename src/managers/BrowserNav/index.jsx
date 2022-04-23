import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import SongDispatcher from '../../dispatchers/Song'
import PromoDispatcher from '../../dispatchers/Promo'
import { mapLyricAnnotationIndex, mapLyricSongIndex, mapLyricVerseIndex } from '../../redux/lyric/selector'
import { updatePromoFromBrowserNav } from '../../redux/promo/action'
import { mapIsPromoShown } from '../../redux/toggle/selector'
import { getWindow } from '../../utils/browser'
import { getIsAlbumSongPath } from '../../utils/gatsby/album'
import { getTrimmedPathname } from '../../utils/gatsby/path'
import { getIsPromoPath } from '../../utils/gatsby/promo'
import { getRoutingAnnotationIndex, getRoutingPitchIndex, getRoutingPromoKey, getRoutingSongIndex, getRoutingVerseIndex } from '../../utils/gatsby/routing'

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
        lyricSongIndex,
        lyricVerseIndex,
        lyricAnnotationIndex,
        isPromoShown,
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
                lyricSongIndex: currentSongIndex,
                lyricVerseIndex: currentVerseIndex,
                lyricAnnotationIndex: currentAnnotationIndex,
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
        dispatch(updatePromoFromBrowserNav(
            routingPromoKey,
            routingPitchIndex,
        ))
    }

    useEffect(() => {
        getWindow().onpopstate = () => {
            const
                { pathname: rawPathname, search } = getWindow().location,
                pathname = getTrimmedPathname(rawPathname),
                { isPromoShown: currentIsPromoShown } = onPopStateRef.current

            logAdmin(`Browser navigated back to: ${pathname}${search ? `/${search}` : ''}`)

            if (getIsAlbumSongPath(pathname)) {
                browseBackToAlbum(pathname, search)
                if (currentIsPromoShown) {
                    dispatchPromo.current({
                        isPromoShown: false,
                        bypassNavigation: true,
                    })
                }

            } else if (getIsPromoPath(pathname)) {
                browseBackToPromo(pathname)
                if (!currentIsPromoShown) {
                    dispatchPromo.current({
                        isPromoShown: true,
                        bypassNavigation: true,
                    })
                }
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
