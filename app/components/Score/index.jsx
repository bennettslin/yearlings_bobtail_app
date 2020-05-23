import React, { useEffect, useRef } from 'react'
import cx from 'classnames'
import { useDispatch, useSelector } from 'react-redux'
import { updateLoadStore } from '../../redux/load/action'
import { LYRIC_SONG_INDEX_SELECTOR } from '../../redux/lyric/selectors'

import { getSongScore } from './helper'

const Score = () => {
    const
        dispatch = useDispatch(),
        lyricSongIndex = useSelector(LYRIC_SONG_INDEX_SELECTOR),
        scoreElement = useRef(),

        onLoad = () => {
            dispatch(updateLoadStore({ isScoreLoaded: true }))
        }

    useEffect(() => {
        // This prevents iframe src from adding to browser history.
        scoreElement.current.contentWindow.location.replace(
            getSongScore(lyricSongIndex)
        )
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
                    ref: scoreElement,
                    className: 'iframeContainer__iframe',
                    tabIndex: -1,
                    onLoad
                }}
            />
        </div>
    )
}

export default Score
