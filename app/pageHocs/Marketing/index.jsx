import React from 'react'
import PropTypes from 'prop-types'
import Marketing from '../../components/Marketing'

const getMarketingPageComponent = ({
    pagePitchIndex = 1,
    pagePromoPath,

} = {}) => {
    /**
     * This returns the same component for each page, differing only by pitch
     * index and promo path. Extracting into a getter function to avoid
     * repeating code.
     */
    const MarketingPageComponent = () => (
        <Marketing
            {...{
                pagePitchIndex,
                pagePromoPath,
            }}
        />
    )

    MarketingPageComponent.propTypes = {
        pagePitchIndex: PropTypes.number,
        pagePromoPath: PropTypes.string,
    }

    return MarketingPageComponent
}

export default getMarketingPageComponent
