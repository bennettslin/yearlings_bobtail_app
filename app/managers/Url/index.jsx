/* eslint-disable */
import React, { useEffect } from 'react'
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
import { getPathForIndices } from './helper'

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

    return (
        <Helmet>
            <title>{songTitle}</title>
        </Helmet>
    )
}

export default UrlManager
