import React from 'react';
import AnnotationUnit from './annotation-unit.jsx';
import { ALL_DOT_KEYS } from '../../helpers/constants.js';

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
    portalObjects, // FIXME: Portal objects will also need to be separated by individual card.
    onPortalClick,
    onWikiUrlClick,

    // From controller.
    title,
    dotKeys

}) => (

    <div className={'section annotation-section' + (inPopup ? ' in-popup' : '')}>
        <h2>{title}</h2>
        <div className="cards-block">
            <AnnotationUnit
                dotKeys={dotKeys}
                annotationObject={annotationObject}
                portalObjects={portalObjects}
                onPortalClick={onPortalClick}
                onWikiUrlClick={onWikiUrlClick}
            />
        </div>
    </div>
);

export default AnnotationSection;
