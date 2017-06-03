import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import TextBlock from './text-block'
import DotBlock from '../dot/dot-block'

/*************
 * CONTAINER *
 *************/

const TextAnchorBlock = ({

    text,
    portalAnnotationIndex,
    selectedAnnotationIndex,
    carouselAnnotationIndex,
    accessedAnnotationIndex,
    accessedAnnotationAnchorIndex,
    handleAnchorClick,

...other }) => {

    const { annotationIndex,
            anchor,
            todo,
            dotKeys: annotationDotKeys,
            wikiIndex } = text,

        isSelected = annotationIndex && annotationIndex === selectedAnnotationIndex,
        isPortalAnchor = typeof portalAnnotationIndex !== 'undefined' && portalAnnotationIndex === annotationIndex,
        accessHighlighted = ((accessedAnnotationIndex && accessedAnnotationIndex === annotationIndex) || (accessedAnnotationAnchorIndex && accessedAnnotationAnchorIndex === wikiIndex)),

        /**
         * If it's an annotation, then the argument passed to the
         * click handler is the annotation index. Otherwise, it's a
         * reference, and the argument is a url string.
         */
        handleClick = !isSelected && !other.inPortal ? e => handleAnchorClick(e, annotationIndex || wikiIndex, carouselAnnotationIndex) : null

    return (
        <TextAnchorBlockView {...other}
            hasTodo={todo}
            isSelected={isSelected}
            isPortalAnchor={isPortalAnchor}
            annotationIndex={annotationIndex}
            accessHighlighted={accessHighlighted}
            wikiIndex={wikiIndex}
            annotationDotKeys={annotationDotKeys}
            anchorText={anchor}
            handleClick={handleClick}
        />
    )
}

TextAnchorBlock.propTypes = {
    text: PropTypes.object.isRequired,
    inPortal: PropTypes.bool,
    portalAnnotationIndex: PropTypes.number,
    selectedAnnotationIndex: PropTypes.number,
    selectedWikiIndex: PropTypes.number,
    carouselAnnotationIndex: PropTypes.number,
    accessedAnnotationIndex: PropTypes.number,
    accessedAnnotationAnchorIndex: PropTypes.number,
    handleAnchorClick: PropTypes.func,
}

/****************
 * PRESENTATION *
 ****************/

const TextAnchorBlockView = ({

    // From props.
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
                'text-anchor-block',

                // inPortal is any anchor in portal.
                !isPortalAnchor && !inPortal && annotationDotKeys,
                !inPortal && annotationIndex && `annotation-${annotationIndex}`,
                wikiIndex && `wiki-${wikiIndex}`,
                { 'selected': isSelected,
                  'access-highlighted': accessHighlighted && !isSelected,
                  'portal-anchor': isPortalAnchor,
                  'reference': !!wikiIndex,
                  'todo': hasTodo }
            )}
            onClick={handleClick}
        >
            {isLyric &&
                <span className="underline-bar" />
            }
            {/* Don't show any dots in portal block. */}
            {!wikiIndex && !inPortal &&
                <DotBlock
                    inAnchor={true}
                    dotKeys={annotationDotKeys}
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

TextAnchorBlockView.propTypes = {
    inPortal: PropTypes.bool,
    firstVerseObject: PropTypes.bool,
    lastVerseObject: PropTypes.bool,
    isLyric: PropTypes.bool,
    beginsNewLine: PropTypes.bool,
    accessHighlighted: PropTypes.bool,
    hasTodo: PropTypes.bool,
    isSelected: PropTypes.bool,
    isPortalAnchor: PropTypes.bool.isRequired,
    annotationIndex: PropTypes.number,
    wikiIndex: PropTypes.number,
    annotationDotKeys: PropTypes.object,
    anchorText: PropTypes.oneOfType([
        PropTypes.string,

        // "Bobtail's words" in M is an array.
        PropTypes.array,

        // "Ubermensch" in Golden Cord is an object.
        PropTypes.object

    ]).isRequired,
    handleClick: PropTypes.func
}

export default TextAnchorBlock
