// Component to show the song title.
import React, { memo } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import getFinalSideHoc from '../../FinalSideHoc'
import { getIndexedTitleForSong } from '../../../api/album/songs'
import './style'

const UnitSongTitle = ({ finalSideSongIndex }) => {
    const songTitle = getIndexedTitleForSong(finalSideSongIndex)

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

UnitSongTitle.propTypes = {
    finalSideSongIndex: PropTypes.number.isRequired
}

export default memo(getFinalSideHoc(UnitSongTitle))
