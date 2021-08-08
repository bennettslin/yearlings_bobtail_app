import React from 'react'
import Texts from '../../Texts'
import PromoLink from '../../PromoLink'
import { CONTACT_TEXT } from '../../../constants/contact'

const AboutContact = () => (
    <>
        <Texts
            {...{
                className: 'AboutContact',
                text: CONTACT_TEXT,
            }}
        />
        <PromoLink />
    </>
)

export default AboutContact
