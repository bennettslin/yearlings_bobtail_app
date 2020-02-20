import React, { Component } from 'react'

import { EMAIL_ID } from '../../../constants/website'

// MailChimp constants.
const EMAIL_ACTION = `https://yearlingsbobtail.us4.list-manage.com/subscribe/post?u=7a9ef82a8d139c5688d0209ef&amp;id=258547592f`
const EMAIL_NAME = 'EMAIL'
const EMAIL_DUMMY_NAME = 'b_7a9ef82a8d139c5688d0209ef_258547592f'

class Email extends Component {

    constructor(props) {
        super(props)
        this.emailInput = React.createRef()
    }

    onClick() {
        console.log('click')
    }

    onFocus() {
        console.log('on focus')
    }

    render() {
        return (
            <form
                noValidate
                {...{
                    className: 'Email',
                    action: EMAIL_ACTION,
                    method: 'post',
                    target: '_blank'
                }}
            >
                <input
                    required
                    {...{
                        className: 'Email__input',
                        id: EMAIL_ID,
                        name: EMAIL_NAME,
                        type: 'email',
                        defaultValue: '',
                        placeholder: 'email address',
                        autoComplete: 'off',
                        ref: this.emailInput,
                        onFocus: this.onFocus
                    }}
                />
                {/* Honeypot field to prevent form bot signups. */}
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
                        className: 'Email__button',
                        type: 'submit',
                        value: 'Sign up',
                        onClick: this.onClick
                    }}
                />
            </form>
        )
    }
}

export default Email
