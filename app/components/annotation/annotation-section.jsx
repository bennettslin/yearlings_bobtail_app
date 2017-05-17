import React from 'react'
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
    <div className="section annotation-section">

        {title === DOT_STANZA_CONSTANT ?

            <div className="annotation-title-block dot-stanza-annotation-title">
                <div className="annotation-title">
                    <DotAnchorBlock
                        isSelected={isSelectedAnnotation}
                        accessHighlighted={isAccessedAnnotation}
                        dotKeys={other.popupAnnotation.dotKeys}
                        handleDotButtonClick={handleTitleClick}
                    />
                </div>
            </div> :

            // TODO: Ideally this would use the actual AnchorBlock component.
            <div className="annotation-title-block" >
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
            </div>
        }

        <div className="cards-block">
            <AnnotationUnit {...other}
            />
        </div>
    </div>
)

export default AnnotationSection
