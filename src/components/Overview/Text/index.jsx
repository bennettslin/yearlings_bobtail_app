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
    const texts = getSongIsLogue(serverClientSongIndex) ?
        [getOverviewForSong(serverClientSongIndex)] :
        [getOverviewForSong(serverClientSongIndex)]

    return (
        <div
            {...{
                className: cx(
                    'OverviewText',
                ),
            }}
        >
            {texts.map(text => (
                <p>
                    <Texts
                        {...{
                            text,
                        }}
                    />
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
