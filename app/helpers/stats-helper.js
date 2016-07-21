import { ALL_DOT_KEYS,
         TEXT_KEYS } from './constants.js';

export default {

    getCount(textObject = {}) {
        return Object.keys(textObject).length;
    },

    getTodoCount(textObject = {}) {
        const objectKeys = Object.keys(textObject);

        return objectKeys.reduce((todoCount, objectKey) => {
            return todoCount + !!textObject[objectKey].todo;
        }, 0);
    },

    getSumOfTotalWords(textObject = {}) {
        const objectKeys = Object.keys(textObject);

        return objectKeys.reduce((wordCount, objectKey) => {
            return wordCount + ALL_DOT_KEYS.reduce((newWordCount, dotKey) => {
                const text = textObject[objectKey][dotKey];
                return newWordCount + (text ? this.getTotalWords(text) : 0);
            }, 0);
        }, 0);
    },

    getTotalWords(text = '') {
        if (text instanceof Array) {
            return text.reduce((wordCount, textValue) => {
                return wordCount + this.getTotalWords(textValue);
            }, 0);

        } else if (typeof text === 'object') {

            return TEXT_KEYS.reduce((wordCount, textKey) => {
                if (text[textKey]) {
                    return wordCount + this.getTotalWords(text[textKey]);
                }

                return wordCount;
            }, 0);

        // It's a string.
        } else {
            return text.split(' ').length;
        }
    }
}
