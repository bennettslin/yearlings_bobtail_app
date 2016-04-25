import React from 'react';
import FormatHelper from '../helpers/format-helper.jsx';

const defaultProps = {
    annotationData: {}
}

class AnnotationSection extends React.Component {

    render() {
        const annotationData = this.props.annotationData;

        return (
            <div ref="annotation"
                className="annotation-section">
                <div className="code-block">
                    {FormatHelper.getDotsBlock(annotationData.codes)}
                </div>
                <h2>{FormatHelper.getStrippedHeader(annotationData.anchor)}</h2>
                {FormatHelper.getFormattedSpan(annotationData.description)}
            </div>
        );
    }
}

AnnotationSection.defaultProps = defaultProps;
export default AnnotationSection;