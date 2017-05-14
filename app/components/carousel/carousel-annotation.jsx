import React from 'react'
import classnames from 'classnames'
import AnnotationSection from '../annotation/annotation-section'

/*************
 * CONTAINER *
 *************/

const CarouselAnnotation = ({

    handleLyricAnnotationSelect,

...other }) => {
    const { annotationIndex } = other,

        isSelectedAnnotation = annotationIndex === other.selectedAnnotationIndex,
        isAccessedAnnotation = annotationIndex === other.accessedAnnotationIndex,
        handleTitleClick = !isSelectedAnnotation ? e => handleLyricAnnotationSelect(e, annotationIndex, true) : null

    return (
        <CarouselAnnotationView {...other}
            isSelectedAnnotation={isSelectedAnnotation}
            isAccessedAnnotation={isAccessedAnnotation}
            handleTitleClick={handleTitleClick}
        />
    )
}

/****************
 * PRESENTATION *
 ****************/

const CarouselAnnotationView = ({

    // From props.
    annotation,
    annotationIndex,

...other }) => (

    <div className={classnames(
            'carousel-annotation',
            `carousel-annotation-${annotationIndex}`,
            annotation.dotKeys,
            { 'selected-annotation': other.isSelectedAnnotation,
              'accessed-annotation': other.isAccessedAnnotation }
        )}
    >
        <AnnotationSection {...other}
            inCarousel={true}
            popupAnnotation={annotation}
        />
    </div>
)

export default CarouselAnnotation
