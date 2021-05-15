import React from 'react'
import PromoView from '../../Promo/View'
import {
    getBodyForOnesheet,
    getTitleForOnesheet,
} from '../../../api/promo/onesheet'

const OnesheetPromo = () => (
    <PromoView
        {...{
            title: getTitleForOnesheet(),
            body: getBodyForOnesheet(),
        }}
    />
)

export default OnesheetPromo
