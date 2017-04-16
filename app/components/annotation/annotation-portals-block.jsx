import React from 'react'
import TextBlock from '../text/text-block'

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
    annotationDotKeys,
    portalLinks,
    handleAnnotationPortalSelect,

}) => (
    <div className="portals-block">
        {portalLinks.map((portalObject, index) => {
            const { songIndex,
                    annotationIndex,
                    verseIndex,
                    songTitle,
                    column,
                    columnIndex,

                    // Default if no portal prefix.
                    portalPrefix = 'portal to',

                    verseObject } = portalObject,

                handleClick = e => handleAnnotationPortalSelect(e, songIndex, annotationIndex, verseIndex, columnIndex)

            return (
                <div
                    key={index}
                    className="portal-block"
                    onClick={handleClick}
                >
                    <div className="song-title">
                        {portalPrefix} <strong>{songTitle}</strong>
                    </div>

                    <div className="verse-text">
                        <span className="text-span">{'\u201c'}</span>
                        <TextBlock
                            inPortal={true}
                            text={verseObject.lyric || verseObject.centre || verseObject[column]}
                            selectedDotKeys={annotationDotKeys}
                            portalAnnotationIndex={annotationIndex}
                        />
                        <span className="text-span">{'\u201d'}</span>
                    </div>
                </div>
            )
        })}
    </div>
)

export default AnnotationPortalsBlock
