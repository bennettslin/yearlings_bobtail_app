module.exports = {

    getCount: function(richTextObject = {}) {
        return Object.keys(richTextObject).length;
    },

    getTodoCount: function(richTextObject = {}) {
        const objectKeys = Object.keys(richTextObject);

        return objectKeys.reduce((todoCount, objectKey) => {
            return todoCount + !!richTextObject[objectKey].todo;
        }, 0);
    },

    getSumOfTotalWords: function(richTextObject = {}) {
        const objectKeys = Object.keys(richTextObject);

        return objectKeys.reduce((wordCount, objectKey) => {
            const richText = richTextObject[objectKey].description;

            return wordCount + this.getTotalWords(richText);
        }, 0);
    },

    getTotalWords: function(richText = '') {
        if (richText instanceof Array) {
            return richText.reduce((wordCount, richTextValue) => {
                return wordCount + this.getTotalWords(richTextValue);
            }, 0);

        } else if (typeof richText === 'object') {
            // There will only ever be one of these keys.
            const possibleKeys = ['lyric', 'noSpace', 'italic', 'emphasis', 'anchor'];

            return possibleKeys.reduce((wordCount, possibleKey) => {
                if (richText[possibleKey]) {
                    return wordCount + this.getTotalWords(richText[possibleKey]);
                }

                return wordCount;
            }, 0);

        // It's a string.
        } else {
            return richText.split(' ').length;
        }
    }
}