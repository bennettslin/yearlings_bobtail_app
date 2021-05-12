import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import PageArtupIndexContext from '../../contexts/PageArtupIndex'
import PagePromoPathContext from '../../contexts/PagePromoPath'
import PromoScroll from './Scroll'
import PromoFooter from './Footer'
import './style'

const Marketing = forwardRef(({
    pageArtupIndex,
    pagePromoPath,
    handlePageChange,

}, ref) => (
    <PageArtupIndexContext.Provider {...{ value: pageArtupIndex }}>
        <PagePromoPathContext.Provider {...{ value: pagePromoPath }}>
            <PromoScroll {...{ ref, handlePageChange }} />
            <PromoFooter />
        </PagePromoPathContext.Provider>
    </PageArtupIndexContext.Provider>
))

Marketing.propTypes = {
    pageArtupIndex: PropTypes.number,
    pagePromoPath: PropTypes.string,
    handlePageChange: PropTypes.func,
}

export default Marketing
