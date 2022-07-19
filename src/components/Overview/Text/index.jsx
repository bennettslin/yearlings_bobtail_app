// Section to show song overview.
import React, { memo } from 'react'
import PropTypes from 'prop-types'
import PromoLink from '../../PromoLink'
import Texts from '../../Texts'
import {
    getOverviewForSong,
    getSongIsLogue,
} from '../../../endpoint/album/songs'
import getSongServerClientHoc from '../../../hocs/SongHoc'

const OverviewText = ({ serverClientSongIndex }) => (
    <>
        <Texts
            {...{
                text: getOverviewForSong(serverClientSongIndex),
            }}
        />
        {getSongIsLogue(serverClientSongIndex) && (
            <PromoLink />
        )}
    </>
)

OverviewText.propTypes = {
    serverClientSongIndex: PropTypes.number.isRequired,
}

export default memo(getSongServerClientHoc(OverviewText))
