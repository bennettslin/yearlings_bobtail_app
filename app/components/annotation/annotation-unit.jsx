// Component to show all notes and portals for each annotation.

import React from 'react'
import PropTypes from 'prop-types'
import AnnotationCard from './annotation-card'

/*************
 * CONTAINER *
 *************/

const AnnotationUnit = (props) => {

    const { annotationObject } = props,
        { annotationIndex,
          cards } = annotationObject

    if (Array.isArray(cards)) {
        return (
            <AnnotationUnitView {...props}
                carouselAnnotationIndex={annotationIndex}
            />
        )
    } else {
        return (
            <AnnotationCard {...props}
                card={cards}
                carouselAnnotationIndex={annotationIndex}
            />
        )
    }
}

AnnotationUnit.propTypes = {
    // From parent.
    annotationObject: PropTypes.object.isRequired
}

/****************
 * PRESENTATION *
 ****************/

const AnnotationUnitView = ({

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
    // From parent.
    annotationObject: PropTypes.object.isRequired
}

export default AnnotationUnit
