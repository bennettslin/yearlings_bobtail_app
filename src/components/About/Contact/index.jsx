import React from 'react'
import cx from 'classnames'
import Texts from '../../Texts'
import PromoLink from '../../PromoLink'
import { CONTACT_TEXT } from '../../../constants/contact'
import './style'

const AboutContact = () => (
    <div
        {...{
            className: cx(
                `AboutContact`,
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
