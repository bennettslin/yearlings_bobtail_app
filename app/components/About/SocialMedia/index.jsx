import React, { Component } from 'react'

import Anchor from '../../Anchor'

import { INSTAGRAM_PAGE } from '../../../constants/website'

class SocialMedia extends Component {

    handleAnchorClick = () => {
        window.open(INSTAGRAM_PAGE)
    }

    render() {
        return (
            <Anchor
                {...{
                    text: 'Instagram',
                    handleAnchorClick: this.handleAnchorClick
                }}
            />
        )
    }
}

export default SocialMedia
