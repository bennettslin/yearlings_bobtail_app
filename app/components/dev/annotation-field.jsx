import React from 'react';

const defaultProps = {
    annotationObject: {}
}

class AnnotationField extends React.Component {

    render() {
        var annotationSpan = this.props.TextFormatter.getFormattedSpan(this.props.annotationObject);

        return (
            <div className="annotation-field">
                <h2>annotation</h2>
                {annotationSpan}
            </div>
        );
    }
}

AnnotationField.defaultProps = defaultProps;
export default AnnotationField;