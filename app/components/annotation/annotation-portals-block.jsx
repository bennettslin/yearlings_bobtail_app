import React from 'react';
import DotsBlock from '../dots/dots-block.jsx';

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
    portalLinks,
    onPortalClick

}) => (

    <div className="portals-block">
        <DotsBlock
            dotKeys={{ portal: true }}
            interactable={true}
        />
        {portalLinks.map((portalObject, index) => {
            const { songIndex,
                    annotationIndex,
                    songTitle,
                    annotationTitle } = portalObject;
            return (
                <a key={index}
                    className="portal-button"
                    onClick={() => onPortalClick(songIndex, annotationIndex)}>
                    <div className="song-title">{songTitle}</div>
                    <div className="annotation-title">{annotationTitle}</div>
                </a>
            );
        })}
    </div>
);

export default AnnotationPortalsBlock;
