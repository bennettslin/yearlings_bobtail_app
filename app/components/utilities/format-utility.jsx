import React from 'react';
import DotsBlock from '../classes/dots/dots-block.jsx';

module.exports = {

    /**
     * Returns a single element containing nested elements.
     */
    getFormattedTextElement(isLyric, text, clickHandler, index, nestedIndex) {
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
    _getTaggedTextContent(isLyric, text, clickHandler, index, nestedIndex) {
        if (typeof text === 'string') {
            /**
             * Subsequent spans of text on a line will begin with a space,
             * unless specifically told not to.
             */
            return this._getSpacedTextString(isLyric, text, nestedIndex + index, index === 0);

        } else {
            if (text.italic) {
                return <i key={nestedIndex + index}>{this.getFormattedTextElement(isLyric, text.italic, clickHandler, index, nestedIndex)}</i>;

            } else if (text.emphasis) {
                return <em key={nestedIndex + index}>{this.getFormattedTextElement(isLyric, text.emphasis, clickHandler, index, nestedIndex)}</em>;

            } else if (text.anchor) {
                // TODO: For dev purposes.
                const todoClass = text.todo ? ' todo' : '',

                    /**
                     * If it's an annotation, then the argument passed to the
                     * click handler is the annotation index. Otherwise, it's a
                     * reference, and the argument is a url string.
                     */
                    clickHandlerArgument = text.annotationIndex ?
                        text.annotationIndex : text.urlString;

                return (
                    <span key={nestedIndex + index}>
                        {/* FIXME: This non-anchor space negates the space that starts the text in the anchor tag. Kind of hackish. */}
                        {index > 0 ? this._getSpaceElement() : null}
                        <span className={'anchor-block' + todoClass}>
                            <DotsBlock
                                dotKeys={text.dotKeys}
                                interactable={false}
                            />
                            <span className="text-block">
                                <a className="anchor-link"
                                    onClick={() => clickHandler(clickHandlerArgument)} >
                                    {this.getFormattedTextElement(isLyric, text.anchor, clickHandler, index, nestedIndex)}
                                    <span className="underline-bar"></span>
                                </a>
                            </span>
                        </span>
                    </span>
                );
            }
        }
    },

    _getSpacedTextString(isLyric, text, index) {
        // Do not add initial space if string begins with "'s".
        const firstSpace = (text.indexOf('\'s') === 0 ? '' : ' ');

        // Add nonbreaking space between last two words if it's a lyric.
        if (isLyric) {
            const lastSpaceIndex = text.lastIndexOf(' ');
            if (lastSpaceIndex > -1) {
                text = text.slice(0, lastSpaceIndex) +
                       '\u00a0' +
                       text.slice(lastSpaceIndex + 1);
            }
        }

        return (
            <span key={index}
                className="text-block">
                {firstSpace + text}
            </span>
        );
    },

    _getSpaceElement() {
        return <span className="space"> </span>;
    }
}