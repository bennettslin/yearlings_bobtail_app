// Section to show song overview.
import React, { memo } from 'react'
import PropTypes from 'prop-types'
import SocialMediaButtons from '../../SocialMediaButtons'
import { getSongIsLogue } from '../../../endpoint/album/songs'
import getSongServerClientHoc from '../../../hocs/SongHoc'
import { OVERVIEW_LOGUE_SOCIAL_MEDIA } from '../../../constants/socialMedia'

const OverviewSocialMediaButtons = ({ serverClientSongIndex }) => (
    getSongIsLogue(serverClientSongIndex) && (
        <SocialMediaButtons {...{ id: OVERVIEW_LOGUE_SOCIAL_MEDIA }} />
    )
)

OverviewSocialMediaButtons.propTypes = {
    serverClientSongIndex: PropTypes.number.isRequired,
}

export default memo(getSongServerClientHoc(OverviewSocialMediaButtons))
