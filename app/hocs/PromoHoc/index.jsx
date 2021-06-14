import React, { forwardRef, useContext } from 'react'
import { useSelector } from 'react-redux'
import PageArtupIndexContext from '../../contexts/PageArtupIndex'
import PageArtup2IndexContext from '../../contexts/PageArtup2Index'
import PagePromoKeyContext from '../../contexts/PagePromoKey'
import {
    mapArtupSlideIndex,
    mapArtup2SlideIndex,
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
            pageArtup2Index = useContext(PageArtup2IndexContext),
            pagePromoKey = useContext(PagePromoKeyContext),
            artupSlideIndex = useSelector(mapArtupSlideIndex),
            artup2SlideIndex = useSelector(mapArtup2SlideIndex),
            selectedPromoKey = useSelector(mapSelectedPromoKey),
            serverClientArtupIndex = getIsServerSide() ?
                pageArtupIndex :
                artupSlideIndex,
            serverClientArtup2Index = getIsServerSide() ?
                pageArtup2Index :
                artup2SlideIndex,
            serverClientPromoKey = getIsServerSide() ?
                pagePromoKey :
                selectedPromoKey

        return (
            <ServerClientComponent
                {...{
                    ref,
                    serverClientArtupIndex,
                    serverClientArtup2Index,
                    serverClientPromoKey,
                    ...props,
                }}
            />
        )
    })
)

export default getPromoServerClientHoc
