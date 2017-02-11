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

    // From controller.
    title,

...other }) => (
    <div className="section annotation-section">
        {title && <h2 className="annotation-title">{'\u201c'}{title}{'\u201d'}</h2>}
        <div className="cards-block">
            <AnnotationUnit {...other}
            />
        </div>
    </div>
)

export default AnnotationSection
