import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import getSongServerClientHoc from '../../../hocs/SongHoc'
import { getOverviewForSong } from '../../../api/album/songs'
import { getDocumentHead } from './helper'

const LyricHelmet = ({ serverClientSongIndex }) => (
    <Helmet>
        <title>{getDocumentHead(serverClientSongIndex)}</title>
        <meta
            {...{
                name: 'description',
                content: getOverviewForSong(serverClientSongIndex),
            }}
        />
    </Helmet>
)

LyricHelmet.propTypes = {
    serverClientSongIndex: PropTypes.number.isRequired,
}

export default getSongServerClientHoc(LyricHelmet)
