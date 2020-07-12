import React, { forwardRef, useContext } from 'react'
import { useSelector } from 'react-redux'
import PageSongIndexContext from '../../contexts/PageSongIndex'
import { mapLyricSongIndex } from '../../redux/lyric/selector'
import { getFinalSongIndex } from '../../utils/server'

const getFinalSideHoc = FinalSideComponent => {
    /**
     * This hoc passes to its child component either the page song index, which
     * is relevant only on the server side, or the lyric song index, which is
     * relevant only on the client side.
     */
    const FinalSideHoc = forwardRef((props, ref) => {
        const
            pageSongIndex = useContext(PageSongIndexContext),
            lyricSongIndex = useSelector(mapLyricSongIndex),
            finalSideSongIndex = getFinalSongIndex({
                lyricSongIndex,
                pageSongIndex
            })

        return (
            <FinalSideComponent
                {...{
                    ref,
                    finalSideSongIndex,
                    ...props
                }}
            />
        )
    })

    return FinalSideHoc
}

export default getFinalSideHoc
