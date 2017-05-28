import React from 'react'
import PropTypes from 'prop-types'
import AnnotationCard from './annotation-card'

/*************
 * CONTAINER *
 *************/

const AnnotationUnit = (props) => {

    const { annotationObject } = props,
        carouselAnnotationIndex = annotationObject.annotationIndex

    if (Array.isArray(annotationObject.cards)) {
        return (
            <AnnotationUnitView {...props}
                carouselAnnotationIndex={carouselAnnotationIndex}
            />
        )
    } else {
        return (
            <AnnotationCard {...props}
                card={annotationObject.cards}
                carouselAnnotationIndex={carouselAnnotationIndex}
            />
        )
    }
}

AnnotationUnit.propTypes = {
    annotationObject: PropTypes.object.isRequired
}

/****************
 * PRESENTATION *
 ****************/

const AnnotationUnitView = ({

    // From props.
    annotationObject,

...other }) => (
    <div className="annotation-cards-block">
        {annotationObject.cards.map((card, index) => (
            <AnnotationCard {...other}
                key={index}
                card={card}
            />
        ))}
    </div>
)

AnnotationUnitView.propTypes = {
    annotationObject: PropTypes.object.isRequired
}

export default AnnotationUnit
