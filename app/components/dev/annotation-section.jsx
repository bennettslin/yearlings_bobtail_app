import React from 'react';
import CSSTransitionGroup from 'react-addons-css-transition-group';
import FormatHelper from '../helpers/format-helper.jsx';

const defaultProps = {
    annotationRichText: {},
    selectedAnnotationKey: ''
}

class AnnotationSection extends React.Component {

    render() {
        const annotationSpan = FormatHelper.getFormattedSpan(this.props.annotationRichText);

        return (
            <CSSTransitionGroup
                style={{ position: 'fixed', zIndex: 1 }}
                transitionName="annotation-animation"
                transitionEnterTimeout={100}
                transitionLeaveTimeout={100}
            >
            {this.props.selectedAnnotationKey ?
                <div ref="annotation" className="section annotation-section">
                    <h2>annotation</h2>
                    {annotationSpan}
                </div> : null
            }
            </CSSTransitionGroup>
        );
    }
}

AnnotationSection.defaultProps = defaultProps;
export default AnnotationSection;