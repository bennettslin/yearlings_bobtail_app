import React from 'react'
import Anchor from '../../Anchor'
import {
    FACEBOOK_PAGE,
    INSTAGRAM_PAGE,
    TWITTER_PAGE,
} from '../../../constants/website'
import './style'

const SocialMedia = () => (
    <div {...{ className: 'SocialMedia' }}>
        <Anchor
            {...{
                href: FACEBOOK_PAGE,
                text: 'Facebook',
                analyticsLabel: 'facebook',
            }}
        />
        <Anchor
            {...{
                href: INSTAGRAM_PAGE,
                text: 'Instagram',
                analyticsLabel: 'instagram',
            }}
        />
        <Anchor
            {...{
                href: TWITTER_PAGE,
                text: 'Twitter',
                analyticsLabel: 'twitter',
            }}
        />
    </div>
)

export default SocialMedia
