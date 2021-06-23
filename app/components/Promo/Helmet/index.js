import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import getPromoServerClientHoc from '../../../hocs/PromoHoc'
import {
    getMetaDescription,
    getMetaTitle,
    getMetaTags,
} from './helper'

const PromoHelmet = ({ isPromoPage, serverClientPromoKey }) => isPromoPage && (
    <Helmet>
        <title>
            {getMetaTitle(serverClientPromoKey)}
        </title>
        <meta
            {...{
                name: 'description',
                content: getMetaDescription(),
            }}
        />
        {getMetaTags(serverClientPromoKey).map(({
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
        ))}
    </Helmet>
)

PromoHelmet.propTypes = {
    isPromoPage: PropTypes.bool,
    serverClientPromoKey: PropTypes.string.isRequired,
}

export default getPromoServerClientHoc(PromoHelmet)
