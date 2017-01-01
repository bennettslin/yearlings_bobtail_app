import React from 'react'
import AnnotationUnit from './annotation-unit'

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

...other }) => (
    <div
        className={`section annotation-section${inPopup ? ' in-popup' : ''}`}
    >
        <h2>{title}</h2>
        <div className="cards-block">
            <AnnotationUnit {...other}
            />
        </div>
    </div>
)

export default AnnotationSection
