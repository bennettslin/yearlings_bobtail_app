import React from 'react';

module.exports = {

    /**
     * Returns a single span element containing nested text elements.
     */
    getFormattedSpan: function(text, clickHandler, index, nestedIndex) {
        index = index || 0;
        nestedIndex = nestedIndex || 0;

        if (Array.isArray(text)) {
            return (
                <span key={nestedIndex + index}>
                    {text.map((textElement, index) => {
                        return this.getFormattedSpan(textElement, clickHandler, index, nestedIndex + 1);
                    })}
                </span>
            );

        } else if (typeof text === 'string' || typeof text === 'object') {
            return this._getTaggedTextContent(text, clickHandler, index, nestedIndex);
        }
    },

    /**
     * Returns a single element wrapped in a span, italic, or anchor tag.
     */
    _getTaggedTextContent: function(text, clickHandler, index, nestedIndex) {
        if (typeof text === 'string' || text.noSpace) {

            /**
             * Subsequent spans of text on a line will begin with a space,
             * unless specifically told not to.
             */
            let noSpace = false;
            if (text.noSpace) {
                noSpace = true;
                text = text.noSpace;
            }

            return (
                <span key={nestedIndex + index}>
                    {(index > 0 && !noSpace ? ' ' : '')}
                    {text}
                </span>
            );

        } else {
            if (text.italic) {
                return <i key={nestedIndex + index}>{this.getFormattedSpan(text.italic, clickHandler, index, nestedIndex)}</i>;

            } else if (text.emphasis) {
                return <em key={nestedIndex + index}>{this.getFormattedSpan(text.emphasis, clickHandler, index, nestedIndex)}</em>;

            } else if (text.anchor) {
                return (
                    <a
                        key={nestedIndex + index}
                        onClick={clickHandler.bind(null, text.annotationKey)}
                    >
                        {this.getFormattedSpan(text.anchor, clickHandler, index, nestedIndex)}
                    </a>
                );
            }
        }
    }
}