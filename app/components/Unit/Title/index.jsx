// Component to show the song title.
import React, { memo } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import getDidMountHoc from '../../DidMountHoc'
import getFinalSideHoc from '../../FinalSideHoc'
import { getIndexedTitleForSong } from '../../../api/album/songs'
import './style'

const UnitSongTitle = ({ didMount, finalSideSongIndex }) => {
    const songTitle = getIndexedTitleForSong(finalSideSongIndex)

    return (
        <div
            {...{
                ...didMount && {
                    className: cx(
                        'UnitSongTitle',
                        'fCC',
                        'textShadow__dark',
                        'Rancho'
                    )
                }
            }}
        >
            {songTitle}
        </div>
    )
}

UnitSongTitle.propTypes = {
    didMount: PropTypes.bool.isRequired,
    finalSideSongIndex: PropTypes.number.isRequired
}

export default memo(getDidMountHoc(getFinalSideHoc(UnitSongTitle)))
