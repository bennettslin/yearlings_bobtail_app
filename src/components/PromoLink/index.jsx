import React, { useRef } from 'react'
import Anchor from '../Anchor'
import PromoDispatcher from '../../dispatchers/Promo'
import './style'

const PromoLink = () => {
    const dispatchPromo = useRef()

    const handleAnchorClick = () => {
        dispatchPromo.current({ isPromoShown: true })
    }

    return (
        <>
            <PromoDispatcher {...{ ref: dispatchPromo }} />
            <div {...{ className: 'PromoLink' }}>
                {`Interested in working with us? Visit our `}
                <Anchor
                    neverDeselects
                    {...{
                        text: 'promo homepage',
                        analyticsLabel: 'promo',
                        handleAnchorClick,
                    }}
                />
                {`!`}
            </div>
        </>
    )
}

export default PromoLink
