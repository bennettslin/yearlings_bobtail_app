// Section to show credits and anchor for band website.
import React, { memo } from 'react'
import cx from 'classnames'
import AboutChild from './Child'
import AboutTitle from './Title'
import MailingList from './MailingList'
import AboutContact from './Contact'
import AboutCredits from './Credits'

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
        <AboutChild {...{ header: 'Sign up' }}>
            <MailingList />
        </AboutChild>
        <AboutChild {...{ header: 'Contact us' }}>
            <AboutContact />
        </AboutChild>
        <AboutChild {...{ header: 'Credits' }}>
            <AboutCredits />
        </AboutChild>
    </div>
)

export default memo(About)
