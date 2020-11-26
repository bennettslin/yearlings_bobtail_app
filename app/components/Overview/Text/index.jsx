// Section to show song overview.
import React, { memo } from 'react'
import PropTypes from 'prop-types'
import PitchAnchor from '../../PitchAnchor'
import Texts from '../../Texts'
import {
    getOverviewForSong,
    getSongIsLogue
} from '../../../api/album/songs'
import getSongServerClientHoc from '../../SongHoc'

const OverviewText = ({ serverClientSongIndex }) => (
    <>
        <Texts
            {...{
                text: getOverviewForSong(serverClientSongIndex)
            }}
        />
        {getSongIsLogue(serverClientSongIndex) && (
            <PitchAnchor />
        )}
    </>
)

OverviewText.propTypes = {
    serverClientSongIndex: PropTypes.number.isRequired
}

export default memo(getSongServerClientHoc(OverviewText))
