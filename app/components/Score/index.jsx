import React, { useEffect, useRef, useState, memo } from 'react'
import { useSelector } from 'react-redux'
import Iframe from '../../modules/Iframe'
import { mapLyricSongIndex } from '../../redux/lyric/selector'
import { mapIsScoreShown } from '../../redux/toggle/selector'
import { getSongScore } from './helper'

const Score = () => {
    const
        lyricSongIndex = useSelector(mapLyricSongIndex),
        isScoreShown = useSelector(mapIsScoreShown),
        [isLoading, setIsLoading] = useState(false),
        scoreElement = useRef()

    const onLoad = () => {
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

export default memo(Score)
