// eslint-disable-next-line object-curly-newline
import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import Iframe from '../../modules/Iframe'
import { mapLyricSongIndex } from '../../redux/lyric/selectors'
import { mapIsScoreShown } from '../../redux/toggle/selectors'
import { getSongScore } from './helper'

const Score = () => {
    const
        lyricSongIndex = useSelector(mapLyricSongIndex),
        isScoreShown = useSelector(mapIsScoreShown),
        [isLoading, setIsLoading] = useState(false),
        scoreElement = useRef(),

        onLoad = () => {
            setIsLoading(false)
        }

    useEffect(() => {
        // Only fetch once score is toggled on.
        const scoreUrl = getSongScore(lyricSongIndex)

        if (scoreElement.current) {
            // This prevents iframe src from adding to browser history.
            scoreElement.current.contentWindow.location.replace(scoreUrl)
        }

        if (scoreUrl) {
            setIsLoading(true)
        }

    }, [lyricSongIndex, isScoreShown])

    return (
        <Iframe
            {...{
                ref: scoreElement,
                className: 'Score',
                isShown: isScoreShown,
                isLoading,
                onLoad
            }}
        />
    )
}

export default Score
