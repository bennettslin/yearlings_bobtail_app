import React from 'react'
import AnnotationCard from './annotation-card'

/*************
 * CONTAINER *
 *************/

const AnnotationUnit = (props) => {

    const { popupAnnotation } = props,
        carouselAnnotationIndex = popupAnnotation.annotationIndex

    if (Array.isArray(popupAnnotation.cards)) {
        return (
            <AnnotationUnitView {...props}
                carouselAnnotationIndex={carouselAnnotationIndex}
            />
        )
    } else {
        return (
            <AnnotationCard {...props}
                card={popupAnnotation.cards}
                carouselAnnotationIndex={carouselAnnotationIndex}
            />
        )
    }
}

/****************
 * PRESENTATION *
 ****************/

const AnnotationUnitView = ({

    // From props.
    popupAnnotation,

...other }) => (
    <div className="annotation-cards-block">
        {popupAnnotation.cards.map((card, index) => (
            <AnnotationCard {...other}
                key={index}
                card={card}
            />
        ))}
    </div>
)

export default AnnotationUnit
