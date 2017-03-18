import React from 'react'
// import AnnotationCard from './annotation-card'
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
    // songs,
    selectedDotKeys,
    portalLinks,
    handleAnnotationPortalSelect,
    // accessedPopupAnchorIndex

}) => (
    <div className="portals-block">
        {portalLinks.map((portalObject, index) => {
            const { songIndex,
                    // portalIndex,
                    annotationIndex,
                    verseIndex,
                    songTitle,
                    column,
                    columnIndex,
                    // cardObject,
                    verseObject } = portalObject,

                handleClick = e => handleAnnotationPortalSelect(e, songIndex, annotationIndex, verseIndex, columnIndex)

            // accessHighlighted = accessedPopupAnchorIndex === portalIndex

            return (
                <div
                    key={index}
                    className="portal-block enabled"
                    onClick={handleClick}
                >
                    <div className="song-title">
                        portal to <strong>{songTitle}</strong>
                    </div>

                    <div className="verse-text">
                        <span className="text-span">{'\u201c'}</span>
                        <TextBlock
                            inPortal={true}
                            text={verseObject.lyric || verseObject.centre || verseObject[column]}
                            selectedDotKeys={selectedDotKeys}
                            portalAnnotationIndex={annotationIndex}
                        />
                        <span className="text-span">{'\u201d'}</span>
                    </div>

                    {/* <div className="portal-card-block">
                        <a
                            className={`portal-card-button enabled${portalIndex ? ' portal-' + portalIndex : ''}${accessHighlighted ? ' access-highlighted' : ''}`}

                        >
                            <AnnotationCard
                                inPortal={true}
                                inPortalCard={true}
                                songs={songs}
                                selectedDotKeys={selectedDotKeys}
                                card={cardObject}
                            />
                        </a>
                    </div> */}
                </div>
            )
        })}
    </div>
)

export default AnnotationPortalsBlock
