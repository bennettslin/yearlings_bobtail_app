import React, { forwardRef, useContext } from 'react'
import { useSelector } from 'react-redux'
import PageArtupIndexContext from '../../contexts/PageArtupIndex'
import PagePromoKeyContext from '../../contexts/PagePromoKey'
import {
    mapArtupSlideIndex,
    mapSelectedPromoKey,
} from '../../redux/promo/selector'
import { getIsServerSide } from '../../utils/browser'

const getPromoServerClientHoc = ServerClientComponent => (
    /**
     * This hoc passes to its child component either the page values that are
     * relevant only on the server side, or the selected values that are
     * relevant only on the client side.
     */
    forwardRef((props, ref) => {
        const
            pageArtupIndex = useContext(PageArtupIndexContext),
            pagePromoKey = useContext(PagePromoKeyContext),
            artupSlideIndex = useSelector(mapArtupSlideIndex),
            selectedPromoKey = useSelector(mapSelectedPromoKey),
            serverClientArtupIndex = getIsServerSide() ?
                pageArtupIndex :
                artupSlideIndex,
            serverClientPromoKey = getIsServerSide() ?
                pagePromoKey :
                selectedPromoKey

        return (
            <ServerClientComponent
                {...{
                    ref,
                    serverClientArtupIndex,
                    serverClientPromoKey,
                    ...props,
                }}
            />
        )
    })
)

export default getPromoServerClientHoc
