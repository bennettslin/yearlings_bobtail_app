import React from 'react'
import PropTypes from 'prop-types'
// import cx from 'classnames'

import Button from '../Button'
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
            buttonName={CAROUSEL_SELECT_BUTTON_KEY}
            isLargeSize
            buttonIdentifier={LEFT}
            accessKey={ARROW_LEFT}
            handleButtonClick={handleAnnotationPrevious}
        />
        <Button
            buttonName={CAROUSEL_SELECT_BUTTON_KEY}
            isLargeSize
            buttonIdentifier={RIGHT}
            accessKey={ARROW_RIGHT}
            handleButtonClick={handleAnnotationNext}
        />
    </div>
)

CarouselSelect.propTypes = carouselSelectPropTypes

export default CarouselSelect
