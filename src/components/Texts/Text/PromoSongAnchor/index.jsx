import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import Anchor from '../../../Anchor'
import SongDispatcher from '../../../../dispatchers/Song'
import { getIsAlbumClientSession } from '../../../../utils/gatsby/session'
import { getFullPathForSong } from '../../../../endpoint/album/songs'

const PromoSongAnchor = ({
    text,
    songIndex,

}) => {
    const dispatchSong = useRef()

    const handleAnchorClick = () => {
        dispatchSong.current({ selectedSongIndex: songIndex })
    }

    return (
        <>
            <Anchor
                {...{
                    text,
                    analyticsLabel: `promoSong${songIndex}`,

                    ...getIsAlbumClientSession() ? {
                        handleAnchorClick,
                    } : {
                        internalLink: `/${getFullPathForSong(songIndex)}`,
                    },
                }}
            />
            {getIsAlbumClientSession() && (
                <SongDispatcher {...{ ref: dispatchSong }} />
            )}
        </>
    )
}

PromoSongAnchor.propTypes = {
    text: PropTypes.string.isRequired,
    songIndex: PropTypes.number.isRequired,
}

export default PromoSongAnchor
