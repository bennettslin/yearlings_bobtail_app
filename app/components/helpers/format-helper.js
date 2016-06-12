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
        text = this._getDeletedWrappingCharactersText(text);

        return text;
    },

    beginsWithPronounI(text) {
        return text.indexOf('I ') === 0 || text.indexOf('I\'') === 0;
    },

    _getDeletedSpecialCharactersText(text) {
        // Eliminate all special characters at end.
        if (this._hasSpecialCharacterAtIndex(text, text.length - 1)) {
            text = this._getDeletedSpecialCharactersText(text.slice(0, text.length - 1));

        // Also eliminate special character right before a double quote.
        } else if (text.charAt(text.length - 1) === '"' &&
                   this._hasSpecialCharacterAtIndex(text, text.length - 2)) {
            text = this._getDeletedSpecialCharactersText(text.slice(0, text.length - 2) + text.slice(text.length - 1));
        }

        return text;
    },

    _getDeletedWrappingCharactersText(text) {
        /**
         * Note that this only knows how to differentiate between one wrapping
         * character versus two.
         */
        const wrappingChars = ['"', '—'];

        wrappingChars.forEach(char => {
            const firstIndex = text.indexOf(char),
                lastIndex = text.lastIndexOf(char);

            // Delete if lone wrapping character.
            if (firstIndex === lastIndex) {
                text = text.replace(char, '');

            // Delete if entire text is wrapped between wrapping characters.
            } else if (firstIndex === 0 && lastIndex === text.length - 1) {
                text = text.slice(1, -1);
            }
        });

        return text;
    },

    _hasSpecialCharacterAtIndex(text, index) {
        const indexedChar = text.charAt(index);
        return indexedChar === ',' ||
            indexedChar === '.' ||
            indexedChar === '?' ||
            indexedChar === '!' ||
            indexedChar === '…';
    }
}