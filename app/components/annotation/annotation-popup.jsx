import React from 'react'
import Popup from '../superclasses/popup'
import AnnotationSection from './annotation-section'

const defaultProps = {
    annotation: null
}

class AnnotationPopup extends Popup {

    getClassName() {
        return 'annotation'
    }

    getContentElement(sectionAccessHighlighted) {
        return this.props.annotation && !this.props.selectedWikiIndex && (
            <AnnotationSection {...this.props}
                inPopup={true}
                sectionAccessHighlighted={sectionAccessHighlighted}
            />
        )
    }
}

AnnotationPopup.defaultProps = defaultProps
export default AnnotationPopup
