import React from 'react';

const defaultProps = {
    annotationObject: {}
}

class AnnotationPopup extends React.Component {

    render() {
        var annotationSpan = this.props.TextFormatter.getFormattedSpan(this.props.annotationObject);

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