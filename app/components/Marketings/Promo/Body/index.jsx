// Section to show promo root page.
import React from 'react'
// import PropTypes from 'prop-types'
import MarketingTitle from '../../../Marketing/Body/Title'
import MarketingContent from '../../../Marketing/Body/Content'

const PromoBody = () => {
    return (
        <>
            <MarketingTitle {...{ text: 'Promo' }} />
            <MarketingContent>
                Promo test
            </MarketingContent>
        </>
    )
}

PromoBody.propTypes = {}

export default PromoBody
