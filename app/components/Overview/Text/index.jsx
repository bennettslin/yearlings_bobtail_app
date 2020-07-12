// Section to show song overview.
import React, { memo } from 'react'
import PropTypes from 'prop-types'
import Texts from '../../Texts'
import { getOverviewForSong } from '../../../api/album/songs'
import getFinalSideHoc from '../../FinalSideHoc'

const OverviewText = ({ finalSideSongIndex }) => (
    <Texts
        {...{
            text: getOverviewForSong(finalSideSongIndex)
        }}
    />
)

OverviewText.propTypes = {
    finalSideSongIndex: PropTypes.number.isRequired
}

export default memo(getFinalSideHoc(OverviewText))
