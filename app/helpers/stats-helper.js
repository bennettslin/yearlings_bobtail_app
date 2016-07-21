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

    getSumOfTotalWordsInAnnotations(annotations = [], textKeys = TEXT_KEYS) {
        return annotations.reduce((wordCount, annotation) => {
            const { cards } = annotation;
            if (Array.isArray(cards)) {
                return cards.reduce((newWordCount, card) => {
                    return newWordCount + this.getTotalWords(card.description);
                }, wordCount);
            } else {
                return wordCount + this.getTotalWords(cards.description);
            }
        }, 0);
    },

    getTotalWords(text = '', textKeys = TEXT_KEYS) {
        if (text instanceof Array) {
            return text.reduce((wordCount, textValue) => {
                return wordCount + this.getTotalWords(textValue, textKeys);
            }, 0);

        } else if (typeof text === 'object') {

            return textKeys.reduce((wordCount, textKey) => {
                if (text[textKey]) {
                    return wordCount + this.getTotalWords(text[textKey], textKeys);
                }

                return wordCount;
            }, 0);

        // It's a string.
        } else {
            return text.split(' ').length;
        }
    }
}
