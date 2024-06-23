import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import Anchor from '../../../Anchor'
import SongDispatcher from '../../../../dispatchers/Song'
import { getIsAlbumClientSession } from '../../../../utils/gatsby/session'
import { getFullPathForSong } from '../../../../endpoint/album/songs'
import { mapSelectedSongIndex } from '../../../../redux/selected/selector'
import { useSelector } from 'react-redux'

const PromoSongAnchor = ({
    text,
    songIndex,

}) => {
    const
        dispatchSong = useRef(),
        selectedSongIndex = useSelector(mapSelectedSongIndex)

    const handleAnchorClick = e => {
        /**
         * If command key is pressed, allow browser to open wiki page in new
         * tab.
         *
         * TODO: I've not tested this in PC.
         */
        if (!e.metaKey && !e.ctrlKey) {
            e.preventDefault()
        }

        if (songIndex !== selectedSongIndex) {
            dispatchSong.current({ selectedSongIndex: songIndex })
        }
    }

    return (
        <>
            <Anchor
                {...{
                    text,
                    analyticsLabel: `promoSong${songIndex}`,
                    internalLink: `/${getFullPathForSong(songIndex)}`,

                    ...getIsAlbumClientSession() && {
                        handleAnchorClick,
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
