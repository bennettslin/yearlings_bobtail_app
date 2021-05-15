// Section to show credits and anchor for band website.
import React, { memo } from 'react'
import cx from 'classnames'
import AboutChild from './Child'
import AboutTitle from './Title'
import AboutContact from './Contact'
import AboutCredits from './Credits'
import MailingList from './MailingList'
import SocialMedia from './SocialMedia'

const About = () => (
    <div
        {...{
            className: cx(
                'About',
            ),
        }}
    >
        <AboutChild>
            <AboutTitle />
        </AboutChild>
        <AboutChild {...{ header: 'Mailing list' }}>
            <MailingList />
        </AboutChild>
        <AboutChild {...{ header: 'Contact us' }}>
            <AboutContact />
        </AboutChild>
        <AboutChild {...{ header: 'Social media' }}>
            <SocialMedia />
        </AboutChild>
        <AboutChild {...{ header: 'Credits' }}>
            <AboutCredits />
        </AboutChild>
    </div>
)

export default memo(About)
