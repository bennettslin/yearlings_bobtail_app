import React from 'react';
import Popup from '../superclasses/popup.jsx';
import AnnotationSection from './annotation-section.jsx';

const defaultProps = {
    annotationData: null,
    portalObjects: null,
    handlePortalClick() {}
}

class AnnotationPopup extends Popup {

    getClassName() {
        return 'annotation';
    }

    getContentElement() {
        const annotationData = this.props.annotationData;

        return annotationData ?
            <AnnotationSection
                ref="annotationSection"
                dotKeys={annotationData.dotKeys}
                title={annotationData.title}
                description={annotationData.description}
                portalObjects={this.props.portalObjects}
                handlePortalClick={this.props.handlePortalClick}
            /> : null;
    }
}

AnnotationPopup.defaultProps = defaultProps;
export default AnnotationPopup;