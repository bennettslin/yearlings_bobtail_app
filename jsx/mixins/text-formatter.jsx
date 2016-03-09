var TextFormatter = {

    /**
     * Returns either a single element or a mapped element wrapped in a span tag
     */
    getMappedTextElement: function(text, clickHandler, index, nestedIndex) {
        index = index || 0;
        nestedIndex = nestedIndex || 0;

        if (Array.isArray(text)) {
            return (
                <span key={nestedIndex + '-' + index}>
                    {text.map(function(textElement, index) {
                        return this.getMappedTextElement(textElement, clickHandler, index, nestedIndex + 1);
                    }.bind(this))}
                </span>
            );

        } else if (typeof text === 'string' || typeof text === 'object') {
            return this._getTaggedTextElement(text, clickHandler, index, nestedIndex);
        }
    },

    /**
     * Returns a single element wrapped in a span, italic, or anchor tag
     */
    _getTaggedTextElement: function(text, clickHandler, index, nestedIndex) {
        if (typeof text === 'string') {
            return (
                <span key={nestedIndex + '-' + index}>
                    {/* Begin subsequent segments of each line with a space. */}
                    {index > 0 ? ' ' : ''}
                    {text}
                </span>
            );

        } else if (typeof text === 'object') {
            if (text.italic) {
                return <i key={nestedIndex + '-' + index}>{this.getMappedTextElement(text.italic, clickHandler, index, nestedIndex)}</i>;

            } else if (text.emphasis) {
                return <em key={nestedIndex + '-' + index}>{this.getMappedTextElement(text.emphasis, clickHandler, index, nestedIndex)}</em>;

            } else if (text.anchor) {
                return (
                    <a
                        key={nestedIndex + '-' + index}
                        onClick={clickHandler.bind(null, text.annotationKey)}
                    >
                        {this.getMappedTextElement(text.anchor, clickHandler, index, nestedIndex)}
                    </a>
                );

            }
        }
    }

}