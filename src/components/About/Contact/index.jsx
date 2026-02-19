import React from 'react'
import cx from 'classnames'
import Texts from '../../Texts'
import PromoLink from '../../PromoLink'
import { CONTACT_TEXT } from '../../../constants/contact'

const AboutContact = () => (
    <div
        {...{
            className: cx(
                `AboutContact`,
                `AboutGrandchild`,
            ),
        }}
    >
        <div>
            <Texts
                {...{
                    className: 'AboutContact',
                    text: CONTACT_TEXT,
                }}
            />
        </div>
        <PromoLink />
    </div>
)

export default AboutContact
