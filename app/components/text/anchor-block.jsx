import React from 'react'
import classnames from 'classnames'
import TextBlock from './text-block'
import DotBlock from '../dot/dots-block'
import { getIntersection } from '../../helpers/dot-helper'

/*************
 * CONTAINER *
 *************/

const AnchorBlock = ({

    text,
    portalAnnotationIndex,
    selectedAnnotationIndex,
    selectedWikiIndex,
    selectedDotKeys,
    carouselAnnotationIndex,
    accessedAnnotationIndex,
    accessedPopupAnchorIndex,
    handleAnchorClick,

...other }) => {

    const { annotationIndex,
            anchor,
            todo,
            dotKeys: annotationDotKeys,
            wikiIndex } = text,

        { showAsAnchor } = other,

        isSelected = (annotationIndex && annotationIndex === selectedAnnotationIndex) || (wikiIndex && wikiIndex === selectedWikiIndex),
        isPortalAnchor = typeof portalAnnotationIndex !== 'undefined' && portalAnnotationIndex === annotationIndex,
        shownDotKeys = getIntersection(annotationDotKeys, selectedDotKeys),
        accessHighlighted = ((accessedAnnotationIndex && accessedAnnotationIndex === annotationIndex) || (accessedPopupAnchorIndex && accessedPopupAnchorIndex === wikiIndex)),

        /**
         * If it's an annotation, then the argument passed to the
         * click handler is the annotation index. Otherwise, it's a
         * reference, and the argument is a url string.
         */
        handleClick = showAsAnchor && !isSelected && !other.inPortal &&
            (e => handleAnchorClick(e, annotationIndex || wikiIndex, carouselAnnotationIndex))

    return (
        <AnchorBlockView {...other}
            hasTodo={todo}
            isSelected={isSelected}
            isPortalAnchor={isPortalAnchor}
            annotationIndex={annotationIndex}
            accessHighlighted={accessHighlighted}
            wikiIndex={wikiIndex}
            shownDotKeys={shownDotKeys}
            annotationDotKeys={annotationDotKeys}
            anchorText={anchor}
            handleClick={handleClick}
        />
    )
}

/****************
 * PRESENTATION *
 ****************/

const AnchorBlockView = ({

    // From props.
    showAsAnchor,
    inPortal,
    firstVerseObject,
    lastVerseObject,
    isLyric,
    beginsNewLine,
    accessHighlighted,

    // From controller.
    hasTodo,
    isSelected,
    isPortalAnchor,
    annotationIndex,
    wikiIndex,
    shownDotKeys,
    annotationDotKeys,
    anchorText,
    handleClick

}) => (

    <span>
        {/* This non-anchor space negates the space that starts the text in the anchor tag. Kind of hackish, but there are no immediate solutions since two anchor tags next to each other have no other element between them. */}
        {!beginsNewLine && !firstVerseObject &&
            ' '
        }
        <a
            className={classnames(
                'anchor-block',
                annotationIndex && `annotation-${annotationIndex}`,
                wikiIndex && `wiki-${wikiIndex}`,
                showAsAnchor ? 'show-as-anchor' : 'show-as-text',
                { 'enabled': showAsAnchor && !isSelected && !inPortal,
                  'selected': isSelected,
                  'access-highlighted': accessHighlighted && !isSelected,
                  'portal-anchor': isPortalAnchor,
                  'todo': hasTodo },
                annotationDotKeys
            )}
            onClick={handleClick}
        >
            {isLyric &&
                <span className="underline-bar"></span>
            }
            {/* Don't show any dots in portal block. */}
            {/* {((shownDotKeys && !wikiIndex && !inPortal) || isPortalAnchor) && */}
            {shownDotKeys && !wikiIndex && !inPortal &&
                <DotBlock
                    inAnchor={true}
                    shownDotKeys={shownDotKeys}
                    annotationDotKeys={annotationDotKeys}
                />
            }
            {/* Only the first text span inside the anchor will forego space. */}
            <TextBlock
                isLyric={isLyric}
                text={anchorText}
                inPortal={inPortal}
                firstVerseObject={firstVerseObject}
                lastVerseObject={lastVerseObject}
                foregoSpace={true}
            />
        </a>
    </span>
)

export default AnchorBlock
