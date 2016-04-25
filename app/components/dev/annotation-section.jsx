import React from 'react';
import FormatHelper from '../helpers/format-helper.js';
import FormatUtility from '../utilities/format-utility.jsx';

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
                    {FormatUtility.getDotsBlock(annotationData.codes)}
                </div>
                <h2>{FormatHelper.getStrippedHeader(annotationData.anchor)}</h2>
                {FormatUtility.getFormattedSpan(annotationData.description)}
            </div>
        );
    }
}

AnnotationSection.defaultProps = defaultProps;
export default AnnotationSection;