// Toggle button to show and hide title section.

import React, { PureComponent } from 'react'
import cx from 'classnames'

import AboutDispatcher from '../../../dispatchers/About'
import Button from '../../Button'

import { populateRefs } from 'helpers/ref'

import { ABOUT_TOGGLE_KEY } from 'constants/access'
import { ABOUT_BUTTON_KEY } from 'constants/buttons'

class AboutToggle extends PureComponent {

    _handleButtonClick = () => {
        this.dispatchAbout()
    }

    _getRefs = (payload) => {
        populateRefs(this, payload)
    }

    render() {
        return (
            <div className={cx(
                'AboutToggle'
            )}>
                <Button
                    isCustomSize
                    buttonName={ABOUT_BUTTON_KEY}
                    accessKey={ABOUT_TOGGLE_KEY}
                    handleButtonClick={this._handleButtonClick}
                />
                <AboutDispatcher {...{ getRefs: this._getRefs }} />
            </div>
        )
    }
}

export default AboutToggle
