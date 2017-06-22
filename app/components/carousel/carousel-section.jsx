// Section to show all song annotations in a carousel layout.

// Component class not needed after all.
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import CarouselAnnotation from './carousel-annotation'
import Button from '../button/button'
import { getAnnotationsCount } from '../../helpers/data-helper'

const CarouselSection = ({

    isHiddenNav,
    selectedSongIndex,
    accessedAnnotationIndex,
    selectedAnnotationIndex,
    handleAnnotationPrevious,
    handleAnnotationNext,

...other }) => {

    if (isHiddenNav) {
        return null
    }

    const annotationsCount = getAnnotationsCount(selectedSongIndex),

        /**
         * Dynamically create array of just indices. Carousel annotation
         * will fetch annotation object directly from data helper.
         */
        annotationsIndices = Array.from(Array(annotationsCount).keys())

    return (
        <div className="carousel">
            <div className="carousel-scroll">
                <div className="carousel-annotations-block">
                    <div className="carousel-annotation carousel-annotation-0" />
                    {annotationsIndices.map(index => {
                        const annotationIndex = index + 1,
                            isAccessedAnnotation = annotationIndex === accessedAnnotationIndex,
                            isSelectedAnnotation = annotationIndex === selectedAnnotationIndex

                        return (
                            <CarouselAnnotation {...other}
                                key={index}
                                annotationIndex={annotationIndex}
                                isAccessedAnnotation={isAccessedAnnotation}
                                isSelectedAnnotation={isSelectedAnnotation}
                            />
                        )
                    })}
                </div>
            </div>
            <div className="carousel-nav-buttons-block">
                <Button
                    buttonName="previous-position"
                    iconText={'\u276e'}
                    isLarge={true}
                    handleClick={handleAnnotationPrevious}
                />
                <Button
                    buttonName="next-position"
                    iconText={'\u276f'}
                    isLarge={true}
                    handleClick={handleAnnotationNext}
                />
            </div>
        </div>
    )
}

CarouselSection.propTypes = {
    // Through Redux.
    isHiddenNav: PropTypes.bool.isRequired,
    selectedSongIndex: PropTypes.number.isRequired,
    accessedAnnotationIndex: PropTypes.number.isRequired,
    selectedAnnotationIndex: PropTypes.number.isRequired,

    // From parent.
    handleAnnotationPrevious: PropTypes.func.isRequired,
    handleAnnotationNext: PropTypes.func.isRequired
}

export default connect(({
    isHiddenNav,
    selectedSongIndex,
    selectedAnnotationIndex,
    accessedAnnotationIndex
}) => ({
    isHiddenNav,
    selectedSongIndex,
    selectedAnnotationIndex,
    accessedAnnotationIndex
}))(CarouselSection)
