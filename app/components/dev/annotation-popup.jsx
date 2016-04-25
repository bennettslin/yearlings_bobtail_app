import React from 'react';
import CSSTransitionGroup from 'react-addons-css-transition-group';
import AnnotationSection from './annotation-section.jsx';

const defaultProps = {
    annotationData: null
}

class AnnotationPopup extends React.Component {

    render() {
        const annotationData = this.props.annotationData;

        return (
            <CSSTransitionGroup
                className="popup-transition-group"
                transitionName="annotation-animation"
                transitionEnterTimeout={100}
                transitionLeaveTimeout={100}
            >
            {annotationData ?
                <AnnotationSection ref="annotationSection"
                    annotationData={annotationData} /> : null
            }
            </CSSTransitionGroup>
        );
    }
}

AnnotationPopup.defaultProps = defaultProps;
export default AnnotationPopup;