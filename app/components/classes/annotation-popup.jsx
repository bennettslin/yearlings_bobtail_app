import React from 'react';
import Popup from '../superclasses/popup.jsx';
import AnnotationSection from './annotation-section.jsx';

const defaultProps = {
    annotationData: null
}

class AnnotationPopup extends Popup {

    getClassName() {
        return 'annotation';
    }

    getContentElement() {
        const annotationData = this.props.annotationData;

        if (annotationData && annotationData.portalReference) {
            console.error('annotationData.portalReference', annotationData.portalReference);
        }

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