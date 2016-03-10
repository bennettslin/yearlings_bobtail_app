var DevAnnotationField = React.createClass({

    getDefaultProps: function() {
        return {
            annotationSpan: null
        };
    },

    render: function() {
        return (
            <div className="dev-annotation">
                <h2>annotation</h2>
                {this.props.annotationSpan}
            </div>
        );
    }
});