import React from 'react'
import classnames from 'classnames'
import AnnotationUnit from './annotation-unit'
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
    isSelectedAnnotation,
    handleTitleClick,

    // From controller.
    title,

...other }) => (
    <div className="section annotation-section">
        {title !== DOT_STANZA_CONSTANT && (

            inCarousel ?
                <div
                    className="carousel-annotation-title"
                    onClick={handleTitleClick}
                >
                    <a className={classnames(
                        'annotation-title',
                        'anchor-block',
                        { 'selected': isSelectedAnnotation }
                    )}>
                        <span className="underline-bar"></span>
                        <span className="text-span">{`\u201c${title}\u201d`}</span>
                    </a>
                </div> :

                <h2 className="annotation-title">
                    {`\u201c${title}\u201d`}
                </h2>
        )}
        {title === DOT_STANZA_CONSTANT && (
            <div className={classnames(
                'dot',
                other.popupAnnotation.dotKeys
            )}></div>
        )}
        <div className="cards-block">
            <AnnotationUnit {...other}
            />
        </div>
    </div>
)

export default AnnotationSection
