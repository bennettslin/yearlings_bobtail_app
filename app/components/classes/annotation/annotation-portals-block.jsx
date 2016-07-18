import React from 'react';

/*************
 * CONTAINER *
 *************/

const AnnotationPortalsBlock = (props) => (
    <AnnotationPortalsBlockView {...props} />
);

/****************
 * PRESENTATION *
 ****************/

const AnnotationPortalsBlockView = ({

    // From props.
    portalObjects,
    onPortalClick

}) => (

    <div className="portals-block">
        {portalObjects.map((portalObject, index) => {
            return (
                <a key={index}
                    className="portal-button"
                    onClick={() => onPortalClick(portalObject.songIndex, portalObject.annotationIndex)}>
                    <div className="song-title">{portalObject.songTitle}</div>
                    <div className="annotation-title">{portalObject.annotationTitle}</div>
                </a>
            );
        })}
    </div>
);

export default AnnotationPortalsBlock;