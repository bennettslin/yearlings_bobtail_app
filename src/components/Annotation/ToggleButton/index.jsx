import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import Button from '../../Button'
import CarouselNavDispatcher from '../../../dispatchers/CarouselNav'
import { mapIsCarouselExpanded } from '../../../redux/toggle/selector'
import { mapCanCarouselNavMount } from '../../../redux/viewport/selector'
import { ANNOTATION_TOGGLE_KEY } from '../../../constants/access'
import { ANNOTATION_TOGGLE_BUTTON_KEY } from '../../../constants/buttons'

const AnnotationToggleButton = ({ isSelected }) => {
    const
        dispatchCarouselNav = useRef(),
        canCarouselNavMount = useSelector(mapCanCarouselNavMount),
        isCarouselExpanded = useSelector(mapIsCarouselExpanded)

    const handleButtonClick = () => {
        dispatchCarouselNav.current(true)
    }

    return canCarouselNavMount && isSelected && (
        <>
            <Button
                isSmallSize
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

AnnotationToggleButton.propTypes = {
    isSelected: PropTypes.bool.isRequired,
}

export default AnnotationToggleButton
