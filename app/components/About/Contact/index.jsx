import React from 'react'
import Contact from '../../Contact'
import MarketingAnchor from '../../MarketingAnchor'
import './style'

const AboutContact = () => (
    <span {...{ className: 'AboutContact' }}>
        {/* {'If you have an offer or opportunity for us to consider, please email '} */}
        {`We'd love to hear from ambitious musicians, record labels and the music press, and anyone with an offer or opportunity for us to consider. Please email `}
        <Contact />
        {`. Thanks!`}
        {/* {`. We'll respond if it matches our interests.`} */}
        <MarketingAnchor />
    </span>
)

export default AboutContact
