import React from 'react';
import Popup from '../../superclasses/popup.jsx';
import AnnotationSection from './annotation-section.jsx';

const defaultProps = {
    annotationObject: null,
    portalObjects: null,
    handlePortalClick() {}
}

class AnnotationPopup extends Popup {

    getClassName() {
        return 'annotation';
    }

    getContentElement() {
        const annotationObject = this.props.annotationObject;

        return annotationObject ?
            <AnnotationSection
                ref="annotationSection"
                annotationObject={annotationObject}
                portalObjects={this.props.portalObjects}
                handlePortalClick={this.props.handlePortalClick}
            /> : null;
    }
}

AnnotationPopup.defaultProps = defaultProps;
export default AnnotationPopup;