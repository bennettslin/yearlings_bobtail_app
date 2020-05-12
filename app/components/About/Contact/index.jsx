import React, { Fragment as ___ } from 'react'
import cx from 'classnames'

import { BENNETT_EMAIL } from '../../../constants/website'

const AboutContact = () => (
    <>
        {'If you have an offer or opportunity for me to consider, please email '}
        <span
            {...{
                className: cx(
                    'AboutContact__email',
                    'Rancho'
                )
            }}
        >
            {BENNETT_EMAIL.split('').map((character, index) => (
                <___
                    {...{ key: index }}
                >
                    <span {...{ className: 'displayNoneContainer' }}>
                        {String.fromCharCode(character.charCodeAt(0) + 1)}
                    </span>
                    <span>{character}</span>
                </___>
            ))}
        </span>
        {`. I'll respond if it matches my interests. Thanks!`}
    </>
)

export default AboutContact
