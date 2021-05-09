import React, { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import MarketingUrlManager from './Marketing'
import {
    mapLyricSongIndex,
    mapLyricVerseIndex,
    mapLyricAnnotationIndex,
} from '../../redux/lyric/selector'
import { mapIsMarketingShown } from '../../redux/toggle/selector'
import { navigateToAlbumPage } from '../../helpers/navigate'

const UrlManager = () => {
    const
        navigateToMarketingPage = useRef(),
        lyricSongIndex = useSelector(mapLyricSongIndex),
        lyricVerseIndex = useSelector(mapLyricVerseIndex),
        lyricAnnotationIndex = useSelector(mapLyricAnnotationIndex),
        isMarketingShown = useSelector(mapIsMarketingShown)

    const verifyBeforeNavigation = navigateCallback => {
        if (isMarketingShown) {
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
        if (!isMarketingShown) {
            navigateToAlbumPage(
                lyricSongIndex,
                lyricVerseIndex,
                lyricAnnotationIndex,
            )
        } else {
            navigateToMarketingPage.current()
        }
    }, [
        lyricSongIndex,
        lyricVerseIndex,
        lyricAnnotationIndex,
        isMarketingShown,
    ])

    return (
        <MarketingUrlManager
            {...{
                ref: navigateToMarketingPage,
                verifyBeforeNavigation,
            }}
        />
    )
}

export default UrlManager
