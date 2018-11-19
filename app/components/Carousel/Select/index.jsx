import React from 'react'
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

const carouselSelectPropTypes = {
    handleAnnotationPrevious: PropTypes.func.isRequired,
    handleAnnotationNext: PropTypes.func.isRequired
}

const CarouselSelect = ({

    handleAnnotationPrevious,
    handleAnnotationNext

}) => (
    <div className="CarouselSelect">
        <Button
            isLargeSize
            {...{
                buttonName: CAROUSEL_SELECT_BUTTON_KEY,
                buttonIdentifier: LEFT,
                accessKey: ARROW_LEFT,
                handleButtonClick: handleAnnotationPrevious
            }}
        />
        <Button
            isLargeSize
            {...{
                buttonName: CAROUSEL_SELECT_BUTTON_KEY,
                buttonIdentifier: RIGHT,
                accessKey: ARROW_RIGHT,
                handleButtonClick: handleAnnotationNext
            }}
        />
    </div>
)

CarouselSelect.propTypes = carouselSelectPropTypes

export default CarouselSelect
