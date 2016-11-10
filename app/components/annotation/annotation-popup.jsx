import React from 'react'
import Popup from '../superclasses/popup'
import AnnotationSection from './annotation-section'

const defaultProps = {
    annotation: null,
    onCloseClick() {}
}

class AnnotationPopup extends Popup {

    getClassName() {
        return 'annotation'
    }

    getContentElement(sectionAccessHighlighted) {
        return this.props.annotation ?
            <AnnotationSection {...this.props}
                inPopup={true}
                sectionAccessHighlighted={sectionAccessHighlighted}
            /> : null
    }
}

AnnotationPopup.defaultProps = defaultProps
export default AnnotationPopup
