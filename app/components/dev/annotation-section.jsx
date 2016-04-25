import React from 'react';
import CSSTransitionGroup from 'react-addons-css-transition-group';
import FormatHelper from '../helpers/format-helper.jsx';

const defaultProps = {
    annotationData: null
}

class AnnotationSection extends React.Component {

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
                <div ref="annotation"
                    className="section annotation-section">
                    <div className="code-block">
                        {FormatHelper.getDotsBlock(annotationData.codes)}
                    </div>
                    <h2>{annotationData.anchor}</h2>
                    {FormatHelper.getFormattedSpan(annotationData.description)}
                </div> : null
            }
            </CSSTransitionGroup>
        );
    }
}

AnnotationSection.defaultProps = defaultProps;
export default AnnotationSection;