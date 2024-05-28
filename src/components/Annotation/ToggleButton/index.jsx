import React, { useRef } from 'react'
import { useSelector } from 'react-redux'
import Button from '../../Button'
import CarouselNavDispatcher from '../../../dispatchers/CarouselNav'
import { mapIsCarouselExpanded } from '../../../redux/toggle/selector'
import { mapCanCarouselNavMount } from '../../../redux/viewport/selector'
import { ANNOTATION_TOGGLE_KEY } from '../../../constants/access'
import { ANNOTATION_TOGGLE_BUTTON_KEY } from '../../../constants/buttons'

const AnnotationToggleButton = () => {
    const
        dispatchCarouselNav = useRef(),
        canCarouselNavMount = useSelector(mapCanCarouselNavMount),
        isCarouselExpanded = useSelector(mapIsCarouselExpanded)

    const handleButtonClick = () => {
        dispatchCarouselNav.current(true)
    }

    return canCarouselNavMount && (
        <>
            <Button
                {...{
                    buttonName: ANNOTATION_TOGGLE_BUTTON_KEY,
                    accessKey: ANNOTATION_TOGGLE_KEY,
                    buttonOption: isCarouselExpanded,
                    handleButtonClick,
                }}
            />
            <CarouselNavDispatcher {...{ ref: dispatchCarouselNav }} />
        </>
    )
}

export default AnnotationToggleButton
