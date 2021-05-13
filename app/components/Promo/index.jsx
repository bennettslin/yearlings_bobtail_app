import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import PageArtupIndexContext from '../../contexts/PageArtupIndex'
import PagePromoKeyContext from '../../contexts/PagePromoKey'
import PromoScroll from './Scroll'
import PromoFooter from './Footer'
import './style'

const Promo = forwardRef(({
    pageArtupIndex,
    pagePromoKey,
    handlePageChange,

}, ref) => (
    <PageArtupIndexContext.Provider {...{ value: pageArtupIndex }}>
        <PagePromoKeyContext.Provider {...{ value: pagePromoKey }}>
            <PromoScroll {...{ ref, handlePageChange }} />
            <PromoFooter />
        </PagePromoKeyContext.Provider>
    </PageArtupIndexContext.Provider>
))

Promo.propTypes = {
    pageArtupIndex: PropTypes.number,
    pagePromoKey: PropTypes.string,
    handlePageChange: PropTypes.func,
}

export default Promo
