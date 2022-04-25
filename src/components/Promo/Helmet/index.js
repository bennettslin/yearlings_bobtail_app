import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import getPromoServerClientHoc from '../../../hocs/PromoHoc'
import { getMetaTags, getMetaTitle } from '../../../utils/helmet'

const PromoHelmet = ({
    isPromoPage,
    serverClientPromoKey,
    serverClientPitchIndex,
}) => {
    // Does not render at all in album session.
    return Boolean(isPromoPage) && (
        <Helmet>
            <title>
                {getMetaTitle({
                    promoKey: serverClientPromoKey,
                    pitchIndex: serverClientPitchIndex,
                })}
            </title>
            {getMetaTags({
                promoKey: serverClientPromoKey,
                pitchIndex: serverClientPitchIndex,
            }).map(({
                name,
                property,
                content,
            }) => (
                <meta
                    {...{
                        key: name || property,
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
    serverClientPitchIndex: PropTypes.number.isRequired,
}

export default getPromoServerClientHoc(PromoHelmet)
