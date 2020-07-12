/* eslint-disable */
import React, { useEffect, memo } from 'react'
import { navigate } from 'gatsby'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { getTitleForSong } from '../../api/album/songs'
import {
    mapLyricSongIndex,
    mapLyricVerseIndex,
    mapLyricAnnotationIndex,
    mapIsLyricLogue
} from '../../redux/lyric/selector'
import { getPathNameForSongIndex, getPathForIndices } from '../../helpers/url'

const UrlManager = () => {
    const
        // history = useHistory(),
        lyricSongIndex = useSelector(mapLyricSongIndex),
        lyricVerseIndex = useSelector(mapLyricVerseIndex),
        lyricAnnotationIndex = useSelector(mapLyricAnnotationIndex),
        isLyricLogue = useSelector(mapIsLyricLogue),
        songTitle = isLyricLogue ?
            `Yearling's Bobtail` :
            `${getTitleForSong(lyricSongIndex)} | Yearling's Bobtail`

    useEffect(() => {
        // history.replace(
        //     getPathForIndices(
        //         lyricSongIndex, lyricVerseIndex, lyricAnnotationIndex
        //     )
        // )
    }, [lyricSongIndex, lyricVerseIndex, lyricAnnotationIndex])

    useEffect(() => {
        // Navigate to Gatsby page.
        navigate(`/${getPathNameForSongIndex(lyricSongIndex)}`)
    }, [lyricSongIndex])

    return (
        <Helmet>
            <title>{songTitle}</title>
        </Helmet>
    )
}

export default memo(UrlManager)
