import React from 'react';

export default class DevAnnotationField extends React.Component {

    // getDefaultProps() {
    //     return {
    //         annotationSpan: null
    //     };
    // };

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="dev-annotation-field">
                <h2>annotation</h2>
                {this.props.annotationSpan}
            </div>
        );
    }
}