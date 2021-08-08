import React from 'react'
import PropTypes from 'prop-types'
import Promo from '../../components/Promo'

const getPromoPageComponent = ({
    pageArtupIndex = 1,
    pageArtup2Index = 1,
    pagePromoKey,

} = {}) => {
    /**
     * This returns the same component for each page, differing only by pitch
     * index and promo path. Extracting into a getter function to avoid
     * repeating code.
     */
    const PromoPageComponent = () => (
        <Promo
            isPromoPage
            {...{
                pageArtupIndex,
                pageArtup2Index,
                pagePromoKey,
            }}
        />
    )

    PromoPageComponent.propTypes = {
        pageArtupIndex: PropTypes.number,
        pageArtup2Index: PropTypes.number,
        pagePromoKey: PropTypes.string,
    }

    return PromoPageComponent
}

export default getPromoPageComponent
