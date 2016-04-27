import React from 'react';
import AnimationUtility from '../utilities/animation-utility.jsx';
import AnnotationSection from './annotation-section.jsx';

const defaultProps = {
    annotationData: null
}

class AnnotationPopup extends React.Component {

    render() {
        const annotationData = this.props.annotationData,
            annotationElement = annotationData ?
                <AnnotationSection ref="annotationSection"
                    annotationData={annotationData} /> : null;

        return AnimationUtility.getTransitionGroupWrappedElement(annotationElement, "annotation-animation");
    }
}

AnnotationPopup.defaultProps = defaultProps;
export default AnnotationPopup;