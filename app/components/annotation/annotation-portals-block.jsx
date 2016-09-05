import React from 'react'

/*************
 * CONTAINER *
 *************/

const AnnotationPortalsBlock = (props) => (
    <AnnotationPortalsBlockView {...props} />
)

/****************
 * PRESENTATION *
 ****************/

const AnnotationPortalsBlockView = ({

    // From props.
    portalLinks,
    onPortalClick

}) => (
    <div className="portals-block">
        {portalLinks.map((portalObject, index) => {
            const { songIndex,
                    annotationIndex,
                    songTitle,
                    annotationTitle } = portalObject
            return (
                <a key={index}
                    className="portal-button enabled"
                    onClick={e => onPortalClick(e, songIndex, annotationIndex)}>
                    <div className="song-title">{songTitle}</div>
                    <div className="annotation-title">{annotationTitle}</div>
                </a>
            )
        })}
    </div>
)

export default AnnotationPortalsBlock
