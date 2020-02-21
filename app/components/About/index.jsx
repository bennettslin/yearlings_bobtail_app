// Section to show credits and anchor for band website.

import React, { Component } from 'react'
import cx from 'classnames'

import AboutChild from './Child'
import AboutContact from './Contact'
import AboutCredits from './Credits'
import MailingList from './MailingList'
import AboutTitle from './Title'

class About extends Component {

    render() {
        return (
            <div
                {...{
                    className: cx(
                        'About',
                        'fontSize__verse'
                    )
                }}
            >
                <AboutChild>
                    <AboutTitle />
                </AboutChild>
                <AboutChild {...{ header: 'Contact' }}>
                    <AboutContact />
                </AboutChild>
                <AboutChild {...{ header: 'Mailing List' }}>
                    <MailingList />
                </AboutChild>
                <AboutChild {...{ header: 'Social Media' }}>
                    TODO
                </AboutChild>
                <AboutChild {...{ header: 'Credits' }}>
                    <AboutCredits />
                </AboutChild>
            </div>
        )
    }
}

export default About
