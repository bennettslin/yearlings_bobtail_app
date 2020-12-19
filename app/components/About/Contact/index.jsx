import React from 'react'
import Contact from '../../Contact'
import PitchAnchor from '../../PitchAnchor'
import './style'

const AboutContact = () => (
    <span {...{ className: 'AboutContact' }}>
        {/* {'If you have an offer or opportunity for us to consider, please email '} */}
        {`We'd love to hear from ambitious musicians, record labels and the music press, and anyone with an offer or opportunity for us to consider. Please email `}
        <Contact />
        {`. Thanks!`}
        {/* {`. We'll respond if it matches our interests.`} */}
        <PitchAnchor />
    </span>
)

export default AboutContact
