import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import AnnotationUnit from './annotation-unit'
import DotAnchorBlock from '../dot/dot-anchor-block'
import { DOT_STANZA_CONSTANT } from '../../helpers/constants'

/*************
 * CONTAINER *
 *************/

const AnnotationSection = (props) => {

    const { popupAnnotation } = props

    return popupAnnotation ? (
        <AnnotationSectionView {...props}
            title={popupAnnotation.title}
        />
    ) : null
}

AnnotationSection.propTypes = {
    popupAnnotation: PropTypes.object
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
    title,

...other }) => (
    <div className={classnames(
        'section',
        'annotation-section',
        { 'selected-annotation': isSelectedAnnotation,
          'accessed-annotation': isAccessedAnnotation }
    )}>
        <div className="annotation-title-block">
            {title === DOT_STANZA_CONSTANT ? (
                <div className="annotation-title">
                    <DotAnchorBlock
                        isSmall={true}
                        isSelected={isSelectedAnnotation}
                        accessHighlighted={isAccessedAnnotation}
                        dotKeys={other.popupAnnotation.dotKeys}
                        handleDotButtonClick={handleTitleClick}
                    />
                </div>
            ) : (
                <a className={classnames(
                        'anchor-block',
                        'text-anchor-block',
                        'annotation-title',
                        other.popupAnnotation.dotKeys,
                        { 'selected': inCarousel ? isSelectedAnnotation : true,
                          'access-highlighted': isAccessedAnnotation }
                    )}
                    onClick={handleTitleClick}
                >
                    <span className="underline-bar"></span>
                    <span className="text-span">{`\u201c${title}\u201d`}</span>
                </a>
            )}
        </div>
        <div className="cards-block">
            <AnnotationUnit {...other}
            />
        </div>
    </div>
)

AnnotationSectionView.propTypes = {
    title: PropTypes.string.isRequired,
    inCarousel: PropTypes.bool,
    isAccessedAnnotation: PropTypes.bool,
    isSelectedAnnotation: PropTypes.bool,
    handleTitleClick: PropTypes.func
}

export default AnnotationSection
