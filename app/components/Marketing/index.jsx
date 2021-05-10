import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import PageArtupIndexContext from '../../contexts/PageArtupIndex'
import PagePromoPathContext from '../../contexts/PagePromoPath'
import MarketingBody from './Body'
import MarketingFooter from './Footer'

const Marketing = forwardRef(({
    pageArtupIndex,
    pagePromoPath,
    handlePageChange,

}, ref) => (
    <PageArtupIndexContext.Provider {...{ value: pageArtupIndex }}>
        <PagePromoPathContext.Provider {...{ value: pagePromoPath }}>
            <MarketingBody {...{ ref, handlePageChange }} />
            <MarketingFooter />
        </PagePromoPathContext.Provider>
    </PageArtupIndexContext.Provider>
))

Marketing.propTypes = {
    pageArtupIndex: PropTypes.number,
    pagePromoPath: PropTypes.string,
    handlePageChange: PropTypes.func,
}

export default Marketing
