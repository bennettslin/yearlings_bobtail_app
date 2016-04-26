import React from 'react';

module.exports = {
    /**
     * Converts anchor tag text into annotation header.
     * FIXME: Kind of wonky still. Fix once a testing suite is implemented.
     */
    getStrippedHeader: function(text = '') {

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
    }
}