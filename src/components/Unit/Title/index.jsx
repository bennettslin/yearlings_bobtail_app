// Component to show the song title.
import React, { memo } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import getDidMountHoc from '../../../hocs/DidMountHoc'
import getSongServerClientHoc from '../../../hocs/SongHoc'
import { getIndexedTitleForSong } from '../../../endpoint/album/songs'
import './style'

const UnitSongTitle = ({ didMount, serverClientSongIndex }) => {
    const songTitle = getIndexedTitleForSong(serverClientSongIndex)

    return (
        <div
            {...{
                ...didMount && {
                    className: cx(
                        'UnitSongTitle',
                        'fCC',
                        'textShadow__dark',
                        'font__heading',
                    ),
                },
            }}
        >
            {songTitle}
        </div>
    )
}

UnitSongTitle.propTypes = {
    didMount: PropTypes.bool.isRequired,
    serverClientSongIndex: PropTypes.number.isRequired,
}

export default memo(getDidMountHoc(getSongServerClientHoc(UnitSongTitle)))
