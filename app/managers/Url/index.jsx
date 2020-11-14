import React, { useEffect, memo } from 'react'
import { navigate } from 'gatsby'
import { useSelector } from 'react-redux'
import { Helmet } from 'react-helmet'
import {
    mapLyricSongIndex,
    mapLyricVerseIndex,
    mapLyricAnnotationIndex
} from '../../redux/lyric/selector'
import { mapIsPitchShown } from '../../redux/toggle/selector'
import {
    getPathForIndices,
    getDocumentHead
} from '../../helpers/url'

const UrlManager = () => {
    const
        lyricSongIndex = useSelector(mapLyricSongIndex),
        lyricVerseIndex = useSelector(mapLyricVerseIndex),
        lyricAnnotationIndex = useSelector(mapLyricAnnotationIndex),
        isPitchShown = useSelector(mapIsPitchShown)

    useEffect(() => {
        if (!isPitchShown) {
            navigate(
                getPathForIndices(
                    lyricSongIndex,
                    lyricVerseIndex,
                    lyricAnnotationIndex
                ),
                // Replace, not push, in history.
                { replace: true }
            )
        }
    }, [lyricSongIndex, lyricVerseIndex, lyricAnnotationIndex, isPitchShown])

    useEffect(() => {
        if (isPitchShown) {
            navigate(
                '/Pitch',
                { replace: true }
            )
        }
    }, [isPitchShown])

    return (
        <Helmet>
            <title>{getDocumentHead(lyricSongIndex)}</title>
        </Helmet>
    )
}

export default memo(UrlManager)
