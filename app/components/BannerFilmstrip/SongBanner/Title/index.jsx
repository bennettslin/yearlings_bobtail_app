// Component to show the played audio time.
import React from 'react'
import { useSelector } from 'react-redux'
import cx from 'classnames'
import { getIndexedTitleForSong } from '../../../../api/album/songs'
import { mapSelectedSongIndex } from '../../../../redux/selected/selector'
import './style'

const SongBannerTitle = () => {
    const
        selectedSongIndex = useSelector(mapSelectedSongIndex),
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
