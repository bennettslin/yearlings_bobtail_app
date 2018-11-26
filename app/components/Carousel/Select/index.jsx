import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import Button from '../../Button'

import {
    ARROW_LEFT,
    ARROW_RIGHT
} from 'constants/access'

import {
    LEFT,
    RIGHT
} from 'constants/lyrics'

import { CAROUSEL_SELECT_BUTTON_KEY } from 'constants/buttons'

class CarouselSelect extends PureComponent {

    static propTypes = {
        handleAnnotationSelect: PropTypes.func.isRequired
    }

    _handleAnnotationPrevious = (e) => {
        this.props.handleAnnotationSelect(e, -1)
    }

    _handleAnnotationNext = (e) => {
        this.props.handleAnnotationSelect(e, 1)
    }

    render() {
        return (
            <div className="CarouselSelect">
                <Button
                    isLargeSize
                    {...{
                        buttonName: CAROUSEL_SELECT_BUTTON_KEY,
                        buttonIdentifier: LEFT,
                        accessKey: ARROW_LEFT,
                        handleButtonClick: this._handleAnnotationPrevious
                    }}
                />
                <Button
                    isLargeSize
                    {...{
                        buttonName: CAROUSEL_SELECT_BUTTON_KEY,
                        buttonIdentifier: RIGHT,
                        accessKey: ARROW_RIGHT,
                        handleButtonClick: this._handleAnnotationNext
                    }}
                />
            </div>
        )
    }
}

export default CarouselSelect
