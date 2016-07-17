import React from 'react';
import Popup from '../../superclasses/popup.jsx';
import AnnotationSection from './annotation-section.jsx';

const defaultProps = {
    annotationObject: null,
    portalObjects: null,
    handlePortalClick() {},
    handleUrlClick() {}
}

/*************
 * CONTAINER *
 *************/

/****************
 * PRESENTATION *
 ****************/

class AnnotationPopup extends Popup {

    getClassName() {
        return 'annotation';
    }

    getContentElement() {
        const props = this.props,
            annotationObject = props.annotationObject;

        return annotationObject ?
            <AnnotationSection
                ref="annotationSection"
                annotationObject={annotationObject}
                portalObjects={props.portalObjects}
                handlePortalClick={props.handlePortalClick}
                handleUrlClick={props.handleUrlClick}
            /> : null;
    }
}

AnnotationPopup.defaultProps = defaultProps;
export default AnnotationPopup;