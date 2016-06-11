/**
 * TODO: Allow two em dashes, just like double quotes. (for Constellations "herows auroras left")
 * Automatically capitalise all that begin with I or I' (Inject in data helper)
 */

module.exports = {

    getStringFromObject(text) {

        if (Array.isArray(text)) {
            /**
             * FIXME: This will not add a space between text fragments. This
             * works for now, since the only reason to have this method is for
             * M ("Bobtail's words"), but we may want to revisit this in the
             * future.
             */
            return text.reduce((textString, textObject, index) => {
                return textString + this.getStringFromObject(textObject);
            }, '');

        } else if (typeof text === 'object') {
            if (text.anchor) {
                return this.getStringFromObject(text.anchor);
            } else if (text.emphasis) {
                return this.getStringFromObject(text.emphasis);
            } else if (text.italic) {
                return this.getStringFromObject(text.italic);
            } else if (text.noSpace) {
                return this.getStringFromObject(text.noSpace);
            } else {
                return '';
            }

        } else {
            return text;
        }
    },

    getUncapitalisedText(text) {
        return text.charAt(0).toLowerCase() + text.slice(1);
    },

    /**
     * Converts text in anchor tag into annotation header.
     */
    getFormattedAnnotationTitle(text = '') {
        text = this._getDeletedSpecialCharactersText(text);
        text = this._getDeletedLoneDoubleQuoteText(text);

        return text;
    },

    _getDeletedSpecialCharactersText(text) {
        // Eliminate all special characters at beginning...
        if (this._hasSpecialCharacterAtIndex(text, 0)) {
            text = this._getDeletedSpecialCharactersText(text.slice(1));

        // ... and at end.
        } else if (this._hasSpecialCharacterAtIndex(text, text.length - 1)) {
            text = this._getDeletedSpecialCharactersText(text.slice(0, text.length - 1));

        // Also eliminate special character right before a double quote.
        } else if (this._hasDoubleQuoteAtIndex(text, text.length - 1) &&
                   this._hasSpecialCharacterAtIndex(text, text.length - 2)) {
            text = this._getDeletedSpecialCharactersText(text.slice(0, text.length - 2) + text.slice(text.length - 1));
        }

        return text;
    },

    _getDeletedLoneDoubleQuoteText(text) {
        /**
         * Note that this only knows how to differentiate between one double
         * quote versus two.
         */
        const firstDoubleQuoteIndex = text.indexOf('"'),
            lastDoubleQuoteIndex = text.lastIndexOf('"');

        return (firstDoubleQuoteIndex === lastDoubleQuoteIndex) ?
            text.replace('"', '') : text;
    },

    _hasDoubleQuoteAtIndex(text, index) {
        const indexedChar = text.charAt(index);
        return indexedChar === '"';
    },

    _hasSpecialCharacterAtIndex(text, index) {
        const indexedChar = text.charAt(index);
        if (index === 0) {
            return indexedChar === '—';

        } else {
            return indexedChar === ',' ||
                indexedChar === '.' ||
                indexedChar === '?' ||
                indexedChar === '!' ||
                indexedChar === '…' ||
                indexedChar === '—';
        }
    }
}