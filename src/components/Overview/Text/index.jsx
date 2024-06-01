// Section to show song overview.
import React, { memo } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import PromoLink from '../../PromoLink'
import Texts from '../../Texts'
import {
    getOverviewForSong,
    getSongIsLogue,
} from '../../../endpoint/album/songs'
import getSongServerClientHoc from '../../../hocs/SongHoc'
import './style'

const OverviewText = ({ serverClientSongIndex }) => {
    const
        overview = getOverviewForSong(serverClientSongIndex),
        // Logue overviews are wrapped in additional array.
        texts = getSongIsLogue(serverClientSongIndex) ? overview : [overview]

    return (
        <div
            {...{
                className: cx(
                    'OverviewText',
                ),
            }}
        >
            {texts.map((text, index) => (
                <p {...{ key: index }}>
                    <Texts {...{ text }} />
                </p>
            ))}
            {getSongIsLogue(serverClientSongIndex) && (
                <PromoLink />
            )}
        </div>
    )
}

OverviewText.propTypes = {
    serverClientSongIndex: PropTypes.number.isRequired,
}

export default memo(getSongServerClientHoc(OverviewText))
