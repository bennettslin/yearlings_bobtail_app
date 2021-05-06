import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import PagePitchIndexContext from '../../contexts/PagePitchIndex'
import MarketingNav from './Nav'
import MarketingScroll from './Scroll'

const Marketing = forwardRef(({ pagePitchIndex }, ref) => (
    <PagePitchIndexContext.Provider {...{ value: pagePitchIndex }}>
        <MarketingScroll {...{ ref }} />
        <MarketingNav />
    </PagePitchIndexContext.Provider>
))

Marketing.propTypes = {
    pagePitchIndex: PropTypes.number,
}

export default Marketing
