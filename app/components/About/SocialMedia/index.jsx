import React, { Component } from 'react'
import cx from 'classnames'

import Anchor from '../../Anchor'

import {
    FACEBOOK_PAGE,
    INSTAGRAM_PAGE
} from '../../../constants/website'

class SocialMedia extends Component {

    handleFacebookClick = () => {
        // TODO: Analytics.
        // window.open(FACEBOOK_PAGE)
    }

    handleInstagramClick = () => {
        // TODO: Analytics.
        // window.open(INSTAGRAM_PAGE)
    }

    render() {
        return (
            <div
                {...{
                    className: cx(
                        'SocialMedia'
                    )
                }}
            >
                <Anchor
                    {...{
                        href: FACEBOOK_PAGE,
                        text: 'Facebook',
                        analyticsIdentifier: 'facebook',
                        handleAnchorClick: this.handleFacebookClick
                    }}
                />
                <Anchor
                    {...{
                        href: INSTAGRAM_PAGE,
                        text: 'Instagram',
                        analyticsIdentifier: 'Instagram',
                        handleAnchorClick: this.handleInstagramClick
                    }}
                />
            </div>
        )
    }
}

export default SocialMedia
