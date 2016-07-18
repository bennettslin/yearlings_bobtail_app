import React from 'react';
import AnnotationCard from './annotation-card.jsx';
import { ALL_DOT_KEYS } from '../../constants/constants.js';

/*************
 * CONTAINER *
 *************/

const AnnotationSection = (props) => {

    const { annotationObject } = props,

        title = annotationObject.title,
        dotKeys = ALL_DOT_KEYS.filter(dotKey => {
            return annotationObject.dotKeys[dotKey];
        });

    return (
        <AnnotationSectionView {...props}
            title={title}
            dotKeys={dotKeys}
        />
    );
};

/****************
 * PRESENTATION *
 ****************/

const AnnotationSectionView = ({

    // From props.
    inPopup,
    annotationObject,
    portalObjects,
    onPortalClick,
    onUrlClick,

    // From controller.
    title,
    dotKeys

}) => (

    <div className={'section annotation-section' + (inPopup ? ' in-popup' : '')}>
        <h2>{title}</h2>
        <div className="annotation-cards">
            <div className="cards-block">
                {dotKeys.map((dotKey, index) => {
                    return (
                        <AnnotationCard
                            key={index}
                            dotKey={dotKey}
                            annotationObject={annotationObject}
                            portalObjects={portalObjects}
                            onPortalClick={onPortalClick}
                            onUrlClick={onUrlClick}
                        />
                    );
                })}
            </div>
        </div>
    </div>
);

export default AnnotationSection;