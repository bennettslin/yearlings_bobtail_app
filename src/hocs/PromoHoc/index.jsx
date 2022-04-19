import React, { forwardRef, useContext } from 'react'
import { useSelector } from 'react-redux'
import PagePitchIndexContext from '../../contexts/PagePitchIndex'
import PagePromoKeyContext from '../../contexts/PagePromoKey'
import {
    mapSelectedPitchSlideIndex,
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
            pagePitchIndex = useContext(PagePitchIndexContext),
            pagePromoKey = useContext(PagePromoKeyContext),
            selectedPromoKey = useSelector(mapSelectedPromoKey),
            pitchSlideIndex = useSelector(mapSelectedPitchSlideIndex)

        return (
            <ServerClientComponent
                {...{
                    ref,
                    serverClientPitchIndex: getIsServerSide() ?
                        pagePitchIndex :
                        pitchSlideIndex,
                    serverClientPromoKey: getIsServerSide() ?
                        pagePromoKey :
                        selectedPromoKey,
                    ...props,
                }}
            />
        )
    })
)

export default getPromoServerClientHoc
