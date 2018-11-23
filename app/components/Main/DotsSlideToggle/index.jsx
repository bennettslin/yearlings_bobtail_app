// Button to toggle dots slide.

import React, { Component, Fragment as ___ } from 'react'
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

    setDotsSlideDispatch = (dispatch) => {
        this.dispatchDotsSlide = dispatch
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
                            handleButtonClick: this.handleButtonClick
                        }}
                    />
                </div>
                <DotsSlideDispatcher
                    {...{ getDispatch: this.setDotsSlideDispatch }}
                />
            </___>
        )
    }
}

export default DotsSlideToggle
