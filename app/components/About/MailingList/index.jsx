import React, { Component } from 'react'
import cx from 'classnames'
import * as EmailValidator from 'email-validator'

import { EMAIL_ID } from '../../../constants/website'

// MailChimp constants.
const EMAIL_ACTION = `https://bobtailyearlings.us4.list-manage.com/subscribe/post?u=7a9ef82a8d139c5688d0209ef&amp;id=13ca4c5861`
const EMAIL_NAME = 'EMAIL'
const EMAIL_DUMMY_NAME = 'b_7a9ef82a8d139c5688d0209ef_13ca4c5861'

class MailingList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isValidEmail: false,
            emailValue: ''
        }
    }

    onChange = ({ target: { value } }) => {
        const emailValue = value.replace(' ', '')

        this.setState({
            isValidEmail: EmailValidator.validate(emailValue),
            emailValue
        })
    }

    onInputFocus = e => {
        logEvent({
            e,
            componentName: 'MailingList',
            analyticsIdentifier: 'email'
        })
    }

    onButtonClick = e => {
        logEvent({
            e,
            componentName: 'MailingList',
            analyticsIdentifier: 'submit'
        })
    }

    render() {
        const {
            isValidEmail,
            emailValue
        } = this.state

        return (
            <form
                noValidate
                {...{
                    className: cx(
                        'MailingList'
                    ),
                    action: EMAIL_ACTION,
                    method: 'post',
                    target: '_blank'
                }}
            >
                <input
                    required
                    {...{
                        className: cx(
                            'MailingList__emailField',
                            'MailingList__input',
                            'PtSansNarrow'
                        ),
                        id: EMAIL_ID,
                        name: EMAIL_NAME,
                        type: 'text',
                        value: emailValue,
                        placeholder: 'Email address',
                        autoComplete: 'off',
                        maxLength: 254,
                        onFocus: this.onInputFocus,
                        onChange: this.onChange,
                        onBlur: this.onBlur
                    }}
                />
                {/* Honeypot field to prevent bot signups. */}
                <div
                    {...{
                        style: {
                            position: 'absolute',
                            left: '-5000px'
                        },
                        'aria-hidden': true
                    }}
                >
                    <input
                        {...{
                            name: EMAIL_DUMMY_NAME,
                            type: 'text',
                            defaultValue: '',
                            tabIndex: -1
                        }}
                    />
                </div>
                <input
                    {...{
                        className: cx(
                            'MailingList__submitButton',
                            'MailingList__input',
                            'PtSansNarrow'
                        ),
                        type: 'submit',
                        value: 'Sign up!',
                        disabled: !isValidEmail,
                        onClick: this.onButtonClick
                    }}
                />
            </form>
        )
    }
}

export default MailingList
