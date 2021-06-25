import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import getPromoServerClientHoc from '../../../hocs/PromoHoc'
import {
    getMetaTitle,
    getMetaTags,
} from './helper'

const PromoHelmet = ({ isPromoPage, serverClientPromoKey }) => {
    // Does not render in album session.
    return Boolean(isPromoPage) && (
        <Helmet>
            <title>{getMetaTitle(serverClientPromoKey)}</title>
            {getMetaTags(serverClientPromoKey).map(({
                name,
                property,
                content,
            }, index) => (
                <meta
                    {...{
                        key: index,
                        ...name && { name },
                        ...property && { property },
                        content,
                    }}
                />
            ))}
        </Helmet>
    )
}

PromoHelmet.propTypes = {
    isPromoPage: PropTypes.bool,
    serverClientPromoKey: PropTypes.string.isRequired,
}

export default getPromoServerClientHoc(PromoHelmet)
