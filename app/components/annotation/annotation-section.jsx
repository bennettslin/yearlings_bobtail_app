// Section to show title and all notes and portals for each annotation.

import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import AnnotationUnit from './annotation-unit'
import DotAnchorBlock from '../dot/dot-anchor-block'
import { IS_DOT_STANZA } from '../../constants/lyrics'

/*************
 * CONTAINER *
 *************/

const AnnotationSection = (props) => {

    const { annotationObject } = props

    // If it's in popup, annotation object won't always exist.
    return annotationObject ? (
        <AnnotationSectionView {...props}
            annotationTitle={annotationObject.title}
            annotationDotKeys={annotationObject.dotKeys}
        />
    ) : null
}

AnnotationSection.propTypes = {
    // From parent.
    annotationObject: PropTypes.object
}

/****************
 * PRESENTATION *
 ****************/

const AnnotationSectionView = ({

    // From props.
    inCarousel,
    isAccessedAnnotation,
    isSelectedAnnotation,
    handleTitleClick,

    // From controller.
    annotationTitle,
    annotationDotKeys,

...other }) => {

    // Show as selected if it's selected in carousel, or if it's in popup.
    const showAsSelected = isSelectedAnnotation || !inCarousel

    return (
        <div className={classnames(
            'section',
            'annotation-section',
            { 'selected-annotation': showAsSelected,
              'accessed-annotation': isAccessedAnnotation }
        )}>
            <div className="annotation-title-block">
                {annotationTitle === IS_DOT_STANZA ? (
                    <div className="annotation-title">
                        <DotAnchorBlock
                            isSmall={true}
                            isSelected={showAsSelected}
                            accessHighlighted={isAccessedAnnotation}
                            dotKeys={annotationDotKeys}
                            handleDotButtonClick={handleTitleClick}
                        />
                    </div>
                ) : (
                    <a className={classnames(
                            'anchor-block',
                            'text-anchor-block',
                            'annotation-title',
                            annotationDotKeys,
                            { 'selected': showAsSelected,
                              'access-highlighted': isAccessedAnnotation }
                        )}
                        onClick={handleTitleClick}
                    >
                        <span className="underline-bar" />
                        <span className="text-span">
                            {`\u201c${annotationTitle}\u201d`}
                        </span>
                    </a>
                )}
            </div>
            <div className="cards-block">
                <AnnotationUnit {...other} />
            </div>
        </div>
    )
}

AnnotationSectionView.propTypes = {
    // From parent.
    inCarousel: PropTypes.bool,
    isAccessedAnnotation: PropTypes.bool,
    isSelectedAnnotation: PropTypes.bool,
    annotationTitle: PropTypes.string.isRequired,
    annotationDotKeys: PropTypes.object.isRequired,
    handleTitleClick: PropTypes.func
}

export default AnnotationSection
