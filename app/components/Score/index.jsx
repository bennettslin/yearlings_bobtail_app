// eslint-disable-next-line object-curly-newline
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Iframe from '../../modules/Iframe'
import { updateLoadStore } from '../../redux/load/action'
import { LYRIC_SONG_INDEX_SELECTOR } from '../../redux/lyric/selectors'
import { IS_SCORE_SHOWN_SELECTOR } from '../../redux/toggle/selectors'
import { getSongScore } from './helper'

const Score = () => {
    const
        dispatch = useDispatch(),
        lyricSongIndex = useSelector(LYRIC_SONG_INDEX_SELECTOR),
        isScoreShown = useSelector(IS_SCORE_SHOWN_SELECTOR),
        [isLoading, setIsLoading] = useState(false),
        scoreElement = useRef(),

        onLoad = () => {
            dispatch(updateLoadStore({ isScoreLoaded: true }))
            setIsLoading(false)
        }

    useEffect(() => {
        // Only fetch once score is toggled on.
        const scoreUrl = isScoreShown ? getSongScore(lyricSongIndex) : ''

        // This prevents iframe src from adding to browser history.
        scoreElement.current.contentWindow.location.replace(scoreUrl)

        if (scoreUrl) {
            setIsLoading(true)
        }

    }, [lyricSongIndex, isScoreShown])

    return (
        <Iframe
            {...{
                ref: scoreElement,
                className: 'Score',
                isLoading,
                onLoad
            }}
        />
    )
}

export default Score
