import React from 'react';
import AnnotationUnit from './annotation-unit.jsx';
import AnnotationPortalsBlock from './annotation-portals-block.jsx';

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
    annotation,
    portalLinks,
    onPortalClick,
    onWikiUrlClick,

    // From controller.
    title

}) => (

    <div className={'section annotation-section' + (inPopup ? ' in-popup' : '')}>
        <h2>{title}</h2>
        <div className="cards-block">
            <AnnotationUnit
                annotation={annotation}
                onWikiUrlClick={onWikiUrlClick}
            />
        </div>
        {portalLinks ?
            <AnnotationPortalsBlock
                portalLinks={portalLinks}
                onPortalClick={onPortalClick}
            /> : null
        }
    </div>
);

export default AnnotationSection;
