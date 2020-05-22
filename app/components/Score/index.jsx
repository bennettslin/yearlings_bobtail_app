// Webview to show song score.

import React, { useEffect, useState } from 'react'
import cx from 'classnames'
import { useDispatch, useSelector } from 'react-redux'
import { updateLoadStore } from '../../redux/load/action'
import { LYRIC_SONG_INDEX_SELECTOR } from '../../redux/lyric/selectors'

import { getSongScore } from './helper'

const Score = () => {
    const
        dispatch = useDispatch(),
        lyricSongIndex = useSelector(LYRIC_SONG_INDEX_SELECTOR),
        [score, setScore] = useState(getSongScore(lyricSongIndex)),

        onLoad = () => {
            dispatch(updateLoadStore({ isScoreLoaded: true }))
        }

    useEffect(() => {
        setScore(getSongScore(lyricSongIndex))
    }, [lyricSongIndex])

    return (
        <div
            {...{
                className: cx(
                    'Score',
                    'iframeContainer'
                )
            }}
        >
            <iframe
                {...{
                    className: 'iframeContainer__iframe',
                    tabIndex: -1,
                    src: score,
                    onLoad
                }}
            />
        </div>
    )
}

export default Score
