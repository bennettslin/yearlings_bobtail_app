import React from 'react';
import FormatHelper from '../helpers/format-helper.jsx';

const defaultProps = {
    annotationDescription: {}
}

class AnnotationPopup extends React.Component {

    render() {
        const annotationSpan = FormatHelper.getFormattedSpan(this.props.annotationDescription);

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