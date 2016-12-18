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
    onPortalClick,
    sectionAccessHighlighted,
    accessedPopupAnchorIndex

}) => (
    <div className="portals-block">
        {portalLinks.map((portalObject, index) => {
            const { portalIndex,
                    portalsIndex,
                    songTitle,
                    annotationTitle } = portalObject,

            accessHighlighted = sectionAccessHighlighted && accessedPopupAnchorIndex === portalIndex

            return (
                <a key={index}
                    className={`portal-button enabled${portalIndex ? ' portal-' + portalIndex : ''}${accessHighlighted ? ' access-highlighted' : ''}`}
                    onClick={e => onPortalClick(e, portalsIndex)}>
                    <div className="song-title">{songTitle}</div>
                    <div className="annotation-title">{annotationTitle}</div>
                </a>
            )
        })}
    </div>
)

export default AnnotationPortalsBlock
