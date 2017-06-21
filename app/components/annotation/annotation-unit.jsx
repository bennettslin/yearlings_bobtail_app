// Component to show all notes and portals for each annotation.

import React from 'react'
import PropTypes from 'prop-types'
import AnnotationCard from './annotation-card'

const AnnotationUnit = ({

    annotationObject,

...other }) => {

    // TODO: Can this just get the annotation object directly from state?
    const { annotationIndex } = annotationObject

    return (
        <div className="annotation-cards-block">
            {annotationObject.cards.map((card, index) => (
                <AnnotationCard {...other}
                    key={index}
                    card={card}
                    carouselAnnotationIndex={annotationIndex}
                />
            ))}
        </div>
    )
}

AnnotationUnit.propTypes = {
    // From parent.
    annotationObject: PropTypes.object.isRequired
}

export default AnnotationUnit
