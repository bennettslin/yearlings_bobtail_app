import React, { forwardRef, useContext } from 'react'
import { useSelector } from 'react-redux'
import PageArtupIndexContext from '../../contexts/PageArtupIndex'
import PagePromoPathContext from '../../contexts/PagePromoPath'
import {
    mapArtupSlideIndex,
    mapSelectedPromoPath,
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
            pagePromoPath = useContext(PagePromoPathContext),
            artupSlideIndex = useSelector(mapArtupSlideIndex),
            selectedPromoPath = useSelector(mapSelectedPromoPath),
            serverClientArtupIndex = getIsServerSide() ?
                pageArtupIndex :
                artupSlideIndex,
            serverClientPromoPath = getIsServerSide() ?
                pagePromoPath :
                selectedPromoPath

        return (
            <ServerClientComponent
                {...{
                    ref,
                    serverClientArtupIndex,
                    serverClientPromoPath,
                    ...props,
                }}
            />
        )
    })
)

export default getPromoServerClientHoc
