import React from 'react';
import Popup from '../superclasses/popup.jsx';
import AnnotationSection from './annotation-section.jsx';

const defaultProps = {
    annotationData: null,
    className: 'annotation'
}

class AnnotationPopup extends Popup {

    getClassName() {
        return this.props.className;
    }

    getContentElement() {
        const annotationData = this.props.annotationData;

        return annotationData ?
            <AnnotationSection
                ref="annotationSection"
                codes={annotationData.codes}
                title={annotationData.title}
                description={annotationData.description}
            /> : null;
    }
}

AnnotationPopup.defaultProps = defaultProps;
export default AnnotationPopup;