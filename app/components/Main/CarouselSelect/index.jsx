import React, { PureComponent } from 'react'
// import PropTypes from 'prop-types'

import AnnotationDispatcher from '../../../handlers/Annotation/Dispatcher'
import Button from '../../Button'

import { populateRefs } from 'helpers/ref'

import {
    ARROW_LEFT,
    ARROW_RIGHT
} from 'constants/access'

import {
    CAROUSEL_PREVIOUS_BUTTON_KEY,
    CAROUSEL_NEXT_BUTTON_KEY
} from 'constants/buttons'

class CarouselSelect extends PureComponent {

    _handleAnnotationPrevious = () => {
        this.dispatchAnnotationDirection(-1)
    }

    _handleAnnotationNext = () => {
        this.dispatchAnnotationDirection(1)
    }

    _getRefs = (payload) => {
        populateRefs(this, payload)
    }

    render() {
        return (
            <div className="CarouselSelect">
                <Button
                    isLargeSize
                    {...{
                        buttonName: CAROUSEL_PREVIOUS_BUTTON_KEY,
                        accessKey: ARROW_LEFT,
                        handleButtonClick: this._handleAnnotationPrevious
                    }}
                />
                <Button
                    isLargeSize
                    {...{
                        buttonName: CAROUSEL_NEXT_BUTTON_KEY,
                        accessKey: ARROW_RIGHT,
                        handleButtonClick: this._handleAnnotationNext
                    }}
                />
                <AnnotationDispatcher {...{ getRefs: this._getRefs }} />
            </div>
        )
    }
}

export default CarouselSelect
