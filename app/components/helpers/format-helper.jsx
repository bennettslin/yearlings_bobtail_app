import React from 'react';

const ANCHOR_CODES = ['narrative', 'music', 'pun', 'cross', 'reference', 'external'];

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
            return this._getTextString(text.noSpace || text, index === 0 || text.noSpace);

        } else {
            if (text.italic) {
                return <i key={nestedIndex + index}>{this.getFormattedSpan(text.italic, clickHandler, index, nestedIndex)}</i>;

            } else if (text.emphasis) {
                return <em key={nestedIndex + index}>{this.getFormattedSpan(text.emphasis, clickHandler, index, nestedIndex)}</em>;

            } else if (text.anchor) {
                return (
                    <span key={nestedIndex + index}
                        className="anchor-block">
                        {/* FIXME: This non-anchor space negates the space that starts the text in the anchor tag. Unfortunately, it doesn't obey noSpace, which we would want if the anchor tag begins with an em-dash. */}
                        {' '}
                        {this._getCodeBlock(text)}
                        <a className="anchor-link"
                            onClick={clickHandler.bind(null, text.annotationIndex)} >
                            {this.getFormattedSpan(text.anchor, clickHandler, index, nestedIndex)}
                        </a>
                    </span>
                );
            }
        }
    },

    /**
     * Replace last space with nonbreaking space.
     */
    _getTextString: function(text, noSpace) {
        const lastSpaceIndex = text.lastIndexOf(' ');

        if (lastSpaceIndex > -1) {
            text = text.slice(0, lastSpaceIndex) +
                   '\u00a0' +
                   text.slice(lastSpaceIndex + 1);
        }

        return (noSpace ? '' : ' ') + text;
    },

    /**
     * Returns a block of coloured dots for anchor tags.
     */
    _getCodeBlock: function(textObject) {
        return (
            <span className="code-block">
                {ANCHOR_CODES.filter(code => {
                    return textObject[code];
                }).map((code, index) => {
                    return (
                        <div key={index} className={'dot ' + code}>
                        </div>
                    );
                })}
            </span>
        );
    }
}