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
    handlePortalClick

}) => (

    <div className="portals-block">
        {portalObjects.map((portalObject, index) => {
            return (
                <a key={index}
                    className="portal-button"
                    onClick={() => handlePortalClick(portalObject.songIndex, portalObject.annotationIndex)}>
                    <div className="song-title">{portalObject.songTitle}</div>
                    <div className="annotation-title">{portalObject.annotationTitle}</div>
                </a>
            );
        })}
    </div>

);

export default AnnotationPortalsBlock;