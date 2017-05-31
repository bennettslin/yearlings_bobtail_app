import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames';
import TextBlock from '../text/text-block'
import DotButton from '../dot/dot-button'
import { PORTAL } from '../../constants/dots'
import { LYRIC, CENTRE } from '../../constants/lyrics'

/*************
 * CONTAINER *
 *************/

const AnnotationPortalsBlock = (props) => (
    <AnnotationPortalsBlockView {...props} />
)

AnnotationPortalsBlock.propTypes = {
    portalLinks: PropTypes.array.isRequired,
    accessedAnnotationAnchorIndex: PropTypes.number.isRequired,
    handleAnnotationPortalSelect: PropTypes.func.isRequired
}

/****************
 * PRESENTATION *
 ****************/

const AnnotationPortalsBlockView = ({

    // From props.
    portalLinks,
    accessedAnnotationAnchorIndex,
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

                accessHighlighted = accessedAnnotationAnchorIndex === portalIndex,

                handleClick = e => handleAnnotationPortalSelect(e, songIndex, annotationIndex, verseIndex, columnIndex)

            return (
                <div
                    key={index}
                    className={classnames(
                        'portal-block',
                        'anchor-block',
                        'dot-anchor-block',
                        { 'access-highlighted': accessHighlighted }
                    )}
                >
                    <div className="portal-column button-portal-column">
                        <DotButton
                            dotKey={PORTAL}
                            handleDotButtonClick={handleClick}
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
                                text={verseObject[LYRIC] || verseObject[CENTRE] || verseObject[column]}
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
