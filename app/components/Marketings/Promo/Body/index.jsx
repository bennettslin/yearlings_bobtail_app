import React from 'react'
// import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import Anchor from '../../../Anchor'
import MarketingTitle from '../../../Marketing/Body/Title'
import MarketingContent from '../../../Marketing/Body/Content'
import { setSelectedPromoPath } from '../../../../redux/marketing/action'
import { ARTUP_SUBPATH, ONESHEET_SUBPATH } from '../../../../constants/routing'

const PromoBody = () => {
    const dispatch = useDispatch()

    const handleOnesheetClick = () => {
        dispatch(setSelectedPromoPath(ONESHEET_SUBPATH))
    }

    const handleArtupClick = () => {
        dispatch(setSelectedPromoPath(ARTUP_SUBPATH))
    }

    return (
        <>
            <MarketingTitle {...{ text: 'Promo Homepage' }} />
            <MarketingContent>
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
            </MarketingContent>
        </>
    )
}

PromoBody.propTypes = {}

export default PromoBody
