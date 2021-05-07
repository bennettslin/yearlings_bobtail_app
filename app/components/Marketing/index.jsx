import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import PagePitchIndexContext from '../../contexts/PagePitchIndex'
import PagePromoPathContext from '../../contexts/PagePromoPath'
import MarketingNav from './Nav'
import MarketingScroll from './Scroll'
import PitchScroll from '../Pitch/Scroll'
import PitchNav from '../Pitch/Nav'

const Marketing = forwardRef(({ pagePitchIndex, pagePromoPath }, ref) => (
    <PagePitchIndexContext.Provider {...{ value: pagePitchIndex }}>
        <PagePromoPathContext.Provider {...{ value: pagePromoPath }}>
            <MarketingScroll {...{ ref }}>
                <PitchScroll />
            </MarketingScroll>
            <MarketingNav>
                <PitchNav />
            </MarketingNav>
        </PagePromoPathContext.Provider>
    </PagePitchIndexContext.Provider>
))

Marketing.propTypes = {
    pagePitchIndex: PropTypes.number,
    pagePromoPath: PropTypes.string,
}

export default Marketing
