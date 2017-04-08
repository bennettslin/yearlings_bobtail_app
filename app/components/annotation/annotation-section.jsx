import React from 'react'
import AnnotationUnit from './annotation-unit'
import { DOT_STANZA_CONSTANT } from '../../helpers/constants'

/*************
 * CONTAINER *
 *************/

const AnnotationSection = (props) => {

    const { annotation } = props

    return annotation ? (
        <AnnotationSectionView {...props}
            title={annotation.title}
        />
    ) : null
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
        {title !== DOT_STANZA_CONSTANT && (
            <h2 className="annotation-title">
                {'\u201c'}{title}{'\u201d'}
            </h2>
        )}
        <div className="cards-block">
            <AnnotationUnit {...other}
            />
        </div>
    </div>
)

export default AnnotationSection
