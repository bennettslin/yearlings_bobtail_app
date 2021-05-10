// Section to show promo root page.
import React from 'react'
// import PropTypes from 'prop-types'
import MarketingTitle from '../../../Marketing/Body/Title'
import MarketingContent from '../../../Marketing/Body/Content'

const OnesheetBody = () => {
    return (
        <>
            <MarketingTitle {...{ text: 'Onesheet' }} />
            <MarketingContent>
                Onesheet test
            </MarketingContent>
        </>
    )
}

OnesheetBody.propTypes = {}

export default OnesheetBody
