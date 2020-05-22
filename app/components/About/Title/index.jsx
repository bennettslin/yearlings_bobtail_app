import React, { Component } from 'react'
import cx from 'classnames'

import Anchor from '../../Anchor'

import { BOBTAIL_YEARLINGS_WEBSITE } from '../../../constants/website'

class AboutTitle extends Component {

    handleAnchorClick = () => {
        // TODO: Analytics.
        // window.open(BOBTAIL_YEARLINGS_WEBSITE)
    }

    render() {
        return (
            <>
                <i
                    {...{
                        className: cx(
                            'About__albumTitle',
                            'About__colouredText',
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
                                'About__colouredText',
                                'Rancho'
                            )
                        }}
                    >
                        <Anchor
                            {...{
                                href: BOBTAIL_YEARLINGS_WEBSITE,
                                text: 'Bobtail Yearlings',
                                analyticsIdentifier: 'BobtailYearlings',
                                handleAnchorClick: this.handleAnchorClick
                            }}
                        />
                    </span>
                </div>
            </>
        )
    }
}

export default AboutTitle
