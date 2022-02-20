import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import PageArtupIndexContext from '../../contexts/PageArtupIndex'
import PageParetoIndexContext from '../../contexts/PageParetoIndex'
import PagePromoKeyContext from '../../contexts/PagePromoKey'
import PromoHelmet from './Helmet'
import PromoScroll from './Scroll'
import PromoFooter from './Footer'
import './style'

const Promo = forwardRef(({
    isPromoPage,
    pageArtupIndex,
    pageParetoIndex,
    pagePromoKey,
    handlePageChange,

}, ref) => (
    <PageArtupIndexContext.Provider {...{ value: pageArtupIndex }}>
        <PageParetoIndexContext.Provider {...{ value: pageParetoIndex }}>
            <PagePromoKeyContext.Provider {...{ value: pagePromoKey }}>
                <PromoHelmet {...{ isPromoPage }} />
                <PromoScroll {...{ ref, handlePageChange }} />
                <PromoFooter />
            </PagePromoKeyContext.Provider>
        </PageParetoIndexContext.Provider>
    </PageArtupIndexContext.Provider>
))

Promo.propTypes = {
    isPromoPage: PropTypes.bool,
    pageArtupIndex: PropTypes.number,
    pageParetoIndex: PropTypes.number,
    pagePromoKey: PropTypes.string,
    handlePageChange: PropTypes.func,
}

export default Promo
