// Button to toggle dots slide.

import React, { Component, Fragment as ___ } from 'react'
// import PropTypes from 'prop-types'
import cx from 'classnames'

import DispatchDotsSlide from '../../../dispatchers/DispatchDotsSlide'
import Button from '../../Button'

import { DOTS_SLIDE_TOGGLE_KEY } from 'constants/access'
import { DOTS_SLIDE_BUTTON_KEY } from 'constants/buttons'

class DotsSlideToggle extends Component {

    handleDotsSlideClick = () => {
        this.tryToggleDotsSlide()
    }

    setTryToggleDotsSlide = (tryToggleDotsSlide) => {
        this.tryToggleDotsSlide = tryToggleDotsSlide
    }

    render() {
        return (
            <___>
                <div className={cx(
                    'DotsSlideToggle',
                    'LeftShelf__child'
                )}>
                    <Button
                        isLargeSize
                        {...{
                            buttonName: DOTS_SLIDE_BUTTON_KEY,
                            accessKey: DOTS_SLIDE_TOGGLE_KEY,
                            handleButtonClick: this.handleDotsSlideClick
                        }}
                    />
                </div>
                <DispatchDotsSlide
                    {...{ getTryToggleDotsSlide: this.setTryToggleDotsSlide }}
                />
            </___>
        )
    }
}

export default DotsSlideToggle
