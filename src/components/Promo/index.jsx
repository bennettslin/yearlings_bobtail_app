import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import PagePitchIndexContext from '../../contexts/PagePitchIndex'
import PagePromoKeyContext from '../../contexts/PagePromoKey'
import PromoHelmet from './Helmet'
import PromoScroll from './Scroll'
import PromoFooter from './Footer'
import './style'

const Promo = forwardRef(({
    isPromoPage,
    pagePitchIndex,
    pagePromoKey,
    handlePageChange,

}, ref) => (
    <PagePitchIndexContext.Provider {...{ value: pagePitchIndex }}>
        <PagePromoKeyContext.Provider {...{ value: pagePromoKey }}>
            <PromoHelmet {...{ isPromoPage }} />
            <PromoScroll {...{ ref, handlePageChange }} />
            <PromoFooter />
        </PagePromoKeyContext.Provider>
    </PagePitchIndexContext.Provider>
))

Promo.propTypes = {
    isPromoPage: PropTypes.bool,
    pagePitchIndex: PropTypes.number,
    pagePromoKey: PropTypes.string,
    handlePageChange: PropTypes.func,
}

export default Promo
