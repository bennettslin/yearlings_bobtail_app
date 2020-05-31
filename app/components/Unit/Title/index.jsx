// Component to show the song title.
import React from 'react'
import { useSelector } from 'react-redux'
import cx from 'classnames'
import { LYRIC_SONG_INDEX_SELECTOR } from '../../../redux/lyric/selectors'
import { getIndexedTitleForSong } from '../../../album/api/songs'
import './style'

const UnitSongTitle = () => {
    const
        lyricSongIndex = useSelector(LYRIC_SONG_INDEX_SELECTOR),
        songTitle = getIndexedTitleForSong(lyricSongIndex)

    return (
        <div
            {...{
                className: cx(
                    'UnitSongTitle',
                    'fCC',
                    'textShadow__dark',
                    'Rancho'
                )
            }}
        >
            {songTitle}
        </div>
    )
}

export default UnitSongTitle
