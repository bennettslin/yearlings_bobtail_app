import React from 'react';
import AnnotationCard from './annotation-card.jsx';

/*************
 * CONTAINER *
 *************/

const AnnotationUnit = (props) => {

    const { annotationObject } = props;

    console.log('annotation object', annotationObject);

    if (Array.isArray(annotationObject.cards)) {
        console.log('cards is an array');
        return (
            <AnnotationUnitView {...props} />
        );
    } else {
        console.log('cards is object');
        return (
            <AnnotationCard {...props}
                annotationObject={annotationObject.cards}
            />
        );
    }
};

/****************
 * PRESENTATION *
 ****************/

 const AnnotationUnitView = ({
     annotationObject
 }) => (
     <div className="annotation-cards-block">
          {annotationObject.cards.map((annotation, index) => {
              return (
                  <AnnotationCard
                      key={index}
                      annotationObject={annotation}
                  />
              );
          })}
     </div>
 );

export default AnnotationUnit;
