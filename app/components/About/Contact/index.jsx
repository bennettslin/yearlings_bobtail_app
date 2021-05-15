import React from 'react'
import Contact from '../../Contact'
import PromoLink from '../../PromoLink'
import './style'

const AboutContact = () => (
    <span {...{ className: 'AboutContact' }}>
        {`We'd love to hear from ambitious musicians, record labels and the music press, and anyone with an offer or opportunity for us to consider. Please email `}
        <Contact />
        {`. Thanks!`}
        <PromoLink />
    </span>
)

export default AboutContact
