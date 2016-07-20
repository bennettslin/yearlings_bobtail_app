import { ALL_DOT_KEYS,
         TEXT_KEYS } from './constants.js';

export default {

    getCount(richTextObject = {}) {
        return Object.keys(richTextObject).length;
    },

    getTodoCount(richTextObject = {}) {
        const objectKeys = Object.keys(richTextObject);

        return objectKeys.reduce((todoCount, objectKey) => {
            return todoCount + !!richTextObject[objectKey].todo;
        }, 0);
    },

    getSumOfTotalWords(richTextObject = {}) {
        const objectKeys = Object.keys(richTextObject);

        return objectKeys.reduce((wordCount, objectKey) => {
            return wordCount + ALL_DOT_KEYS.reduce((newWordCount, dotKey) => {
                const richText = richTextObject[objectKey][dotKey];
                return newWordCount + (richText ? this.getTotalWords(richText) : 0);
            }, 0);
        }, 0);
    },

    getTotalWords(richText = '') {
        if (richText instanceof Array) {
            return richText.reduce((wordCount, richTextValue) => {
                return wordCount + this.getTotalWords(richTextValue);
            }, 0);

        } else if (typeof richText === 'object') {

            return TEXT_KEYS.reduce((wordCount, textKey) => {
                if (richText[textKey]) {
                    return wordCount + this.getTotalWords(richText[textKey]);
                }

                return wordCount;
            }, 0);

        // It's a string.
        } else {
            return richText.split(' ').length;
        }
    }
}
