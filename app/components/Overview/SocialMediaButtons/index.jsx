// Section to show song overview.
import React, { memo } from 'react'
import PropTypes from 'prop-types'
import SocialMediaButtons from '../../SocialMediaButtons'
import { getSongIsLogue } from '../../../api/album/songs'
import getSongServerClientHoc from '../../../hocs/SongHoc'

const OverviewSocialMediaButtons = ({ serverClientSongIndex }) => (
    getSongIsLogue(serverClientSongIndex) && (
        <SocialMediaButtons isLogueOverview />
    )
)

OverviewSocialMediaButtons.propTypes = {
    serverClientSongIndex: PropTypes.number.isRequired,
}

export default memo(getSongServerClientHoc(OverviewSocialMediaButtons))
