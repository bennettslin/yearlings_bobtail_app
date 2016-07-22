import React, { Component } from 'react';
import Popup from '../superclasses/popup.jsx';
import AnnotationSection from './annotation-section.jsx';

const defaultProps = {
    annotation: null,
    onCloseClick() {}
}

class AnnotationPopup extends Popup {

    getClassName() {
        return 'annotation';
    }

    getContentElement() {
        return this.props.annotation ?
            <AnnotationSection {...this.props}
                inPopup={true}
            /> : null;
    }
}

AnnotationPopup.defaultProps = defaultProps;
export default AnnotationPopup;
