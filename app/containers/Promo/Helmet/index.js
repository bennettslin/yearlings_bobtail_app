import React from 'react'
import { useSelector } from 'react-redux'
import { Helmet } from 'react-helmet'
import { mapSelectedPromoKey } from '../../../redux/promo/selector'
// import {
//     getMetaDescription,
//     getMetaTitle,
//     getMetaTags,
// } from './helper'
import { getHelmetTitleForPromoKey } from '../helper'

const PromoHelmet = () => {
    const selectedPromoKey = useSelector(mapSelectedPromoKey)

    return (
        <Helmet>
            <title>
                {getHelmetTitleForPromoKey(selectedPromoKey)}
            </title>
            <meta
                {...{
                    name: 'description',
                    content: `Promo material for the Bobtail Yearlings album Yearling's Bobtail.`,
                }}
            />
            {/* {getMetaTags(serverClientSongIndex).map(({
                name,
                content,
            }) => (
                <meta
                    {...{
                        key: name,
                        name,
                        content,
                    }}
                />
            ))} */}
        </Helmet>
    )
}

export default PromoHelmet
