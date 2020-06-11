import React, { useRef } from 'react'
import { useSelector } from 'react-redux'
import AnnotationDispatcher from '../../../handlers/Annotation/Dispatcher'
import Button from '../../Button'
import {
    ARROW_LEFT,
    ARROW_RIGHT
} from '../../../constants/access'
import {
    CAROUSEL_PREVIOUS_BUTTON_KEY,
    CAROUSEL_NEXT_BUTTON_KEY
} from '../../../constants/buttons'
import { mapCanCarouselMount } from '../../../redux/viewport/selectors'
import './style'

const CarouselSelect = () => {
    const
        dispatchAnnotation = useRef(),
        canCarouselMount = useSelector(mapCanCarouselMount)

    const handlePreviousClick = () => {
        dispatchAnnotation.current.dispatchAnnotationDirection(-1)
    }

    const handleNextClick = () => {
        dispatchAnnotation.current.dispatchAnnotationDirection(1)
    }

    return canCarouselMount && (
        <div className="CarouselSelect">
            <Button
                isLargeSize
                {...{
                    buttonName: CAROUSEL_PREVIOUS_BUTTON_KEY,
                    accessKey: ARROW_LEFT,
                    handleButtonClick: handlePreviousClick
                }}
            />
            <Button
                isLargeSize
                {...{
                    buttonName: CAROUSEL_NEXT_BUTTON_KEY,
                    accessKey: ARROW_RIGHT,
                    handleButtonClick: handleNextClick
                }}
            />
            <AnnotationDispatcher {...{ ref: dispatchAnnotation }} />
        </div>
    )
}

export default CarouselSelect
