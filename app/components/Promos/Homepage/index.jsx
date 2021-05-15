import React from 'react'
import { useDispatch } from 'react-redux'
import Anchor from '../../Anchor'
import PromoView from '../../Promo/View'
import { setSelectedPromoKey } from '../../../redux/promo/action'
import { getBodyForHomepage, getTitleForHomepage } from '../../../api/promo/homepage'

const HomepagePromo = () => {
    const dispatch = useDispatch()

    // const handleOnesheetClick = () => {
    //     dispatch(setSelectedPromoKey(ONESHEET_SUBPATH))
    // }

    // const handleArtupClick = () => {
    //     dispatch(setSelectedPromoKey(ARTUP_SUBPATH))
    // }

    return (
        <PromoView
            {...{
                title: getTitleForHomepage(),
                body: getBodyForHomepage(),
            }}
        >
        </PromoView>
    )
}

export default HomepagePromo

// [
//     <Anchor
//         {...{
//             text: 'Onesheet',
//             analyticsLabel: 'onesheet',
//             handleAnchorClick: handleOnesheetClick,
//         }}
//     />,
//     <Anchor
//         {...{
//             text: 'Artup',
//             analyticsLabel: 'artup',
//             handleAnchorClick: handleArtupClick,
//         }}
//     />,
// ]