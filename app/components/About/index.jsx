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
                <div {...{ className: 'About__child' }}>
                    <i
                        {...{
                            className: cx(
                                'About__albumTitle',
                                'About__stylisedText',
                                'Rancho'
                            )
                        }}
                    >
                        {`Yearling's Bobtail`}
                    </i>
                    <div {...{ className: 'About__byLine' }}>
                        {'by '}
                        <span
                            {...{
                                className: cx(
                                    'About__bandName',
                                    'About__stylisedText',
                                    'Rancho'
                                )
                            }}
                        >
                            {`The Bobtail Yearlings`}
                        </span>
                    </div>
                </div>
                <div {...{ className: 'About__child' }}>
                    {'Visit the '}
                    <Anchor
                        {...{
                            text: 'Bobtail Yearlings website',
                            handleAnchorClick: this.handleAnchorClick
                        }}
                    />
                    {'.'}
                </div>
                <div {...{ className: 'About__child' }}>
                    {'If you have an offer or opportunity that I might be interested in, please email me at '}
                    <span
                        {...{
                            className: cx(
                                'About__email',
                                'About__stylisedText',
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
                    {`. I'll respond if it matches my interests and my schedule. Thanks!`}
                </div>
                <div
                    {...{
                        className: cx(
                            'About__child',
                            'About__finePrint'
                        )
                    }}
                >
                    {'Album written, composed, and performed by Bennett Lin.'}
                    <br />
                    {'Website annotated, illustrated, and coded by Bennett Lin.'}
                </div>
            </div>
        )
    }
}

export default About
