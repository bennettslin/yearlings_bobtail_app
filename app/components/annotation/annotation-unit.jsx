import React, { Component } from 'react';
import AnnotationCard from './annotation-card.jsx';

/*************
 * CONTAINER *
 *************/

const AnnotationUnit = (props) => {

    const { annotation } = props;

    if (Array.isArray(annotation.cards)) {
        return (
            <AnnotationUnitView {...props} />
        );
    } else {
        return (
            <AnnotationCard {...props}
                card={annotation.cards}
            />
        );
    }
};

/****************
 * PRESENTATION *
 ****************/

 const AnnotationUnitView = ({
     annotation,
     songs
 }) => (
     <div className="annotation-cards-block">
          {annotation.cards.map((card, index) => {
              return (
                  <AnnotationCard
                      key={index}
                      card={card}
                      songs={songs}
                  />
              );
          })}
     </div>
 );

export default AnnotationUnit;
