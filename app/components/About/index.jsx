// Section to show credits and anchor for band website.

import React, { Component, Fragment as ___ } from 'react'
import cx from 'classnames'

import Anchor from '../Anchor'

import {
    BOBTAIL_YEARLINGS_EMAIL,
    BOBTAIL_YEARLINGS_WEBSITE
} from '../../constants/website'

class About extends Component {

    handleAnchorClick = () => {
        window.location.href = BOBTAIL_YEARLINGS_WEBSITE
    }

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
                <p>
                    {'Album written, composed, and performed by Bennett Lin.'}
                    <br />
                    {'Website annotated, illustrated, and coded by Bennett Lin.'}
                </p>
                <p>
                    {'If you have an offer or opportunity that I might be interested in, email me at '}
                    <span
                        {...{
                            className: cx(
                                'email',
                                'Rancho'
                            )
                        }}
                    >
                        {BOBTAIL_YEARLINGS_EMAIL.split('').map((character, index) => (
                            <___
                                {...{ key: index }}
                            >
                                <span {...{ className: 'displayNoneContainer' }}>
                                    remove
                                </span>
                                <span>{character}</span>
                            </___>
                        ))}
                    </span>
                    {'. Please note, I\'ll only respond if it matches my interests and my schedule.'}
                </p>
                <p>
                    {'Visit the '}
                    <Anchor
                        {...{
                            text: 'Bobtail Yearlings website',
                            handleAnchorClick: this.handleAnchorClick
                        }}
                    />
                    {'.'}
                </p>
            </div>
        )
    }
}

export default About
