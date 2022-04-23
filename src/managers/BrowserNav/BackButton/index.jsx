import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import SongDispatcher from '../../../dispatchers/Song'
import { mapLyricAnnotationIndex, mapLyricSongIndex, mapLyricVerseIndex } from '../../../redux/lyric/selector'
import { updatePromoFromBrowserNav } from '../../../redux/promo/action'
import { toggleIsPromoShown } from '../../../redux/toggle/action'
import { mapIsPromoShown } from '../../../redux/toggle/selector'
import { getWindow } from '../../../utils/browser'
import { getIsAlbumSongPath } from '../../../utils/gatsby/album'
import { getTrimmedPathname } from '../../../utils/gatsby/path'
import { getIsPromoPath } from '../../../utils/gatsby/promo'
import { getRoutingAnnotationIndex, getRoutingPitchIndex, getRoutingPromoKey, getRoutingSongIndex, getRoutingVerseIndex } from '../../../utils/gatsby/routing'

const BackButtonManager = () => {
    const
        dispatch = useDispatch(),
        onPopStateRef = useRef(),
        dispatchSong = useRef(),
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

        // TODO: Album promo manager is messing with this.
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

            logAdmin(`on pop state: ${pathname}`)

            if (getIsAlbumSongPath(pathname)) {
                browseBackToAlbum(pathname, search)
                if (currentIsPromoShown) {
                    dispatch(toggleIsPromoShown(false))
                }

            } else if (getIsPromoPath(pathname)) {
                browseBackToPromo(pathname)
                if (!currentIsPromoShown) {
                    dispatch(toggleIsPromoShown(true))
                }
            }
        }

        return () => {
            getWindow().onpopstate = null
        }
    }, [])

    return <SongDispatcher {...{ ref: dispatchSong }} />
}

export default BackButtonManager
