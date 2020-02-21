// Container to outline of a key on a keyboard, shared by all access icons.

import React, { Component, Fragment as ___ } from 'react'
import cx from 'classnames'

import Anchor from '../../Anchor'

import { BOBTAIL_YEARLINGS_WEBSITE } from '../../../constants/website'

class AboutTitle extends Component {

    handleAnchorClick = () => {
        // TODO: Make this open a new tab.
        window.location.href = BOBTAIL_YEARLINGS_WEBSITE
    }

    render() {
        return (
            <___>
                <div>
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
                            {`Bobtail Yearlings`}
                        </span>
                    </div>
                </div>
                <div>
                    {'Visit the '}
                    <Anchor
                        {...{
                            text: 'Bobtail Yearlings website',
                            handleAnchorClick: this.handleAnchorClick
                        }}
                    />
                    {'.'}
                </div>
            </___>
        )
    }
}

export default AboutTitle
