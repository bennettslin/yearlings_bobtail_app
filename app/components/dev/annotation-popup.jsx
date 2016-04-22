import React from 'react';
import FormatHelper from '../helpers/format-helper.jsx';

const defaultProps = {
    annotationRichText: {}
}

class AnnotationPopup extends React.Component {

    render() {
        const annotationSpan = FormatHelper.getFormattedSpan(this.props.annotationRichText);

        return (
            <div className="annotation-popup">
                <h2>annotation</h2>
                {annotationSpan}
            </div>
        );
    }
}

AnnotationPopup.defaultProps = defaultProps;
export default AnnotationPopup;