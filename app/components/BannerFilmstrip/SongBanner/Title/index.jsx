// Component to show the played audio time.
import React from 'react'
import { useSelector } from 'react-redux'
import cx from 'classnames'
import { getIndexedTitleForSong } from '../../../../album/api/songs'
import { SELECTED_SONG_INDEX_SELECTOR } from '../../../../redux/selected/selectors'
import './style'

const SongBannerTitle = () => {
    const
        selectedSongIndex = useSelector(SELECTED_SONG_INDEX_SELECTOR),
        songTitle = getIndexedTitleForSong(selectedSongIndex)

    return (
        <div
            {...{
                className: cx(
                    'SongBannerTitle',
                    'fCC',
                    /**
                     * Make absolute so that song title length doesn't
                     * affect song banner width.
                     */
                    'abF'
                )
            }}
        >
            {songTitle}
        </div>
    )
}

export default SongBannerTitle
