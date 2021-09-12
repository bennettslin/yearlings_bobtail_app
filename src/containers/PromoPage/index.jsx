import React from 'react'
import PropTypes from 'prop-types'
import Promo from '../../components/Promo'

const PromoPage = ({
    pageContext: {
        pageArtupIndex = 1,
        pagePromoKey,
    } = {},
}) => (
    <Promo
        isPromoPage
        {...{
            pageArtupIndex,
            pagePromoKey,
        }}
    />
)

PromoPage.propTypes = {
    pageContext: PropTypes.shape({
        pageArtupIndex: PropTypes.number,
        pagePromoKey: PropTypes.string,
    }),
}

export default PromoPage
