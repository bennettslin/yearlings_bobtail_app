// Section to show song overview.
import React, { memo } from 'react'
import PropTypes from 'prop-types'
import ShareButtons from '../../ShareButtons'
import { getSongIsLogue } from '../../../endpoint/album/songs'
import getSongServerClientHoc from '../../../hocs/SongHoc'
import { OVERVIEW_LOGUE_SOCIAL_MEDIA } from '../../../constants/socialMedia'

const OverviewShareButtons = ({ serverClientSongIndex }) => (
    getSongIsLogue(serverClientSongIndex) && (
        <ShareButtons {...{ id: OVERVIEW_LOGUE_SOCIAL_MEDIA }} />
    )
)

OverviewShareButtons.propTypes = {
    serverClientSongIndex: PropTypes.number.isRequired,
}

export default memo(getSongServerClientHoc(OverviewShareButtons))
