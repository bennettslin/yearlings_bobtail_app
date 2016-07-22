import React, { Component } from 'react';
import AnnotationUnit from './annotation-unit.jsx';
// import AnnotationPortalsBlock from './annotation-portals-block.jsx';

/*************
 * CONTAINER *
 *************/

const AnnotationSection = (props) => {

    const { annotation } = props;

    return (
        <AnnotationSectionView {...props}
            title={annotation.title}
        />
    );
};

/****************
 * PRESENTATION *
 ****************/

const AnnotationSectionView = ({

    // From props.
    inPopup,

    // FIXME: Passing songs only because it's needed for portal links. Is there a better way?
    songs,
    annotation,
    onWikiUrlClick,
    onPortalClick,

    // From controller.
    title

}) => (

    <div className={`section annotation-section${inPopup ? ' in-popup' : ''}`}>
        <h2>{title}</h2>
        <div className="cards-block">
            <AnnotationUnit
                songs={songs}
                annotation={annotation}
                onWikiUrlClick={onWikiUrlClick}
                onPortalClick={onPortalClick}
            />
        </div>
    </div>
);

export default AnnotationSection;
