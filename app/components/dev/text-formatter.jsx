import React from 'react';
import LyricsColumn from './lyrics-column.jsx';
import AnnotationField from './annotation-field.jsx';
import SpeechBubblesField from './speech-bubbles-field.jsx';

const TextFormatter = {

    /**
     * Returns a single span element containing nested text elements.
     */
    getFormattedSpan: function(text, clickHandler, index, nestedIndex) {
        index = index || 0;
        nestedIndex = nestedIndex || 0;

        if (Array.isArray(text)) {
            return (
                <span key={nestedIndex + '-' + index}>
                    {text.map(function(textElement, index) {
                        return this.getFormattedSpan(textElement, clickHandler, index, nestedIndex + 1);
                    }.bind(this))}
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
                return <i key={nestedIndex + '-' + index}>{this.getFormattedSpan(text.italic, clickHandler, index, nestedIndex)}</i>;

            } else if (text.emphasis) {
                return <em key={nestedIndex + '-' + index}>{this.getFormattedSpan(text.emphasis, clickHandler, index, nestedIndex)}</em>;

            } else if (text.anchor) {
                return (
                    <a
                        key={nestedIndex + '-' + index}
                        onClick={clickHandler.bind(null, text.annotationKey)}
                    >
                        {this.getFormattedSpan(text.anchor, clickHandler, index, nestedIndex)}
                    </a>
                );
            }
        }
    }
}

export class FormattedLyricsColumn extends React.Component {
    render() {
        return <LyricsColumn {...this.props} TextFormatter={TextFormatter} />;
    }
}

export class FormattedAnnotationField extends React.Component {
    render() {
        return <AnnotationField {...this.props} TextFormatter={TextFormatter} />;
    }
}

export class FormattedSpeechBubblesField extends React.Component {
    render() {
        return <SpeechBubblesField {...this.props} TextFormatter={TextFormatter} />;
    }
}