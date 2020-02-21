// Container to outline of a key on a keyboard, shared by all access icons.

import React, { Fragment as ___ } from 'react'
import cx from 'classnames'

import { BENNETT_EMAIL } from '../../../constants/website'

const AboutContact = () => (
    <___>
        {'If you have an offer or opportunity that I might be interested in, please email!'}
        <span
            {...{
                className: cx(
                    'AboutContact__email',
                    'About__stylisedText',
                    'Rancho'
                )
            }}
        >
            {BENNETT_EMAIL.split('').map((character, index) => (
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
        {`. I'll respond if it matches my interests. Thanks!`}
    </___>
)

export default AboutContact
