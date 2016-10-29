import React from 'react'
import AnnotationCard from './annotation-card'

/*************
 * CONTAINER *
 *************/

const AnnotationUnit = (props) => {

    const { annotation } = props

    if (Array.isArray(annotation.cards)) {
        return <AnnotationUnitView {...props} />
    } else {
        return (
            <AnnotationCard {...props}
                card={annotation.cards}
            />
        )
    }
}

/****************
 * PRESENTATION *
 ****************/

const AnnotationUnitView = ({

    // From props.
    annotation,

...other }) => (
    <div className="annotation-cards-block">
        {annotation.cards.map((card, index) => (
            <AnnotationCard
                key={index}
                card={card}
            />
        ))}
    </div>
)

export default AnnotationUnit
