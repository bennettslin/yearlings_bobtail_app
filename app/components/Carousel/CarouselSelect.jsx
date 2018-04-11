import React from 'react'
import PropTypes from 'prop-types'
// import cx from 'classnames'

import Button from '../Button/Button'
import { NAVIGATION_LEFT_KEY,
         NAVIGATION_RIGHT_KEY } from '../../constants/access'

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
            buttonName="carouselSelect"
            accessKey={NAVIGATION_LEFT_KEY}
            iconText={'\u276e'}
            isLarge
            handleClick={handleAnnotationPrevious}
        />
        <Button
            buttonName="carouselSelect"
            accessKey={NAVIGATION_RIGHT_KEY}
            iconText={'\u276f'}
            isLarge
            handleClick={handleAnnotationNext}
        />
    </div>
)

CarouselSelect.propTypes = carouselSelectPropTypes

export default CarouselSelect
