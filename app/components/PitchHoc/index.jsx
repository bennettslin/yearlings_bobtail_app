import React, { forwardRef, useContext } from 'react'
import { useSelector } from 'react-redux'
import PagePitchIndexContext from '../../contexts/PagePitchIndex'
import { mapPitchSegmentIndex } from '../../redux/pitch/selector'
import { getIsServerSide } from '../../utils/browser'

const getPageServerClientHoc = ServerClientComponent => {
    /**
     * This hoc passes to its child component either the page pitch index that
     * is relevant only on the server side, or the pitch segment index that is
     * relevant only on the client side.
     */
    return forwardRef((props, ref) => {
        const
            pagePitchIndex = useContext(PagePitchIndexContext),
            pitchSegmentIndex = useSelector(mapPitchSegmentIndex),
            serverClientPitchIndex = getIsServerSide() ?
                pagePitchIndex :
                pitchSegmentIndex

        return (
            <ServerClientComponent
                {...{
                    ref,
                    serverClientPitchIndex,
                    ...props,
                }}
            />
        )
    })
}

export default getPageServerClientHoc
