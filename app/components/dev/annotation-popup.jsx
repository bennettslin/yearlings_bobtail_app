import React from 'react';
import AnimationUtility from '../utilities/animation-utility.jsx';
import AnnotationSection from './annotation-section.jsx';

const defaultProps = {
    annotationData: null
}

class AnnotationPopup extends React.Component {

    render() {
        const annotationData = this.props.annotationData,
            annotationContentElement = annotationData ?
                <AnnotationSection
                    ref="annotationSection"
                    title={annotationData.title}
                    description={annotationData.description}
                    codes={annotationData.codes}
                /> : null;

        return AnimationUtility.getTransitionGroupWrappedElement(annotationContentElement, "annotation-animation");
    }
}

AnnotationPopup.defaultProps = defaultProps;
export default AnnotationPopup;