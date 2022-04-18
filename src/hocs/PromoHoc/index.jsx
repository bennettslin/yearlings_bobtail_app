import React, { forwardRef, useContext } from 'react'
import { useSelector } from 'react-redux'
import { ARTUP_SUBPATH, PARETO_SUBPATH } from '../../constants/routing'
import PageArtupIndexContext from '../../contexts/PageArtupIndex'
import PageParetoIndexContext from '../../contexts/PageParetoIndex'
import PagePromoKeyContext from '../../contexts/PagePromoKey'
import {
    getMapPitchSlideIndex,
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
            pageParetoIndex = useContext(PageParetoIndexContext),
            pagePromoKey = useContext(PagePromoKeyContext),
            artupSlideIndex = useSelector(getMapPitchSlideIndex(ARTUP_SUBPATH)),
            paretoSlideIndex = useSelector(getMapPitchSlideIndex(PARETO_SUBPATH)),
            selectedPromoKey = useSelector(mapSelectedPromoKey),
            serverClientArtupIndex = getIsServerSide() ?
                pageArtupIndex :
                artupSlideIndex,
            serverClientParetoIndex = getIsServerSide() ?
                pageParetoIndex :
                paretoSlideIndex,
            serverClientPromoKey = getIsServerSide() ?
                pagePromoKey :
                selectedPromoKey

        return (
            <ServerClientComponent
                {...{
                    ref,
                    serverClientArtupIndex,
                    serverClientParetoIndex,
                    serverClientPromoKey,
                    ...props,
                }}
            />
        )
    })
)

export default getPromoServerClientHoc
