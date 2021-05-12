import React from 'react'
import { useDispatch } from 'react-redux'
import Anchor from '../../Anchor'
import PromoView from '../../Promo/View'
import { setSelectedPromoPath } from '../../../redux/promo/action'
import { ARTUP_SUBPATH, ONESHEET_SUBPATH } from '../../../constants/routing'

const HomepagePromo = () => {
    const dispatch = useDispatch()

    const handleOnesheetClick = () => {
        dispatch(setSelectedPromoPath(ONESHEET_SUBPATH))
    }

    const handleArtupClick = () => {
        dispatch(setSelectedPromoPath(ARTUP_SUBPATH))
    }

    return (
        <PromoView
            {...{
                title: 'Promo Homepage',
            }}
        >
            <Anchor
                {...{
                    text: 'Onesheet',
                    analyticsLabel: 'onesheet',
                    handleAnchorClick: handleOnesheetClick,
                }}
            />
            <Anchor
                {...{
                    text: 'Artup',
                    analyticsLabel: 'artup',
                    handleAnchorClick: handleArtupClick,
                }}
            />
        </PromoView>
    )
}

export default HomepagePromo
