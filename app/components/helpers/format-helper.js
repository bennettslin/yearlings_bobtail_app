module.exports = {
    /**
     * Converts anchor tag text into annotation header.
     * FIXME: Kind of wonky still. Fix once a testing suite is implemented.
     */
    getFormattedAnnotationTitle: function(text = '') {

        if (typeof text === 'object') {
            text = this._getStringFromObject(text);
        }

        if (this._hasSpecialCharacterAtIndex(text, 0)) {
            text = text.slice(1);
        }

        if (this._hasSpecialCharacterAtIndex(text, text.length - 1)) {
            text = text.slice(0, text.length - 1);

        } else if (this._hasSpecialCharacterAtIndex(text, text.length - 2)) {
            text = text.slice(0, text.length - 2) + text.slice(text.length - 1);
        }

        return text;
    },

    _hasSpecialCharacterAtIndex: function(text, index) {
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
    },

    _getStringFromObject: function(text) {

        if (Array.isArray(text)) {
            /**
             * FIXME: This will not add a space between text fragments. This
             * works for now, since the only reason to have this method is for
             * M ("Bobtail's words"), but we may want to revisit this in the
             * future.
             */
            return text.reduce((textString, textObject) => {
                return textString + this._getStringFromObject(textObject);
            }, '');

        } else if (typeof text === 'object') {
            if (text.anchor) {
                return this._getStringFromObject(text.anchor);
            } else if (text.emphasis) {
                return this._getStringFromObject(text.emphasis);
            } else if (text.italic) {
                return this._getStringFromObject(text.italic);
            } else if (text.noSpace) {
                return this._getStringFromObject(text.noSpace);
            } else {
                return '';
            }

        } else {
            return text;
        }
    }
}