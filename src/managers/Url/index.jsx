import React, { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import PromoUrlManager from './Promo'
import {
    mapLyricSongIndex,
    mapLyricVerseIndex,
    mapLyricAnnotationIndex,
} from '../../redux/lyric/selector'
import { mapIsPromoShown } from '../../redux/toggle/selector'
import { navigateToAlbumPage } from '../../helpers/navigate'

const UrlManager = () => {
    const
        navigateToPromoPage = useRef(),
        lyricSongIndex = useSelector(mapLyricSongIndex),
        lyricVerseIndex = useSelector(mapLyricVerseIndex),
        lyricAnnotationIndex = useSelector(mapLyricAnnotationIndex),
        isPromoShown = useSelector(mapIsPromoShown)

    const verifyBeforeNavigation = navigateCallback => {
        if (isPromoShown) {
            navigateCallback()
        }
    }

    useEffect(() => {
        logSelect({
            action: 'load',
            song: lyricSongIndex,
            verse: lyricVerseIndex,
            annotation: lyricAnnotationIndex,
        })
    }, [])

    useEffect(() => {
        if (!isPromoShown) {
            navigateToAlbumPage(
                lyricSongIndex,
                lyricVerseIndex,
                lyricAnnotationIndex,
            )
        } else {
            navigateToPromoPage.current()
        }
    }, [
        lyricSongIndex,
        lyricVerseIndex,
        lyricAnnotationIndex,
        isPromoShown,
    ])

    return (
        <PromoUrlManager
            {...{
                ref: navigateToPromoPage,
                verifyBeforeNavigation,
            }}
        />
    )
}

export default UrlManager
