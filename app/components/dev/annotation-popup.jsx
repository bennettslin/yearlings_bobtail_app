import React from 'react';

const defaultProps = {
    annotationDescription: {}
}

class AnnotationPopup extends React.Component {

    render() {
        var annotationSpan = this.props.TextFormatter.getFormattedSpan(this.props.annotationDescription);

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