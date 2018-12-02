// Button to toggle dots slide.

import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import cx from 'classnames'

import DotsSlideDispatcher from '../../../dispatchers/DotsSlideDispatcher'
import Button from '../../Button'

import { DOTS_SLIDE_TOGGLE_KEY } from 'constants/access'
import { DOTS_SLIDE_BUTTON_KEY } from 'constants/buttons'

class DotsSlideToggle extends Component {

    handleButtonClick = () => {
        this.dispatchDotsSlide()
    }

    render() {
        return (
            <div className={cx(
                'DotsSlideToggle',
                'LeftShelf__child'
            )}>
                <Button
                    isLargeSize
                    {...{
                        buttonName: DOTS_SLIDE_BUTTON_KEY,
                        accessKey: DOTS_SLIDE_TOGGLE_KEY,
                        handleButtonClick: this.handleButtonClick
                    }}
                />
                <DotsSlideDispatcher {...{ parentThis: this }} />
            </div>
        )
    }
}

export default DotsSlideToggle
