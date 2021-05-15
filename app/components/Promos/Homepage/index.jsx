import React from 'react'
import PromoView from '../../Promo/View'
import {
    getBodyForHomepage,
    getTitleForHomepage,
} from '../../../api/promo/homepage'

const HomepagePromo = () => (
    <PromoView
        {...{
            title: getTitleForHomepage(),
            body: getBodyForHomepage(),
        }}
    >
    </PromoView>
)

export default HomepagePromo
