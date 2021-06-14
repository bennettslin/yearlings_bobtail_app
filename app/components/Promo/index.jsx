import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import PageArtupIndexContext from '../../contexts/PageArtupIndex'
import PageArtup2IndexContext from '../../contexts/PageArtup2Index'
import PagePromoKeyContext from '../../contexts/PagePromoKey'
import PromoScroll from './Scroll'
import PromoFooter from './Footer'
import './style'

const Promo = forwardRef(({
    pageArtupIndex,
    pageArtup2Index,
    pagePromoKey,
    handlePageChange,

}, ref) => (
    <PageArtupIndexContext.Provider {...{ value: pageArtupIndex }}>
        <PageArtup2IndexContext.Provider {...{ value: pageArtup2Index }}>
            <PagePromoKeyContext.Provider {...{ value: pagePromoKey }}>
                <PromoScroll {...{ ref, handlePageChange }} />
                <PromoFooter />
            </PagePromoKeyContext.Provider>
        </PageArtup2IndexContext.Provider>
    </PageArtupIndexContext.Provider>
))

Promo.propTypes = {
    pageArtupIndex: PropTypes.number,
    pageArtup2Index: PropTypes.number,
    pagePromoKey: PropTypes.string,
    handlePageChange: PropTypes.func,
}

export default Promo
