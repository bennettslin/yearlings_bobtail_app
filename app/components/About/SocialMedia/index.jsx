import React from 'react'
import Anchor from '../../Anchor'
import {
    FACEBOOK_PAGE,
    INSTAGRAM_PAGE,
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
    </div>
)

export default SocialMedia
