import React from 'react'
import { useDispatch } from 'react-redux'
import Anchor from '../../Anchor'
import MarketingView from '../../Marketing/View'
import { setSelectedPromoPath } from '../../../redux/marketing/action'
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
        <MarketingView
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
        </MarketingView>
    )
}

export default HomepagePromo
