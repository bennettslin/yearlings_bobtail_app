import React, { Component } from 'react'
// import cx from 'classnames'

class Email extends Component {

    onClick() {
        console.log('click')
    }

    render() {
        return (
            <form
                noValidate
                {...{
                    className: 'Email',
                    id: 'mc-embedded-subscribe-form',
                    name: 'mc-embedded-subscribe-form',
                    action: `https://yearlingsbobtail.us4.list-manage.com/subscribe/post?u=7a9ef82a8d139c5688d0209ef&amp;id=258547592f`,
                    method: 'post',
                    target: '_blank'
                }}
            >
                <div id="mc_embed_signup_scroll">
                    <label htmlFor="mce-EMAIL">Subscribe</label>
                    <input
                        required
                        {...{
                            className: 'Email__input',
                            id: 'mce-EMAIL',
                            name: 'EMAIL',
                            type: 'email',
                            defaultValue: '',
                            placeholder: 'email address'
                        }}
                    />
                    {/* Real people should not fill this in and expect good things. Do not remove this, or risk form bot signups. */}
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
                                name: 'b_7a9ef82a8d139c5688d0209ef_258547592f',
                                type: 'text',
                                defaultValue: '',
                                tabIndex: -1
                            }}
                        />
                    </div>
                    <div>
                        <input
                            {...{
                                className: 'Email__button',
                                type: 'submit',
                                id: 'mc-embedded-subscribe',
                                name: 'subscribe',
                                value: 'Subscribe',
                                onClick: this.onClick
                            }}
                        />
                    </div>
                </div>
            </form>
        )
    }
}

export default Email
