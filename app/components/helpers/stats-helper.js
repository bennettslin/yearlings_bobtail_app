import Constants from '../constants/constants.js';

module.exports = {

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
            const richText = richTextObject[objectKey].description;

            return wordCount + this.getTotalWords(richText);
        }, 0);
    },

    getTotalWords(richText = '') {
        if (richText instanceof Array) {
            return richText.reduce((wordCount, richTextValue) => {
                return wordCount + this.getTotalWords(richTextValue);
            }, 0);

        } else if (typeof richText === 'object') {

            return Constants.textKeys.reduce((wordCount, textKey) => {
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