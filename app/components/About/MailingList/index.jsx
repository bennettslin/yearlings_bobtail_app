import React, { Component } from 'react'
import * as EmailValidator from 'email-validator'

import { EMAIL_ID } from '../../../constants/website'

// MailChimp constants.
const EMAIL_ACTION = `https://yearlingsbobtail.us4.list-manage.com/subscribe/post?u=7a9ef82a8d139c5688d0209ef&amp;id=258547592f`
const EMAIL_NAME = 'EMAIL'
const EMAIL_DUMMY_NAME = 'b_7a9ef82a8d139c5688d0209ef_258547592f'

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

    onClick = () => {
        console.log('click')
    }

    onFocus = () => {
        console.log('on focus')
    }

    onBlur = ({ target: { value } }) => {
        console.log(`"${value}"`)
        this.setState({ emailValue: value.trim() })
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
                    className: 'MailingList',
                    action: EMAIL_ACTION,
                    method: 'post',
                    target: '_blank'
                }}
            >
                <input
                    required
                    {...{
                        className: 'MailingList__inputField',
                        id: EMAIL_ID,
                        name: EMAIL_NAME,
                        type: 'text',
                        value: emailValue,
                        placeholder: 'Email address',
                        autoComplete: 'off',
                        onFocus: this.onFocus,
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
                        className: 'MailingList__submitButton',
                        type: 'submit',
                        value: 'Sign up!',
                        disabled: !isValidEmail,
                        onClick: this.onClick
                    }}
                />
            </form>
        )
    }
}

export default MailingList
