import React from 'react'
import AnnotationUnit from './annotation-unit'
import { ANNOTATION_SECTION } from 'helpers/constants'

/*************
 * CONTAINER *
 *************/

const AnnotationSection = ({

    annotation,

...other }) => {

    return (
        <AnnotationSectionView {...other}
            annotation={annotation}
            title={annotation.title}
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
    onSectionClick,

...other }) => (
    <div
        className={`section annotation-section${inPopup ? ' in-popup' : ''}`}
        onClick={onSectionClick}
    >
        <h2>{title}</h2>
        <div className="cards-block">
            <AnnotationUnit {...other}
            />
        </div>
    </div>
)

export default AnnotationSection
