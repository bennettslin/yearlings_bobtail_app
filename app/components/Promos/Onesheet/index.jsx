import React from 'react'
import PromoView from '../../Promo/View'
import { getBodyForOnesheet } from '../../../api/promo/onesheet'

const OnesheetPromo = () => (
    <PromoView
        {...{
            body: getBodyForOnesheet(),
        }}
    />
)

export default OnesheetPromo
