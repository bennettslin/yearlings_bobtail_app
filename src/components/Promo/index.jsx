import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import PageArtupIndexContext from '../../contexts/PageArtupIndex'
import PagePromoKeyContext from '../../contexts/PagePromoKey'
import PromoHelmet from './Helmet'
import PromoScroll from './Scroll'
import PromoFooter from './Footer'
import './style'

const Promo = forwardRef(({
    isPromoPage,
    pageArtupIndex,
    pagePromoKey,
    handlePageChange,

}, ref) => (
    <PageArtupIndexContext.Provider {...{ value: pageArtupIndex }}>
        <PagePromoKeyContext.Provider {...{ value: pagePromoKey }}>
            <PromoHelmet {...{ isPromoPage }} />
            <PromoScroll {...{ ref, handlePageChange }} />
            <PromoFooter />
        </PagePromoKeyContext.Provider>
    </PageArtupIndexContext.Provider>
))

Promo.propTypes = {
    isPromoPage: PropTypes.bool,
    pageArtupIndex: PropTypes.number,
    pagePromoKey: PropTypes.string,
    handlePageChange: PropTypes.func,
}

export default Promo
