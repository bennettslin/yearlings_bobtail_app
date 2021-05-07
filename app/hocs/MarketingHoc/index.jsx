import React, { forwardRef, useContext } from 'react'
import { useSelector } from 'react-redux'
import PagePitchIndexContext from '../../contexts/PagePitchIndex'
import PagePromoPathContext from '../../contexts/PagePromoPath'
import {
    mapPitchSegmentIndex,
    mapSelectedPromoPath,
} from '../../redux/marketing/selector'
import { getIsServerSide } from '../../utils/browser'

const getMarketingServerClientHoc = ServerClientComponent => (
    /**
     * This hoc passes to its child component either the page pitch index that
     * is relevant only on the server side, or the pitch segment index that is
     * relevant only on the client side.
     */
    forwardRef((props, ref) => {
        const
            pagePitchIndex = useContext(PagePitchIndexContext),
            pagePromoPath = useContext(PagePromoPathContext),
            pitchSegmentIndex = useSelector(mapPitchSegmentIndex),
            selectedPromoPath = useSelector(mapSelectedPromoPath),
            serverClientPitchIndex = getIsServerSide() ?
                pagePitchIndex :
                pitchSegmentIndex,
            serverClientPromoPath = getIsServerSide() ?
                pagePromoPath :
                selectedPromoPath

        return (
            <ServerClientComponent
                {...{
                    ref,
                    serverClientPitchIndex,
                    serverClientPromoPath,
                    ...props,
                }}
            />
        )
    })
)

export default getMarketingServerClientHoc
