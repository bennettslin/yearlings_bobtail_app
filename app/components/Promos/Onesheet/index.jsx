import React from 'react'
import PromoView from '../../Promo/View'
import {
    getBodyForOnesheet,
    getTitleForOnesheet,
} from '../../../api/promo'
import Texts from '../../Texts'

const OnesheetPromo = () => (
    <PromoView
        {...{
            title: getTitleForOnesheet(),
        }}
    >
        {getBodyForOnesheet().map((text, index) => (
            <p {...{ key: index }}>
                <Texts {...{ text }} />
            </p>
        ))}
    </PromoView>
)

export default OnesheetPromo
