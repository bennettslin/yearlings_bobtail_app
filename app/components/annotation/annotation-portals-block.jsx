import React from 'react'
import AnnotationCard from './annotation-card'
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
                    songTitle,
                    column,
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
                        <TextBlock
                            inPortal={true}
                            text={column ? verseObject[column] : verseObject.lyric}
                        />
                    </div>

                    <div className="portal-card-block">
                        <a
                            className={`portal-card-button enabled${portalIndex ? ' portal-' + portalIndex : ''}${accessHighlighted ? ' access-highlighted' : ''}`}
                            onClick={e => onPortalClick(e, songIndex, annotationIndex)}
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
