import React from 'react'
import PropTypes from 'prop-types'
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

AnnotationUnit.propTypes = {
    popupAnnotation: PropTypes.object.isRequired
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

AnnotationUnitView.propTypes = {
    popupAnnotation: PropTypes.object.isRequired
}

export default AnnotationUnit
