import React from 'react'
import { useDispatch } from 'react-redux'
import Anchor from '../Anchor'
import { toggleIsMarketingShown } from '../../redux/toggle/action'
import './style'

const PromoAnchor = () => {
    const dispatch = useDispatch()

    const handleAnchorClick = () => {
        dispatch(toggleIsMarketingShown())
    }

    return (
        <div {...{ className: 'PromoAnchor' }}>
            {`Interested in working with us? Read `}
            <Anchor
                {...{
                    text: 'our pitch!',
                    analyticsLabel: 'marketing',
                    handleAnchorClick,
                }}
            />
        </div>
    )
}

export default PromoAnchor
