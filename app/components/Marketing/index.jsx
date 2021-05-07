import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import PageArtupIndexContext from '../../contexts/PageArtupIndex'
import PagePromoPathContext from '../../contexts/PagePromoPath'
import MarketingNav from './Nav'
import MarketingScroll from './Scroll'
import PitchScroll from '../Pitch/Scroll'
import PitchNav from '../Pitch/Nav'

const Marketing = forwardRef(({ pageArtupIndex, pagePromoPath }, ref) => (
    <PageArtupIndexContext.Provider {...{ value: pageArtupIndex }}>
        <PagePromoPathContext.Provider {...{ value: pagePromoPath }}>
            <MarketingScroll {...{ ref }}>
                <PitchScroll />
            </MarketingScroll>
            <MarketingNav>
                <PitchNav />
            </MarketingNav>
        </PagePromoPathContext.Provider>
    </PageArtupIndexContext.Provider>
))

Marketing.propTypes = {
    pageArtupIndex: PropTypes.number,
    pagePromoPath: PropTypes.string,
}

export default Marketing
