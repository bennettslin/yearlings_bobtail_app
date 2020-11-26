import React, { forwardRef, useContext } from 'react'
import { useSelector } from 'react-redux'
import PageSongIndexContext from '../../contexts/PageSongIndex'
import { mapLyricSongIndex } from '../../redux/lyric/selector'
import { getIsServerSide } from '../../utils/server'

const getSongServerClientHoc = ServerClientComponent => {
    /**
     * This hoc passes to its child component either the page song index that
     * is relevant only on the server side, or the lyric song index that is
     * relevant only on the client side.
     */
    return forwardRef((props, ref) => {
        const
            pageSongIndex = useContext(PageSongIndexContext),
            lyricSongIndex = useSelector(mapLyricSongIndex),
            serverClientSongIndex = getIsServerSide() ?
                pageSongIndex :
                lyricSongIndex

        return (
            <ServerClientComponent
                {...{
                    ref,
                    serverClientSongIndex,
                    ...props
                }}
            />
        )
    })
}

export default getSongServerClientHoc
