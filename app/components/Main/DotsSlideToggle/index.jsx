// Button to toggle dots slide.

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import DotsSlideDispatcher from '../../../handlers/DotsSlide/Dispatcher'
import Button from '../../Button'
import TipsHand from '../../Tips/Hand'

import { populateRefs } from '../../../helpers/ref'

import { DOTS_SLIDE_TOGGLE_KEY } from '../../../constants/access'
import { DOTS_SLIDE_BUTTON_KEY } from '../../../constants/buttons'
import {
    DOTS,
    WORMHOLES,
    WIKI
} from '../../../constants/tips'

class DotsSlideToggle extends PureComponent {

    static propTypes = {
        // From parent.
        className: PropTypes.string
    }

    handleButtonClick = () => {
        this.dispatchDotsSlide()
    }

    _getRefs = payload => {
        populateRefs(this, payload)
    }

    render() {
        const { className } = this.props

        return (
            <div
                {...{
                    className: cx(
                        'DotsSlideToggle',
                        className
                    )
                }}
            >
                <Button
                    isLargeSize
                    {...{
                        buttonName: DOTS_SLIDE_BUTTON_KEY,
                        accessKey: DOTS_SLIDE_TOGGLE_KEY,
                        handleButtonClick: this.handleButtonClick
                    }}
                />
                <TipsHand {...{ tipType: DOTS }} />
                <TipsHand isPointedAtDots {...{ tipType: WORMHOLES }} />
                <TipsHand isPointedAtDots {...{ tipType: WIKI }} />
                <DotsSlideDispatcher {...{ getRefs: this._getRefs }} />
            </div>
        )
    }
}

export default DotsSlideToggle
