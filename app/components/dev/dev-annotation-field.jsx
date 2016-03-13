import React from 'react';

export default class DevAnnotationField extends React.Component {

    render() {
        var annotationSpan = this.props.TextFormatter.getFormattedSpan(this.props.annotationObject);

        return (
            <div className="dev-annotation-field">
                <h2>annotation</h2>
                {annotationSpan}
            </div>
        );
    }
}

DevAnnotationField.defaultProps = {
    annotationSpan: null
}