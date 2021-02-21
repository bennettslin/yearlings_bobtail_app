import React from 'react'
import Anchor from '../../Anchor'
import {
    FACEBOOK_PAGE,
    INSTAGRAM_PAGE,
} from '../../../constants/website'
import './style'

const SocialMedia = () => {
    const handleFacebookClick = () => {
        // TODO: Analytics.
    }

    const handleInstagramClick = () => {
        // TODO: Analytics.
    }

    return (
        <div {...{ className: 'SocialMedia' }}>
            <Anchor
                {...{
                    href: FACEBOOK_PAGE,
                    text: 'Facebook',
                    analyticsLabel: 'facebook',
                    handleAnchorClick: handleFacebookClick,
                }}
            />
            <Anchor
                {...{
                    href: INSTAGRAM_PAGE,
                    text: 'Instagram',
                    analyticsLabel: 'instagram',
                    handleAnchorClick: handleInstagramClick,
                }}
            />
        </div>
    )
}

export default SocialMedia
