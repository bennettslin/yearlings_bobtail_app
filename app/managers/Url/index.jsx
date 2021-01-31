import React, { useEffect } from 'react'
import { navigate } from 'gatsby'
import { useSelector } from 'react-redux'
import { Helmet } from 'react-helmet'
import {
    mapLyricSongIndex,
    mapLyricVerseIndex,
    mapLyricAnnotationIndex,
} from '../../redux/lyric/selector'
import { mapPitchSegmentIndex } from '../../redux/pitch/selector'
import { mapIsPitchShown } from '../../redux/toggle/selector'
import {
    getPathForIndices,
    getPathForPitchPage,
    getDocumentHead,
} from '../../helpers/url'

const UrlManager = () => {
    const
        lyricSongIndex = useSelector(mapLyricSongIndex),
        lyricVerseIndex = useSelector(mapLyricVerseIndex),
        lyricAnnotationIndex = useSelector(mapLyricAnnotationIndex),
        isPitchShown = useSelector(mapIsPitchShown),
        pitchSegmentIndex = useSelector(mapPitchSegmentIndex)

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
                getPathForPitchPage(pitchSegmentIndex),
                { replace: true }
            )
        }
    }, [isPitchShown, pitchSegmentIndex])

    return (
        <Helmet>
            <title>{getDocumentHead(lyricSongIndex)}</title>
            <meta
                {...{
                    name: 'description',
                    content: 'Audio webcomic for the Bobtail Yearlings album.',
                }}
            />
        </Helmet>
    )
}

export default UrlManager
