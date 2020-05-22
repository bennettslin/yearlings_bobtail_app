import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { getTitleForSong } from '../../album/api/songs'
import {
    LYRIC_SONG_INDEX_SELECTOR,
    LYRIC_VERSE_INDEX_SELECTOR,
    LYRIC_ANNOTATION_INDEX_SELECTOR,
    IS_LYRIC_LOGUE_SELECTOR
} from '../../redux/lyric/selectors'
import { getPathForIndices } from './helper'

const RoutingListener = () => {
    const
        history = useHistory(),
        lyricSongIndex = useSelector(LYRIC_SONG_INDEX_SELECTOR),
        lyricVerseIndex = useSelector(LYRIC_VERSE_INDEX_SELECTOR),
        lyricAnnotationIndex = useSelector(LYRIC_ANNOTATION_INDEX_SELECTOR),
        isLyricLogue = useSelector(IS_LYRIC_LOGUE_SELECTOR),
        songTitle = isLyricLogue ?
            `Yearling's Bobtail` :
            `${getTitleForSong(lyricSongIndex)} | Yearling's Bobtail`

    useEffect(() => {
        history.replace(
            getPathForIndices(
                lyricSongIndex, lyricVerseIndex, lyricAnnotationIndex
            )
        )
    }, [lyricSongIndex, lyricVerseIndex, lyricAnnotationIndex])

    return (
        <Helmet>
            <title>{songTitle}</title>
        </Helmet>
    )
}

export default RoutingListener
