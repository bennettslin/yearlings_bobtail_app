// For dev purposes. Calculate words in lyrics and annotations.

import keys from 'lodash.keys'

import { STAT_TEXT_KEYS } from 'constants/lyrics'

export default {

    getCount(textObject = {}) {
        return keys(textObject).length
    },

    getTodoCount(textObject = {}) {
        const objectKeys = keys(textObject)

        return objectKeys.reduce((todoCount, objectKey) => {
            return todoCount + Boolean(textObject[objectKey].todo)
        }, 0)
    },

    getSumOfTotalWordsInAnnotations(annotations = []) {
        return annotations.reduce((wordCount, annotation) => {
            const { cards: cardEntity } = annotation

            if (Array.isArray(cardEntity)) {
                return cardEntity.reduce((newWordCount, card) => {
                    return newWordCount + this.getTotalWords(card.description)
                }, wordCount)

            } else {
                return wordCount + this.getTotalWords(cardEntity.description)
            }
        }, 0)
    },

    getTotalWords(
        textEntity = '',
        textKeys = STAT_TEXT_KEYS
    ) {
        if (textEntity instanceof Array) {
            return textEntity.reduce((wordCount, textValue) => {
                return wordCount + this.getTotalWords(textValue, textKeys)
            }, 0)

        } else if (typeof textEntity === 'object') {

            return textKeys.reduce((wordCount, textKey) => {
                if (textEntity[textKey]) {
                    return wordCount + this.getTotalWords(textEntity[textKey], textKeys)
                }

                return wordCount
            }, 0)

        // It's a string.
        } else {
            return textEntity.split(' ').length
        }
    }
}
