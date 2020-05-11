import React, { Component } from 'react'
import cx from 'classnames'

import Anchor from '../../Anchor'

import {
    FACEBOOK_PAGE,
    INSTAGRAM_PAGE
} from '../../../constants/website'

class SocialMedia extends Component {

    handleFacebookClick = () => {
        window.open(FACEBOOK_PAGE)
    }

    handleInstagramClick = () => {
        window.open(INSTAGRAM_PAGE)
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
                        text: 'Facebook',
                        analyticsIdentifier: 'facebook',
                        handleAnchorClick: this.handleFacebookClick
                    }}
                />
                <Anchor
                    {...{
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
