import React from 'react'
import classnames from 'classnames';
import TextBlock from '../text/text-block'
import DotButton from '../dot/dot-button'
import { PORTAL } from '../../helpers/constants'

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
    // annotationDotKeys,
    portalLinks,
    accessedPopupAnchorIndex,
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
                    portalIndex,

                    // Default if no portal prefix.
                    portalPrefix = 'portal to',

                    verseObject } = portalObject,

                accessHighlighted = accessedPopupAnchorIndex === portalIndex,

                handleClick = e => handleAnnotationPortalSelect(e, songIndex, annotationIndex, verseIndex, columnIndex)

            return (
                <div
                    key={index}
                    className={classnames(
                        'portal-block',
                        { 'access-highlighted': accessHighlighted }
                    )}
                >
                    <div className="portal-column button-portal-column">
                        <DotButton
                            dotKey={PORTAL}
                            handlePortalDotSelect={handleClick}
                        />
                    </div>
                    <div className="portal-column text-portal-column">
                        <div className="song-title">
                            {portalPrefix} <strong>{songTitle}</strong>
                        </div>

                        <div className="verse-text">
                            <span className="text-span">{'\u201c'}</span>
                            <TextBlock
                                inPortal={true}
                                text={verseObject.lyric || verseObject.centre || verseObject[column]}
                                // selectedDotKeys={annotationDotKeys}
                                portalAnnotationIndex={annotationIndex}
                            />
                            <span className="text-span">{'\u201d'}</span>
                        </div>
                    </div>
                </div>
            )
        })}
    </div>
)

export default AnnotationPortalsBlock
