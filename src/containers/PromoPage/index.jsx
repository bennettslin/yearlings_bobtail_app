import React from 'react'
import PropTypes from 'prop-types'
import Promo from '../../components/Promo'

const PromoPage = ({
    pageContext: {
        pagePitchIndex = 1,
        pagePromoKey,
    } = {},
}) => (
    <Promo
        isPromoPage
        {...{
            pagePitchIndex,
            pagePromoKey,
        }}
    />
)

PromoPage.propTypes = {
    pageContext: PropTypes.shape({
        pagePitchIndex: PropTypes.number,
        pagePromoKey: PropTypes.string,
    }),
}

export default PromoPage
