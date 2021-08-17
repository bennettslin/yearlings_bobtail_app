import React, { useState } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import * as EmailValidator from 'email-validator'
import getDidMountHoc from '../../../hocs/DidMountHoc'
import {
    EMAIL_ACTION,
    EMAIL_NAME,
    EMAIL_DUMMY_NAME,
    EMAIL_ID,
} from '../../../constants/website'
import './style'

const MailingList = ({ didMount }) => {
    const
        [isValidEmail, setIsValidEmail] = useState(false),
        [emailValue, setEmailValue] = useState('')

    const onFocus = () => {
        logEvent(
            'MailingList',
            'email',
        )
    }

    const onClick = () => {
        logEvent(
            'MailingList',
            'submit',
        )
    }

    const onChange = ({ target: { value } }) => {
        const emailValue = value.replace(' ', '')

        setIsValidEmail(EmailValidator.validate(emailValue))
        setEmailValue(emailValue)
    }

    return didMount && (
        <form
            noValidate
            {...{
                className: cx(
                    'MailingList',
                ),
                action: EMAIL_ACTION,
                method: 'post',
                target: '_blank',
            }}
        >
            <input
                required
                {...{
                    className: cx(
                        'MailingList__emailField',
                        'MailingList__input',
                        'font__text',
                        'foN',
                    ),
                    id: EMAIL_ID,
                    name: EMAIL_NAME,
                    type: 'text',
                    value: emailValue,
                    placeholder: 'Email address',
                    autoComplete: 'off',
                    maxLength: 254,
                    onFocus,
                    onChange,
                }}
            />
            {/* Honeypot field to prevent bot signups. */}
            <div
                {...{
                    style: {
                        position: 'absolute',
                        left: '-5000px',
                    },
                    'aria-hidden': true,
                }}
            >
                <input
                    {...{
                        name: EMAIL_DUMMY_NAME,
                        type: 'text',
                        defaultValue: '',
                        tabIndex: -1,
                    }}
                />
            </div>
            <input
                {...{
                    className: cx(
                        'MailingList__submitButton',
                        'MailingList__input',
                        'font__text',
                        'foN',
                    ),
                    type: 'submit',
                    value: 'Sign up!',
                    disabled: !isValidEmail,
                    onClick,
                }}
            />
        </form>
    )
}

MailingList.propTypes = {
    didMount: PropTypes.bool.isRequired,
}

export default getDidMountHoc(MailingList)
