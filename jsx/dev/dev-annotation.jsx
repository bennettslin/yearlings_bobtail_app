var DevAnnotation = React.createClass({

    getDefaultProps: function() {
        return {
            annotationMappedTextElement: <div></div>
        };
    },

    render: function() {
        return (
            <div className="dev-annotation">
                {this.props.annotationMappedTextElement}
            </div>
        );
    }
});