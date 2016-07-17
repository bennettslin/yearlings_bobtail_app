import React from 'react';
import Popup from '../../superclasses/popup.jsx';
import AnnotationSection from './annotation-section.jsx';

const defaultProps = {
    annotationObject: {
        title: '',
        dotKeys: {}
    }
}

class AnnotationPopup extends Popup {

    getClassName() {
        return 'annotation';
    }

    getContentElement() {
        return this.props.annotationObject ?
            <AnnotationSection {...this.props}
                ref="annotationSection"
            /> : null;
    }
}

AnnotationPopup.defaultProps = defaultProps;
export default AnnotationPopup;