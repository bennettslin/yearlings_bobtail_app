import React from 'react';
import CodeUtility from './code-utility.jsx';

module.exports = {

    /**
     * Returns a single element containing nested elements.
     */
    getFormattedTextElement: function(isLyric, text, clickHandler, index, nestedIndex) {
        index = index || 0;
        nestedIndex = nestedIndex || 0;

        if (Array.isArray(text)) {
            return (
                <span key={nestedIndex + index}>
                    {text.map((textElement, index) => {
                        return this.getFormattedTextElement(isLyric, textElement, clickHandler, index, nestedIndex + 1);
                    })}
                </span>
            );

        } else if (typeof text === 'string' || typeof text === 'object') {
            return this._getTaggedTextContent(isLyric, text, clickHandler, index, nestedIndex);
        }
    },

    /**
     * Returns a single element wrapped in a span, italic, or anchor tag.
     */
    _getTaggedTextContent: function(isLyric, text, clickHandler, index, nestedIndex) {
        if (typeof text === 'string' || text.noSpace) {
            /**
             * Subsequent spans of text on a line will begin with a space,
             * unless specifically told not to.
             */
            return this._getSpacedTextString(isLyric, text.noSpace || text, index === 0 || text.noSpace);

        } else {
            if (text.italic) {
                return <i key={nestedIndex + index}>{this.getFormattedTextElement(isLyric, text.italic, clickHandler, index, nestedIndex)}</i>;

            } else if (text.emphasis) {
                return <em key={nestedIndex + index}>{this.getFormattedTextElement(isLyric, text.emphasis, clickHandler, index, nestedIndex)}</em>;

            } else if (text.anchor) {
                // TODO: For dev purposes.
                const todoClass = text.todo ? ' todo' : '';

                return (
                    <span key={nestedIndex + index}
                        className={'code-block' + todoClass}>
                        {/* FIXME: This non-anchor space negates the space that starts the text in the anchor tag. Unfortunately, it doesn't obey noSpace, which we would want if the anchor tag begins with an em-dash. */}
                        { index > 0 ? ' ' : null}
                        {CodeUtility.getDotsBlock(text.codes)}
                        <span className="text-block">
                            <a className="anchor-link"
                                onClick={clickHandler.bind(null, text.annotationIndex)} >
                                {this.getFormattedTextElement(isLyric, text.anchor, clickHandler, index, nestedIndex)}
                            </a>
                        </span>
                    </span>
                );
            }
        }
    },

    _getSpacedTextString: function(isLyric, text, noSpace) {
        const firstSpace = (noSpace ? '' : ' ');

        // Add nonbreaking space between last two words if it's a lyric.
        if (isLyric) {
            const lastSpaceIndex = text.lastIndexOf(' ');
            if (lastSpaceIndex > -1) {
                text = text.slice(0, lastSpaceIndex) +
                       '\u00a0' +
                       text.slice(lastSpaceIndex + 1);
            }
        }

        return firstSpace + text;
    }
}