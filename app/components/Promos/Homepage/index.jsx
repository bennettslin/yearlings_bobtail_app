import React from 'react'
import PromoView from '../../Promo/View'
import { getBodyForHomepage } from '../../../api/promo/homepage'

const HomepagePromo = () => (
    <PromoView
        {...{
            body: getBodyForHomepage(),
        }}
    >
    </PromoView>
)

export default HomepagePromo
