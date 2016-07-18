import React from 'react';
import Popup from '../../superclasses/popup.jsx';
import AnnotationSection from './annotation-section.jsx';

const defaultProps = {
    annotationObject: null,
    onCloseClick() {}
}

class AnnotationPopup extends Popup {

    getClassName() {
        return 'annotation';
    }

    getContentElement() {
        return this.props.annotationObject ?
            <AnnotationSection {...this.props}
                inPopup={true}
            /> : null;
    }
}

AnnotationPopup.defaultProps = defaultProps;
export default AnnotationPopup;