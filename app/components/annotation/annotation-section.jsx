import React from 'react'
import AnnotationUnit from './annotation-unit'
import { ANNOTATION_SECTION } from 'helpers/constants'

/*************
 * CONTAINER *
 *************/

const AnnotationSection = ({

    annotation,
    accessedOn,
    accessedSectionKey,

...other }) => {

    const sectionAccessHighlighted = accessedOn && accessedSectionKey === ANNOTATION_SECTION

    return (
        <AnnotationSectionView {...other}
            annotation={annotation}
            title={annotation.title}
            sectionAccessHighlighted={sectionAccessHighlighted}
        />
    )
}

/****************
 * PRESENTATION *
 ****************/

const AnnotationSectionView = ({

    // From props.
    inPopup,

    // From controller.
    title,
    sectionAccessHighlighted,

...other }) => (
    <div className={`section annotation-section${inPopup ? ' in-popup' : ''}${sectionAccessHighlighted ? ' access-highlighted' : ''}`}>
        <h2>{title}</h2>
        <div className="cards-block">
            <AnnotationUnit {...other}
            />
        </div>
    </div>
)

export default AnnotationSection
