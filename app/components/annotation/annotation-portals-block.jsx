import React from 'react'
import AnnotationCard from './annotation-card'
import TextBlock from '../text/text-block'
import TextUnit from '../text/text-unit'

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
    songs,
    selectedDotKeys,
    portalLinks,
    onPortalClick,
    sectionAccessHighlighted,
    accessedPopupAnchorIndex

}) => (
    <div className="portals-block">
        {portalLinks.map((portalObject, index) => {
            const { portalIndex,
                    songIndex,
                    annotationIndex,
                    verseIndex,
                    songTitle,
                    column,
                    columnIndex,
                    verseObject,
                    cardObject } = portalObject,

            accessHighlighted = sectionAccessHighlighted && accessedPopupAnchorIndex === portalIndex

            return (
                <div
                    key={index}
                    className="portal-block"
                >
                    <div className="song-title">{songTitle}</div>

                    <div className="verse-text">
                        <span className="text-span">"</span>
                        <TextBlock
                            inPortal={true}
                            forceForegoSpace={true}
                            text={verseObject.lyric || verseObject.centre || verseObject[column]}
                            selectedDotKeys={selectedDotKeys}
                            portalAnnotationIndex={annotationIndex}
                        />
                        <span className="text-span">"</span>
                    </div>

                    <div className="portal-card-block">
                        <a
                            className={`portal-card-button enabled${portalIndex ? ' portal-' + portalIndex : ''}${accessHighlighted ? ' access-highlighted' : ''}`}
                            onClick={e => onPortalClick(e, songIndex, annotationIndex, verseIndex, columnIndex)}
                        >
                            <AnnotationCard
                                inPortal={true}
                                inPortalCard={true}
                                songs={songs}
                                selectedDotKeys={selectedDotKeys}
                                card={cardObject}
                            />
                        </a>
                    </div>
                </div>
            )
        })}
    </div>
)

export default AnnotationPortalsBlock
